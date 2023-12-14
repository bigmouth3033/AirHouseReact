import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");

  const userReadSuccess = UserReadSuccess(transactionID);
  return <div>{userReadSuccess.data}</div>;
};

export default PaymentSuccess;
