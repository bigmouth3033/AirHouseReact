import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");
  const [transactionId, setTransactionId] = useSearchParams;
  //tao
  console.log(transactionID);
  const formData = new FormData();
  formData.append("paymentIntent", transactionID);

  const createSuccessBookingMutation = CreateSuccessBookingMutation();
  createSuccessBookingMutation.mutate(formData, {
    onSuccess: () => {
      //  const userReadSuccess = UserReadSuccess(transactionID);
      //  alert(userReadSuccess.data);
    },
  });
  //doc
  return <div></div>;
};

export default PaymentSuccess;
