import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const querySuccess = searchParam.get("booking_id");
  const transactionID = paymentIntent.id;
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
