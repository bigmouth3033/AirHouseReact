import {
  faAngleUp,
  faChevronCircleDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CalendarViewHost from "./CalendarViewHost";
import { useDateRange } from "./DateRangeContext";
import { format } from "date-fns";
import { PropertyQueryId } from "api/propertyApi";
import { useSearchParams } from "react-router-dom";
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
const StyledGuest = styled.div`
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
const TotalBeforeTaxes = ({ data }) => {
  const { selectedDateRange, countDay } = useDateRange();
  const [isOpen, setIsOpen] = useState(false);
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
  const [showText, setShowText] = useState(false);

  const [icon, setIcon] = useState(true);
  const handleClickDropdown = () => {
    setShowText((prevShowText) => !prevShowText);
    setIcon((icon) => !icon);
  };

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
                  <div>{`${format(
                    selectedDateRange[0].startDate,
                    "yyyy-MM-dd"
                  )}`}</div>
                </StyledCheckin>

                <StyledCheckin onClick={handleClick}>
                  <label>Checkout</label>
                  <div>{`${format(
                    selectedDateRange[0].endDate,
                    "yyyy-MM-dd"
                  )}`}</div>
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
                      {isOpen && <CalendarViewHost data={data} />}
                    </StyledCalendar>
                  </div>
                )}
              </StyledCheck>

              <StyledCountGuest onClick={handleClickDropdown}>
                <label>Guests</label>
                <div>
                  {icon ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleUp} />
                  )}
                </div>
              </StyledCountGuest>
            </StyledBooking>
            <StyledGuest>{showText ? <div>a</div> : null}</StyledGuest>
            <StyledButton type="submit">Continute </StyledButton>
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
