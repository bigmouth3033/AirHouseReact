import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
<script src="https://js.stripe.com/v3/" />;

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
      setError(error.message); // Handle error gracefully
    } else {
      // Send the token to your server for further processing
      console.log("Stripe Token:", token);
      // You can make an axios request here to your server to handle the payment
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}
