import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Hàm gọi API để nhận clientSecret từ máy chủ
  const getClientSecret = async (amount) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );

      const data = await response.json();
      return data.clientSecret;
    } catch (error) {
      console.error("Error fetching clientSecret:", error);
      throw new Error("Failed to fetch clientSecret");
    }
  };

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
            return_url: "http://localhost:3000/property?id=98",
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
