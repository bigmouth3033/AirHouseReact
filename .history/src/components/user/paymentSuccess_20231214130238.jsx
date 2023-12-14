import { CreateSuccessBookingMutation } from "api/userBookingApi";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");

  const formData = new FormData();
  formData.append("paymentIntent", transactionID);

  const createSuccessBookingMutation = CreateSuccessBookingMutation();
  createSuccessBookingMutation.mutate(formData, {
    onSuccess: () => {
      alert("Success");
    },
  });
  return <div>abc</div>;
};

export default PaymentSuccess;
