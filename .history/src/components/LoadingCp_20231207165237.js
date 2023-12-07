import React from "react";
import styled from "styled-components";
import "./Loading.css";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: center;
`;

export default function LoadingCp() {
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
