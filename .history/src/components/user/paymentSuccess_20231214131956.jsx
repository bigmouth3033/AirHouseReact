import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");
  //   const [transactionID, setTransactionID] = useState(
  //     searchParam.get("payment_intent")
  //   );

  //tao

  //   const formData = new FormData();
  //   formData.append("paymentIntent", transactionID);

  //   const createSuccessBookingMutation = CreateSuccessBookingMutation();
  //   createSuccessBookingMutation.mutate(formData, {
  //     onSuccess: () => {
  //       //   const userReadSuccess = UserReadSuccess(transactionID);
  //       //  alert(userReadSuccess.data);
  //     },
  //   });
  //doc
  useEffect(() => {
    const formData = new FormData();
    formData.append("paymentIntent", transactionID);

    const createSuccessBookingMutation = CreateSuccessBookingMutation();
    createSuccessBookingMutation.mutate(formData, {
      onSuccess: () => {

    });
  }, [transactionID]);
  return <div></div>;
};

export default PaymentSuccess;
