import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";
import styled from "styled-components";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "components/Loading";
const ThankYouContainer = styled.div`
  text-align: center;
  padding: 150px;
  line-height: 1.5;
  min-height: 700px;
  p {
    color: #717171;
    font-size: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 600;
  color: #db0c63;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-top: 20px;
`;

const PaymentSuccess = () => {
  const queryClient = useQueryClient();
  const [searchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");
  const booking_id = searchParam.get("booking_id");
  const booking_status = searchParam.get("booking_status");
  const formData = new FormData();
  const createSuccessBookingMutation = CreateSuccessBookingMutation();
  useEffect(() => {
    formData.append("payment_intent", transactionID);
    formData.append("booking_id", booking_id);
    formData.append("booking_status", booking_status);

    createSuccessBookingMutation.mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["booking", booking_id] });
      },
    });
  }, [transactionID]);

  const readSuccess = UserReadSuccess(transactionID);
  if (readSuccess.isLoading) {
    <Loading />;
  }
  if (readSuccess.isError) {
    <p>Chua thanh toan duoc</p>;
  }
  return (
    <div>
      {readSuccess.isSuccess && (
        <ThankYouContainer>
          <Description>
            <Title>Thank You!</Title>
            <p>Your payment was successful</p>
          </Description>
        </ThankYouContainer>
      )}
    </div>
  );
};

export default PaymentSuccess;
