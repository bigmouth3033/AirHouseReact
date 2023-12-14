import styled from "styled-components";

const StyledCheckoutForm = styled.div`
  width: 50%; /* Thiết lập chiều rộng là 50% */
  float: left; /* Dùng float để component chiếm 50% bên trái */
`;

const StyledPayButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // Redirect logic
    }
  };

  return (
    <StyledCheckoutForm>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <StyledPayButton disabled={!stripe}>Submit</StyledPayButton>
      </form>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
