import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import styled from "styled-components";

// Styled components
const StyledForm = styled.form`
  max-width: 400px;
  margin: auto;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledCardElement = styled(CardElement)`
  font-size: 16px;
  color: #424770;

  &::placeholder {
    color: #aab7c4;
  }

  &.StripeElement-invalid {
    color: #9e2146;
  }
`;

const StyledErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("CardElement not found");
      setError("An unexpected error occurred. Please try again.");
      return;
    }

    try {
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        console.error(error);
        setError(error.message);
      } else {
        console.log("Stripe Token:", token);
        // Handle the token (e.g., send it to your server for payment processing)
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div style={{ marginBottom: "20px" }}>
        <StyledLabel>Card Information:</StyledLabel>
        <StyledCardElement
          options={{
            style: {
              base: {},
              invalid: {},
            },
          }}
        />
      </div>

      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

      <StyledButton type="submit" disabled={!stripe}>
        Pay Now
      </StyledButton>
    </StyledForm>
  );
};

export default CheckoutForm;
