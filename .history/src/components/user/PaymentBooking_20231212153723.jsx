import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentBooking = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const queryBooking = UserReadBooking(searchParam.get("booking_id"));

  // State để điều khiển hiển thị và ẩn form thanh toán
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePaymentClick = () => {
    // Khi người dùng click vào button thanh toán, hiển thị form
    setShowPaymentForm(true);
  };

  return (
    <div>
      {queryBooking.isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            {queryBooking.isSuccess && (
              <div>
                <div>Total: {queryBooking.data.price_for_stay}</div>
                {/* Hiển thị button thanh toán và kích hoạt sự kiện */}
                <button onClick={handlePaymentClick}>Thanh toán</button>
                {/* Hiển thị form thanh toán nếu state là true */}
                {showPaymentForm && (
                  <PaymentForm bookingId={searchParam.get("booking_id")} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Component mới để hiển thị form thanh toán
const PaymentForm = ({ bookingId }) => {
  // Thêm logic xử lý form thanh toán ở đây

  return (
    <div>
      {/* Hiển thị form thanh toán */}
      <form>
        {/* Thêm các trường nhập thông tin thẻ, ngày hết hạn, v.v. */}
        <label htmlFor="cardNumber">Số thẻ:</label>
        <input type="text" id="cardNumber" name="cardNumber" required />
        {/* Thêm các trường khác ở đây */}

        {/* Button để submit form */}
        <button type="submit">Xác nhận thanh toán</button>
      </form>
    </div>
  );
};

export default PaymentBooking;
