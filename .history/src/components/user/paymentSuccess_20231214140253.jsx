import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");

  const formData = new FormData();
  formData.append("paymentIntent", transactionID);
  const createSuccessBookingMutation = CreateSuccessBookingMutation();
  createSuccessBookingMutation.mutate(formData, {
    onSuccess: () => {
      alert("Success");
    },
  });

  const readSuccess = UserReadSuccess(transactionID);

  return (
    <div>
      {readSuccess.isLoading ? <p>sjdfkfgfk</p> : <div>{readSuccess.data}</div>}
    </div>
  );
};

export default PaymentSuccess;
