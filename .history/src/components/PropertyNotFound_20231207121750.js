import React from "react";
import styled from "styled-components";

const StyledProperty = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;
const PropertyNotFound = () => {
  return (
    <StyledProperty>
      <h2>Property Component</h2>
      {/* Add your component content here */}
    </StyledProperty>
  );
};

export default PropertyNotFound;
