import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  max-width: 654px;
`;
const Information = () => {
  return (
    <StyledContainer>
      {/* Title Host */}
      <div>
        <h2>Entire home in Ko Samui, Thailand</h2>
        <div>
          <div>6 guests . </div>
          <div>6 bedrooms . </div>
          <div>7 beds . </div>
          <div>5 baths . </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Information;
