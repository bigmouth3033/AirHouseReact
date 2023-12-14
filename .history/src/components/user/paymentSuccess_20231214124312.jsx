import React from "react";

const PaymentSuccess = () => {
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
