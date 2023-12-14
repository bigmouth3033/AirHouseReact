import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

export default function Stripe({ total }) {
  const stripePromise = loadStripe(
    "pk_test_51OMEQvCQa88qCWLBVl5p1ctSKLQSkvWoecYTM4fcDS4A0ZbdfB8T1U44HBhhc5n52qLCGHBSroCKW3yjp3xGbiIh00NDBpcWZJ"
  );
  const [clientSecret, setClientSecret] = useState("");
  const items = [{ amount: total }];

  useEffect(() => {
    fetchClientSecret();
  }, []);

  const fetchClientSecret = async () => {
    try {
      const response = await axios.post(
        `${`http://localhost:8000/api`}order/pay`,
        {
          items,
        }
      );
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
