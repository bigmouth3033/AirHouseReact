import { CreateSuccessBookingMutation } from "api/userBookingApi";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");

  //tao

  const formData = new FormData();
  formData.append("paymentIntent", transactionID);

  const createSuccessBookingMutation = CreateSuccessBookingMutation();
  createSuccessBookingMutation.mutate(formData, {
    onSuccess: () => {
      //   const userReadSuccess = UserReadSuccess(transactionID);
      //  alert(userReadSuccess.data);
    },
  });
  //doc

  return <div></div>;
};

export default PaymentSuccess;
