import { UserReadBooking } from "api/userBookingApi";

export default function CheckoutForm() {
  const bookingQuery = UserReadBooking();
  
  return <div>
     {bookingQuery.isLoading && ()}
  </div>;
}
