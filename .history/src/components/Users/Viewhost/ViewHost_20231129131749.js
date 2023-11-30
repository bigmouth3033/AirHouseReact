import NavHost from "components/home-body/BestHost/NavHost";
import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
import Images from "./Images";
const StyledContainer = styled.div`
  margin: 0 200px;
`;
const ViewHost = () => {
  return (
    <StyledContainer>
      <NavViewhost></NavViewhost>
      <Images></Images>
    </StyledContainer>
  );
};

export default ViewHost;
