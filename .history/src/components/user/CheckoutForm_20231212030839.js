import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const bookingQuery = UserReadBooking();
  return (
    <div>
      {bookingQuery.isLoading ? (
        <Loading />
      ) : (
        <div>
          {bookingQuery.isSuccess && (
            <div>
              <h2>{bookingQuery.data.price_for_stay}</h2>
              <button>Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
