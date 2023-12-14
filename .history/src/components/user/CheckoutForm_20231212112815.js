import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  // Khởi tạo các hook Stripe và Elements
  const stripe = useStripe();
  const elements = useElements();

  // Trạng thái để quản lý lỗi
  const [error, setError] = useState(null);

  // Xử lý khi form được submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra xem Stripe và Elements đã được tải chưa
    if (!stripe || !elements) {
      // Stripe.js chưa được tải; vô hiệu hóa việc submit form
      return;
    }

    // Lấy đối tượng CardElement
    const cardElement = elements.getElement(CardElement);

    // Kiểm tra xem CardElement có sẵn không
    if (!cardElement) {
      console.error("Không tìm thấy CardElement");
      setError("Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.");
      return;
    }

    try {
      // Tạo mã token cho thẻ sử dụng CardElement
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        // Xử lý và hiển thị lỗi một cách tinh tế
        console.error(error);
        setError(error.message);
      } else {
        // Mã token được tạo thành công, gửi nó đến máy chủ của bạn để xử lý tiếp
        console.log("Mã Token từ Stripe:", token);
        // Bạn có thể thực hiện một yêu cầu axios ở đây đến máy chủ của bạn để xử lý thanh toán
      }
    } catch (error) {
      // Xử lý các lỗi khác
      console.error("Đã xảy ra lỗi không mong muốn:", error);
      setError("Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* CardElement hiển thị các trường nhập thẻ */}
      <CardElement />

      {/* Hiển thị thông báo lỗi nếu có */}
      {error && <div style={{ color: "red" }}>{error}</div>}

      {/* Nút Submit */}
      <button type="submit" disabled={!stripe}>
        Thanh toán
      </button>
    </form>
  );
};

export default CheckoutForm;
