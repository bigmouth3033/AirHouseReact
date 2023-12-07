import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
import Images from "./Images";
import Information from "./Information";
import TotalBeforeTaxes from "./TotalBeforeTaxes";
import { DateRangeProvider } from "./DateRangeContext";

const StyledContainer = styled.div`
  max-width: 1150px;
  margin: auto;
`;
const StyledInformation = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 3fr 2fr  ;
  gap: 30px;
`;
const ViewProperty = () => {
  return (
    <DateRangeProvider>
      <StyledContainer>
        <NavViewhost />
        <Images />
        <StyledInformation>
          <Information />
          <TotalBeforeTaxes />
        </StyledInformation>
      </StyledContainer>
    </DateRangeProvider>
  );
};

export default ViewProperty;
