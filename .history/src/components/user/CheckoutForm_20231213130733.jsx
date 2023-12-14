import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSearchParams } from "react-router-dom";
import { UserReadBooking } from "api/userBookingApi";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Hàm gọi API để nhận clientSecret từ máy chủ
  const getClientSecret = async (amount) => {
    try {
      const response = await fetch(
        "https://a86f-2405-4803-db36-96d0-280f-879e-2b0c-59bd.ngrok.io/api/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { amount },
        }
      );

      const data = await response.json();
      return data.clientSecret;
    } catch (error) {
      console.error("Error fetching clientSecret:", error);
      throw new Error("Failed to fetch clientSecret");
    }
  };
  //Sử dụng clientSecret để gọi stripe.confirmPayment(). Nếu thành công, hiển thị ID của thanh toán.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    try {
      // Gọi hàm getClientSecret để nhận clientSecret
      const clientSecret = await getClientSecret(/* pass your amount here */);

      // Sử dụng clientSecret để gọi stripe.confirmPayment()
      const { paymentIntent, error } = await stripe.confirmPayment(
        clientSecret,
        {
          elements,
          confirmParams: {
            return_url:
              "https://a86f-2405-4803-db36-96d0-280f-879e-2b0c-59bd.ngrok.io/property?id=98",
          },
        }
      );

      if (error) {
        setMessage(error.message);
      } else if (paymentIntent.id) {
        alert(paymentIntent.id);
      }
    } catch (error) {
      setMessage("Failed to process payment. Please try again.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
