import {
  faAngleUp,
  faChevronCircleDown,
  faChevronDown,
  faPlus,
  faSubtract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CalendarViewHost from "./CalendarViewHost";
import { useDateRange } from "./DateRangeContext";
import { format } from "date-fns";
const StyledContainer = styled.div`
  position: relative;
  font-size: 15px;
  max-width: 370px;
  padding: 24px;
  height: 330px;
  border: 1px solid #dddddd;
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

  & span {
    font-size: 18px;
  }
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
  font-size: 14px;
  /* padding: 1rem; */
`;
const StyledCheckin = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-bottom: 1px solid #dddddd;
  padding: 10px 30px 10px 30px;
  width: 100%;
  cursor: pointer;
`;
const StyledCheckout = styled.div`
  text-align: right;
  padding: 1rem;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-bottom: 1px solid #dddddd;
  padding: 10px 30px 10px 30px;
  width: 100%;
  cursor: pointer;
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

const StyledContainerBooking = styled.div`
  position: relative;
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
              <StyledSpan>
                ${data.base_price}
                <span> night</span>
              </StyledSpan>
            </div>
            <StyledContainerBooking>
              <StyledBooking>
                <StyledCheck>
                  <StyledCheckin onClick={handleClick}>
                    <label>Checkin</label>
                    <div>{`${format(
                      selectedDateRange[0].startDate,
                      "yyyy-MM-dd"
                    )}`}</div>
                  </StyledCheckin>

                  <StyledCheckout onClick={handleClick}>
                    <label>Checkout</label>
                    <div>{`${format(
                      selectedDateRange[0].endDate,
                      "yyyy-MM-dd"
                    )}`}</div>
                  </StyledCheckout>

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
              <div>
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
                    {showText ? (
                      <StyledGuest onClick={handleClose}>
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
                    ) : null}
                  </div>
                )}
              </div>
            </StyledContainerBooking>
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
