import React from "react";
const { Elements } = require("@stripe/react-stripe-js");
const { default: CheckoutForm } = require("./CheckoutForm");
const { loadStripe } = require("@stripe/stripe-js");

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

const Payment = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
