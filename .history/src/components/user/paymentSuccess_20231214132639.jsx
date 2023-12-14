import { CreateSuccessBookingMutation } from "api/userBookingApi";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParam] = useSearchParams();
  const transactionID = searchParam.get("payment_intent");

  const handleSuccess = async () => {
    const formData = new FormData();
    formData.append("paymentIntent", transactionID);

    try {
      const createSuccessBookingMutation = CreateSuccessBookingMutation(
        formData,
        { onSuccess: () => {} }
      );
    } catch (error) {
      // Xử lý lỗi ở đây
    }
  };

  useEffect(() => {
    handleSuccess();
  }, []); // Gọi handleSuccess() chỉ một lần sau khi component được mount

  return <div></div>;
};

export default PaymentSuccess;
