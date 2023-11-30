import NavHost from "components/home-body/BestHost/NavHost";
import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  margin: 0 200px;
`;
const ViewHost = () => {
  return (
    <StyledContainer>
      <NavHost></NavHost>
    </StyledContainer>
  );
};

export default ViewHost;
