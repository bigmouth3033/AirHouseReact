import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";

const PaymentSuccess = () => {
  const [searchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");
  const payment_intent_client_secret = searchParam.get(
    "payment_intent_client_secret"
  );
  const redirect_status = searchParam.get("redirect_status");

  const createSuccessBookingMutation = CreateSuccessBookingMutation();
  useEffect(() => {
    const formData = new FormData();
    formData.append("payment_intent", transactionID);
    formData.append(
      "payment_intent_client_secret",
      payment_intent_client_secret
    );
    formData.append("redirect_status", redirect_status);

    createSuccessBookingMutation.mutate(formData, {
      onSuccess: () => {
        alert("Success");
      },
    });
  }, [transactionID]);

  const readSuccess = UserReadSuccess(transactionID);

  return (
    <div>
      {readSuccess.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>{readSuccess.data.paymentid}</div>
      )}
    </div>
  );
};

export default PaymentSuccess;
