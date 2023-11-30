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
  div {
    border: 1px solid #dddddd;
    border-radius: 5px;
    height: 45px;
  }
`;
const StyledCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCheckin = styled.div`
  border-bottom: 1px solid #dddddd;
  width: 100%;
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
              <select name="" id=""></select>
            </StyledCheckin>
            <div>
              <label>Checkout</label>
              <select name="" id=""></select>
            </div>
          </StyledCheck>
          <div>
            <label htmlFor="">Checkout</label>
            <select name="" id=""></select>
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
