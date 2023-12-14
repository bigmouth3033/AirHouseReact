import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Stripe = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra xem Stripe đã được load chưa
    if (!stripe || !elements) {
      return;
    }

    // Tạo token hoặc paymentMethod từ thẻ tín dụng
    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error.message);
      setPaymentError(error.message);
      return;
    }

    // Gửi token và thông tin thanh toán về server
    const response = await fetch("/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token.id,
        // Thêm các thông tin khác như địa chỉ, số lượng, giá cả, v.v.
      }),
    });

    if (response.ok) {
      console.log("Payment successful!");
      // Xử lý sau khi thanh toán thành công (chuyển hướng, hiển thị thông báo, v.v.)
    } else {
      console.error("Payment failed.");
      // Xử lý sau khi thanh toán thất bại
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <div style={{ color: "red" }}>{paymentError}</div>}
      <button type="submit">Thanh toán</button>
    </form>
  );
};

export default Stripe;
