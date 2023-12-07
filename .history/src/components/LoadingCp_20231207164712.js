import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: center;
`;

export default function Loading() {
  return (
    <StyledContainer>
      <div class="loader">
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>
      </div>
    </StyledContainer>
  );
}
