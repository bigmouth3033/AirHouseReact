import NavHost from "components/home-body/BestHost/NavHost";
import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
import Images from "./Images";
import Information from "./Information";
import TotalBeforeTaxes from "./TotalBeforeTaxes";
const StyledContainer = styled.div`
  margin: 0 200px;
`;
const ViewHost = () => {
  return (
    <StyledContainer>
      <NavViewhost></NavViewhost>
      <Images></Images>
      <div>
        <Information></Information>
        <TotalBeforeTaxes></TotalBeforeTaxes>
      </div>
    </StyledContainer>
  );
};

export default ViewHost;
