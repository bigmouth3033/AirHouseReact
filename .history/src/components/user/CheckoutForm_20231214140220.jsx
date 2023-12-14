import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { CreateSuccessBookingMutation } from "api/userBookingApi";

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

    // Gọi hàm getClientSecret để nhận clientSecret
    const amount = 2000;
    const clientSecret = await getClientSecret(amount);
    //cần submit để confirm
    elements.submit();
    // Sử dụng clientSecret để gọi stripe.confirmPayment()
    const { paymentIntent, error } = await stripe.confirmPayment({
      clientSecret: clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/sucsessPayment",
      },
    });

    if (error) {
      // console.error("Stripe Confirm Payment Error:", error);
      setMessage(error.message);
    } else if (paymentIntent.id) {
      //   const transactionID = paymentIntent.id;
      //   const formData = new FormData();
      //   formData.append("paymentIntent", transactionID);
      //   const createSuccessBookingMutation = CreateSuccessBookingMutation();
      //   createSuccessBookingMutation.mutate(formData, {
      //     onSuccess: () => {
      //       alert("Success");
      //     },
      //   });
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
