import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";

// Tạo một instance của Stripe với public key của bạn
const stripePromise = loadStripe("your_public_key");

// Component cha chứa Elements và CardElement
const StripeForm = () => {
  // Xử lý logic khi nhận được token từ Stripe
  const handlePayment = (token) => {
    // Xử lý token ở đây, ví dụ: gửi token đến server để xử lý thanh toán
    console.log("Stripe Token:", token);
  };

  return (
    <Elements stripe={stripePromise}>
      <form>
        {/* Bọc CardElement trong form của Stripe */}
        <CardElement
          options={{
            style: {
              base: {},
              invalid: {},
            },
          }}
        />

        {/* Nút thanh toán */}
        <button
          type="button"
          onClick={() =>
            stripePromise
              .confirmCardPayment("client_secret_from_server")
              .then((result) => {
                if (result.error) {
                  console.error(result.error);
                } else {
                  // Thanh toán thành công, xử lý token
                  handlePayment(result.paymentIntent.payment_method);
                }
              })
          }
        >
          Pay Now
        </button>
      </form>
    </Elements>
  );
};

export default StripeForm;
