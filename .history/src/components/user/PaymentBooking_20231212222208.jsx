import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CheckoutForm from "./CheckoutForm";

const PaymentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;
const stripePromise = loadStripe(
  "pk_test_51OMEQvCQa88qCWLBVl5p1ctSKLQSkvWoecYTM4fcDS4A0ZbdfB8T1U44HBhhc5n52qLCGHBSroCKW3yjp3xGbiIh00NDBpcWZJ"
);

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const PaymentBooking = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const queryBooking = UserReadBooking(searchParam.get("booking_id"));

  // State để điều khiển hiển thị và ẩn form thanh toán
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePaymentClick = () => {
    // Khi người dùng click vào button thanh toán, đặt state showPaymentForm thành true
    setShowPaymentForm(true);
  };

  return (
    <div>
      {queryBooking.isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            {queryBooking.isSuccess && (
              <div>
                <div>Total: {queryBooking.data.price_for_stay}</div>
                {/* Hiển thị button thanh toán và kích hoạt sự kiện */}
                <button onClick={handlePaymentClick}>Thanh toán</button>
                {/* Hiển thị form thanh toán nếu state là true */}
                {showPaymentForm && (
                  <PaymentForm bookingId={searchParam.get("booking_id")} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Component mới để hiển thị form thanh toán
const PaymentForm = ({ bookingId }) => {
  return (
    <PaymentContainer>
      <Title>Secure Payment</Title>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </PaymentContainer>
  );
};

export default PaymentBooking;
