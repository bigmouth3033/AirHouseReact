import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CalendarViewHost from "./CalendarViewHost";
const StyledContainer = styled.div`
  font-size: 15px;
  max-width: 370px;
  height: 275px;
  border: 1px solid #dddddd;
  padding: 24px;
  border-radius: 8px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  padding: 0 10px;
  width: 100%;
  height: 45px;
`;
const StyledCountGuest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const StyledBetween = styled.div`
  border-left: 2px solid #dddddd;
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

  @media (max-width: 992px) {
  }
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
const TotalBeforeTaxes = () => {
  const [isOppen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOppen);
  };
  return (
    <StyledContainer>
      <form>
        <div>
          <StyledSpan>$175</StyledSpan>
          <span>night</span>
        </div>
        <StyledBooking>
          <StyledCheck>
            <StyledCheckin onClick={handleClick}>
              <label>Checkin</label>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </StyledCheckin>
            <StyledBetween></StyledBetween>
            <StyledCheckin onClick={handleClick}>
              <label>Checkout</label>
              <FontAwesomeIcon icon={faChevronCircleDown} />
              {isOppen && <CalendarViewHost />}
            </StyledCheckin>
          </StyledCheck>
          <StyledCountGuest>
            <label htmlFor="">Checkout</label>
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </StyledCountGuest>
        </StyledBooking>
        <StyledButton type="submit">Continute </StyledButton>
        <StyledText>You won't be charged yet</StyledText>
      </form>
      <StyledReport>
        <a href="#">Report this listing</a>
      </StyledReport>
    </StyledContainer>
  );
};

export default TotalBeforeTaxes;
