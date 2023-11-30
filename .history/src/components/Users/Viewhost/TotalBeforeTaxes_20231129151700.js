import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
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
  padding: 14px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #e51d50;
  border: 1px solid #e51d50;
  background-color: white;

  &:focus,
  &:hover {
    color: white;
    border: none;
    background-color: #e51d50;
  }

  @media (max-width: 992px) {
    padding: 10px 27px;
    font-size: 16px;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
  }
`;
const TotalBeforeTaxes = () => {
  return (
    <StyledContainer>
      <form>
        <div>
          <StyledSpan>$175</StyledSpan>
          <span>night</span>
        </div>
        <StyledBooking>
          <StyledCheck>
            <StyledCheckin>
              <label>Checkin</label>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </StyledCheckin>
            <StyledBetween></StyledBetween>
            <StyledCheckin>
              <label>Checkout</label>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </StyledCheckin>
          </StyledCheck>
          <StyledCountGuest>
            <label htmlFor="">Checkout</label>
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </StyledCountGuest>
        </StyledBooking>
        <StyledButton type="submit">Continute </StyledButton>
      </form>
      <div>
        <a href="#">Report this listing</a>
      </div>
    </StyledContainer>
  );
};

export default TotalBeforeTaxes;
