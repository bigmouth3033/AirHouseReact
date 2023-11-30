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
    border-radius: 5px;
  }
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
          <div>
            <label>Checkin</label>
            <select name="" id=""></select>
            <label>Checkout</label>
            <select name="" id=""></select>
          </div>
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
