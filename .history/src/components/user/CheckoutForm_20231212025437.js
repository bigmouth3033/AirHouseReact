import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";

export default function CheckoutForm() {
  const bookingQuery = UserReadBooking();

  return (
    <div>
      {bookingQuery.isLoading ? (
        <Loading />
      ) : (
        <div>
          {bookingQuery.isSuccess && (
            <div>{bookingQuery.data.price_for_stay}</div>
          )}
        </div>
      )}
    </div>
  );
}
