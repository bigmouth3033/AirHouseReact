import {
  CreateSuccessBookingMutation,
  UserReadSuccess,
} from "api/userBookingApi";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");

  const readSuccess = UserReadSuccess(transactionID);

  //   const handleSuccess = async () => {
  //     const formData = new FormData();
  //     formData.append("paymentIntent", transactionID);

  //     try {
  //       const createSuccessBookingMutation = CreateSuccessBookingMutation();
  //       createSuccessBookingMutation.mutate(formData, {
  //         onSuccess: () => {
  //           alert("mmmm");
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     handleSuccess();
  //   }, [transactionID]); // Gọi handleSuccess() chỉ một lần sau khi component được mount

  return <div>{readSuccess.isLoading ? (<p>sjdfkfgfk</p>):({readSuccess.data})}</div>;
};

export default PaymentSuccess;