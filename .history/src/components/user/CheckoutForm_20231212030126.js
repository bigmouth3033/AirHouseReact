import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const bookingQuery = UserReadBooking();

  const onSubmit = () => {
    // Chuyển hướng đến component Stripe khi nhấn nút Checkout
    navigate("/stripe");
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
