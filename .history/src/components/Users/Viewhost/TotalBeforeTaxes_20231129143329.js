import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  min-width: 370px;
  height: 275px;
`;
const TotalBeforeTaxes = () => {
  return (
    <StyledContainer>
      <form>
        <div>
          <h2>$175</h2>
          <p>night</p>
        </div>
        <div>
          <div>
            <select name="" id=""></select>
            <select name="" id=""></select>
          </div>
          <div></div>
        </div>
      </form>
      <div>
        <a href="#">Report this listing</a>
      </div>
    </StyledContainer>
  );
};

export default TotalBeforeTaxes;
