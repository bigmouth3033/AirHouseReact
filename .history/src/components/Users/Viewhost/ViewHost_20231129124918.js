import NavHost from "components/home-body/BestHost/NavHost";
import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
const StyledContainer = styled.div`
  margin: 0 200px;
`;
const ViewHost = () => {
  return (
    <StyledContainer>
      <NavViewhost></NavViewhost>
    </StyledContainer>
  );
};

export default ViewHost;
