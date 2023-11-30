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
