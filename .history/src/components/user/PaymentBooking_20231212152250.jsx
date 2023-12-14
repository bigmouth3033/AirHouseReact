import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import React from "react";

const PaymentBooking = () => {
  const queryBooking = UserReadBooking();
  return (
    <div>
      {queryBooking.isLoading ? (
        <Loading />
      ) : (
        <div>{queryBooking.isSuccess && <div>{queryBooking.data}</div>}</div>
      )}
    </div>
  );
};

export default PaymentBooking;
