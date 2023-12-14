import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CalendarViewHost from "./CalendarViewHost";
import Calendar from "react-calendar";
import "./calendar.css";
import {
  faAngleUp,
  faChevronDown,
  faPlus,
  faSubtract,
} from "@fortawesome/free-solid-svg-icons";
import { CreateBookingMutation } from "api/userBookingApi";
import { CreateTransactionMutation } from "api/transactionApi";

const StyledContainer = styled.div`
  position: relative;
  font-size: 15px;
  max-width: 370px;
  height: 330px;
  border: 1px solid #dddddd;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 40px;
  @media (max-width: 992px) {
    width: 470px;
  }
`;
const StyledSpan = styled.span`
  display: inline-block;
  font-size: 22px;
  padding: 0 10px 30px 0;
`;
const StyledBooking = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid #dddddd;
  border-radius: 5px;
`;
const StyledCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCheckin = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-bottom: 1px solid #dddddd;
  padding: 10px 10px 0 10px;
  width: 100%;
  /* height: 48px; */
  cursor: pointer;
  & label {
    text-align: center;
    margin-bottom: 5px;
  }
  & div {
    text-align: center;
  }
`;
const StyledCountGuest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
`;
const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #e51d50;
  border: none;
  border-radius: 5px;
  margin-bottom: 25px;
`;
const StyledText = styled.p`
  text-align: center;
`;
const StyledReport = styled.div`
  text-align: center;
  a {
    color: #717171;
    text-decoration: none;
    font-size: 16px;
  }
`;
const StyledCalendar = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StyledGuest = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  border: 1px solid #dddddd;
  border-radius: 5px;
  z-index: 10;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
`;

const StyledAdultChildren = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; // Canh giữa ngang
  align-items: center;
  padding: 0.5rem 0; // Thêm padding cho phần nội dung
  border-bottom: 1px solid #dddddd; // Đường kẻ chia giữa các dòng
`;
const StyledAddSub = styled.span`
  font-size: 10px;
  padding: 0 12px;
`;

const TotalBeforeTaxes = ({
  data,
  value,
  setValue,
  onHandleChange,
  disabledBookDate,
}) => {
  const createBooking = CreateBookingMutation();
  const createTransaction = CreateTransactionMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [icon, setIcon] = useState(true);

  const handleClickDropdown = () => {
    setShowText((prevShowText) => !prevShowText);
    setIcon((icon) => !icon);
  };

  const { start_date, end_date, minimum_stay, maximum_stay } = data;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCalendarClick = (e) => {
    // Ngăn chặn lan tỏa sự kiện từ StyledCalendar đến StyledCheckin
    e.stopPropagation();
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const onSubmit = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("property_id", data.id);
    formData.append("check_in_date", formatDate(new Date(value[0])));

    if (value[1]) {
      formData.append("check_out_date", formatDate(new Date(value[1])));
    } else {
      formData.append("check_out_date", formatDate(new Date(value[0])));
    }

    const bookedLength =
      new Date(value[1]).getDate() - new Date(value[0]).getDate();
    const siteFees = formData.append("base_price", data.base_price);
    formData.append("total", data.base_price * (bookedLength + 1));
    formData.append("site_fees", data.base_price * bookedLength * 0.06);
    formData.append("booking_date", formatDate(new Date()));
    formData.append("total_person", 4);

    createBooking.mutate(formData, {
      onSuccess: () => {
        alert("success");
      },
    });
  };
  //paymentOnline
  const [amount, setAmount] = useState(1000);
  const handlePayment = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error("Payment request failed");
      }

      const data = await response.json();

      // Sử dụng data.client_secret để thực hiện thanh toán trên phía client

      console.log("Client Secret:", data.client_secret);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //
  return (
    <StyledContainer>
      <div>
        <div>
          <form>
            <div>
              <StyledSpan>${data.base_price}</StyledSpan>
              <span>night</span>
            </div>
            <StyledBooking>
              <StyledCheck>
                <StyledCheckin onClick={handleClick}>
                  <label>Checkin</label>
                </StyledCheckin>

                <StyledCheckin onClick={handleClick}>
                  <label>Checkout</label>
                </StyledCheckin>

                {isOpen && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.5)",
                      zIndex: 1,
                    }}
                    onClick={handleClose}
                  >
                    <StyledCalendar onClick={handleCalendarClick}>
                      {isOpen && (
                        <Calendar
                          onChange={onHandleChange}
                          tileDisabled={disabledBookDate}
                          allowPartialRange={true}
                          selectRange={true}
                          returnValue={"range"}
                          view={"month"}
                          minDate={new Date()}
                          maxDate={new Date(end_date)}
                          maxDetail={"month"}
                          value={value}
                          data={data}
                        />
                      )}
                    </StyledCalendar>
                  </div>
                )}
              </StyledCheck>
              <StyledCountGuest onClick={handleClickDropdown}>
                <label htmlFor="">Guests</label>

                <FontAwesomeIcon icon={faChevronCircleDown} />
              </StyledCountGuest>
            </StyledBooking>
            <div>
              {showText && (
                <StyledGuest>
                  <StyledAdultChildren>
                    <div>Adults</div>
                    <div>
                      <StyledAddSub>
                        <FontAwesomeIcon icon={faSubtract} />
                      </StyledAddSub>
                      1
                      <StyledAddSub>
                        <FontAwesomeIcon icon={faPlus} />
                      </StyledAddSub>
                    </div>
                  </StyledAdultChildren>
                  <StyledAdultChildren>
                    <div>Childrens</div>
                    <div>
                      <StyledAddSub>
                        <FontAwesomeIcon icon={faSubtract} />
                      </StyledAddSub>
                      1
                      <StyledAddSub>
                        <FontAwesomeIcon icon={faPlus} />
                      </StyledAddSub>
                    </div>
                  </StyledAdultChildren>
                </StyledGuest>
              )}
            </div>
            <StyledButton onClick={onSubmit} type="submit">
              Continute
            </StyledButton>
            <StyledText>You won't be charged yet</StyledText>
          </form>
          <StyledReport>
            <a href="#">Report this listing</a>
          </StyledReport>
        </div>
      </div>
    </StyledContainer>
  );
};

export default TotalBeforeTaxes;
