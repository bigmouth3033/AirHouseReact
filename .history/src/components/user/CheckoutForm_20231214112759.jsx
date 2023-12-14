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
  };

  // Sử dụng clientSecret để gọi stripe.confirmPayment(). Nếu thành công, hiển thị ID của thanh toán.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe or Elements not loaded.");
      return;
    }
    console.log("Stripe or Elements loaded.");
    setIsProcessing(true);

    try {
      // Gọi hàm getClientSecret để nhận clientSecret
      const amount = 200;
      const clientSecret = await getClientSecret(amount);

      // Sử dụng clientSecret để gọi stripe.confirmPayment()
      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        clientSecret: clientSecret,

        payment_method: {
          card: elements.getElement(PaymentElement),
        },
        //Điều hướng người dùng khi thanh toán thnahf công
        confirmParams: {
          return_url:
            "https://a86f-2405-4803-db36-96d0-280f-879e-2b0c-59bd.ngrok.io/property?id=98",
        },
      });

      if (error) {
        // console.error("Stripe Confirm Payment Error:", error);
        setMessage(error.message);
      } else if (paymentIntent.id) {
        alert(paymentIntent.id);
      }
    } catch (error) {
      console.error("Stripe Confirm Payment Error:", error);
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
      {/* Hiển thị thông báo lỗi hoặc thành công */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
