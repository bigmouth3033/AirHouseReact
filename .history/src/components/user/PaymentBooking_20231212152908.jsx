import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentBooking = () => {
  const [serachParam, setserachParam] = useSearchParams();
  const propertyQuery = UserReadBooking(serachParam.get("id"));
  const queryBooking = UserReadBooking();
  return (
    <div>
      {queryBooking.isLoading ? (
        <Loading />
      ) : (
        <div>
          {queryBooking.isSuccess && <div>data: {queryBooking.data}</div>}
        </div>
      )}
    </div>
  );
};

export default PaymentBooking;