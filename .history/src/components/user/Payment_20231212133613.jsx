import React from "react";
import styled from "styled-components";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

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

// Styled components
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

const Payment = () => {
  return (
    <PaymentContainer>
      <Title>Secure Payment</Title>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </PaymentContainer>
  );
};

export default Payment;
