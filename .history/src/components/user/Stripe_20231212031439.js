import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

export default function Stripe({ total }) {
  const stripePromise = loadStripe(
    "pk_test_51OMEQvCQa88qCWLBVl5p1ctSKLQSkvWoecYTM4fcDS4A0ZbdfB8T1U44HBhhc5n52qLCGHBSroCKW3yjp3xGbiIh00NDBpcWZJ"
  );

  return (
    <>
      {stripePromise ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>hsgfiuajhoej</p>
      )}
    </>
  );
}
