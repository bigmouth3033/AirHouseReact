import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  // Initialize Stripe and Elements hooks
  const stripe = useStripe();
  const elements = useElements();

  // State to manage errors
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if Stripe and Elements have loaded
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet; disable form submission
      return;
    }

    try {
      // Create a token for the card using the CardElement
      const { token, error } = await stripe.createToken(
        elements.getElement(CardElement)
      );

      if (error) {
        // Handle and display the error gracefully
        console.error(error);
        setError(error.message);
      } else {
        // Token created successfully, send it to your server for further processing
        console.log("Stripe Token:", token);
        // You can make an axios request here to your server to handle the payment
      }
    } catch (error) {
      // Handle other errors
      console.error("An unexpected error occurred:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* CardElement renders the card input fields */}
      <CardElement />

      {/* Display error message if there is one */}
      {error && <div style={{ color: "red" }}>{error}</div>}

      {/* Submit button */}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
