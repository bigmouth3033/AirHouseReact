import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
import Images from "./Images";
import Information from "./Information";
import TotalBeforeTaxes from "./TotalBeforeTaxes";
const StyledContainer = styled.div`
  margin: 0 200px;
`;
const StyledInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const ViewHost = () => {
  return (
    <StyledContainer>
      <NavViewhost></NavViewhost>
      <Images></Images>
      <StyledInformation>
        <Information></Information>
        <TotalBeforeTaxes></TotalBeforeTaxes>
      </StyledInformation>
    </StyledContainer>
  );
};

export default ViewHost;
