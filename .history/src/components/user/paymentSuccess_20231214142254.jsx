import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";

const PaymentSuccess = () => {
  const [searchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");

  const createSuccessBookingMutation = CreateSuccessBookingMutation();
  useEffect(() => {
    const formData = new FormData();
    formData.append("paymentIntent", transactionID);

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
        <div>{readSuccess.data}</div>
      )}
    </div>
  );
};

export default PaymentSuccess;
