import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import { useHistory } from "react-router-dom";

export default function CheckoutForm() {
  const history = useHistory();
  const bookingQuery = UserReadBooking();
  const onSubmit = () => {
    // Chuyển hướng đến component Stripe khi nhấn nút Checkout
    history.push("/stripe");
  };
  return (
    <div>
      {bookingQuery.isLoading ? (
        <Loading />
      ) : (
        <div>
          {bookingQuery.isSuccess && (
            <div>
              <h2>{bookingQuery.data.price_for_stay}</h2>
              <button onSubmit={onSubmit}>Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
