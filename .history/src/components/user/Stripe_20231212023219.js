import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

export default function Stripe({ total }) {
  const stripePromise = loadStripe("Your Publishable Key");
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