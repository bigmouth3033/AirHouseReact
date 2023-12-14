import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);

  // Hàm xử lý submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Gọi endpoint trả về clientSecret từ server
    const response = await fetch("/api/order/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Truyền dữ liệu cần thiết từ client lên server (nếu cần)
      }),
    });

    const data = await response.json();

    // Set clientSecret từ dữ liệu trả về
    setClientSecret(data.clientSecret);

    // Confirm the PaymentIntent with the card element
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        // Thêm các thông tin khác nếu cần
      },
    });

    if (result.error) {
      console.error(result.error.message);
      // Xử lý lỗi
    } else {
      // Thanh toán thành công
      console.log(result.paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Thanh toán</button>
    </form>
  );
};
