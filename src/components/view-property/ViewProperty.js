import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
import Images from "./Images";
import Information from "./Information";
import TotalBeforeTaxes from "./TotalBeforeTaxes";
import { DateRangeProvider } from "./DateRangeContext";

const StyledContainer = styled.div`
  margin: 0 150px;
`;
const StyledInformation = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  &:nth-child(2) {
    position: sticky;
  }
`;
const ViewProperty = () => {
  return (
    <DateRangeProvider>
      <StyledContainer>
        <NavViewhost></NavViewhost>
        <Images></Images>
        <StyledInformation>
          <Information></Information>
          <TotalBeforeTaxes></TotalBeforeTaxes>
        </StyledInformation>
      </StyledContainer>
    </DateRangeProvider>
  );
};

export default ViewProperty;
