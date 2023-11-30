import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  max-width: 370px;
  height: 275px;
  border: 1px solid #dddddd;
  padding: 0 24px 24px 24px;
  border-radius: 8px;
`;
const StyledBooking = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid #dddddd;
  border-radius: 5px;
`;
const StyledCheck = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;
const StyledCheckin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  height: 45px;
`;
const TotalBeforeTaxes = () => {
  return (
    <StyledContainer>
      <form>
        <div>
          <h2>$175</h2>
          <p>night</p>
        </div>
        <StyledBooking>
          <StyledCheck>
            <StyledCheckin>
              <label>Checkin</label>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </StyledCheckin>
            <StyledCheckin>
              <label>Checkout</label>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </StyledCheckin>
          </StyledCheck>
          <div>
            <label htmlFor="">Checkout</label>
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </div>
        </StyledBooking>
      </form>
      <div>
        <a href="#">Report this listing</a>
      </div>
    </StyledContainer>
  );
};

export default TotalBeforeTaxes;
