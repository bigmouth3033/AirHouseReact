import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { UserReadBooking } from "api/userBookingApi";
import Loading from "components/Loading";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PaymentForm from "./PaymentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarXmark,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import BookingNotFound from "./BookingNotFound";
import PaymentNotFound from "./PaymentNotFound";

const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 900px;
  margin: 0 auto;
  gap: 5rem;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
`;
const StyledContainer = styled.div``;
const StyledNameProperty = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  & div {
    margin-left: 1rem;
  }
`;
const Styledimage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const StyledCheckBlock = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px #dddddd solid;
`;
const StyledGuestBlock = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px #dddddd solid;
`;
const StyledFixedBlock = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px #dddddd solid;
`;
const StyledCheck = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  line-height: 1.7;
  align-items: center;
  span {
    color: #717171;
    font-size: 0.9rem;
  }
`;
const StyledPropertyName = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  align-items: center;
  line-height: 1.7;
  span {
    color: #717171;
    font-size: 0.9rem;
  }
`;
const StyledRefund = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;
  align-items: center;
  line-height: 1.7;
  span {
    color: #717171;
  }
  div {
    font-size: 1.3rem;
  }
`;
const formatCreatedAt = (createdAt) => {
  const date = new Date(createdAt);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};
const PaymentBooking = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const queryBooking = UserReadBooking(searchParam.get("booking_id"));
  if (queryBooking.isLoading) {
    return <Loading />;
  }

  if (queryBooking.isError) {
    return <BookingNotFound />;
  }
  const data = queryBooking.data;
  if (data.booking.booking_status === "success") {
    return <PaymentNotFound />;
  }
  return (
    <div>
      <div>
        {queryBooking.isSuccess && (
          <PaymentContainer>
            <StyledContainer>
              <StyledNameProperty>
                <Styledimage
                  src="https://i.pinimg.com/236x/c9/cc/33/c9cc33c894a3f9ab73b2674ff57d5138.jpg"
                  alt="avatar..."
                />
                <div>{data.booking.property.name}</div>
              </StyledNameProperty>
              <StyledCheckBlock>
                <StyledCheck>
                  <div>Check in day: </div>
                  <span>
                    {formatCreatedAt(data.booking.check_in_date)}, after 02:00
                    PM
                  </span>
                </StyledCheck>
                <StyledCheck>
                  <div>Check out day:</div>
                  <span>
                    {formatCreatedAt(data.booking.check_out_date)}, before:
                    12:00 PM
                  </span>
                </StyledCheck>
              </StyledCheckBlock>
              <StyledGuestBlock>
                <StyledPropertyName>
                  <div>Property type:</div>
                  <span>{data.PropertyName}</span>
                </StyledPropertyName>
                <StyledPropertyName>
                  <div>Guest Name:</div>
                  <span>
                    {data.userName.first_name}
                    <span> {data.userName.last_name}</span>
                  </span>
                </StyledPropertyName>
                <StyledPropertyName>
                  <div>Total guest:</div>
                  <span>{data.booking.total_person}</span>
                </StyledPropertyName>
              </StyledGuestBlock>
              <StyledFixedBlock>
                <StyledRefund>
                  <div>
                    <FontAwesomeIcon icon={faCalendarXmark} />
                  </div>
                  <span>Không đổi lịch</span>
                </StyledRefund>
                <StyledRefund>
                  <div>
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                  <span>Không hoàn tiền</span>
                </StyledRefund>
              </StyledFixedBlock>
            </StyledContainer>
            <div>
              <PaymentForm data={data} />
            </div>
          </PaymentContainer>
        )}
      </div>
    </div>
  );
};

// Component mới để hiển thị form thanh toán

export default PaymentBooking;
