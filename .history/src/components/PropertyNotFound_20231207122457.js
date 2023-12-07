import React from "react";
import styled from "styled-components";

const StyledPropertyNotFound = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledH2 = styled.h2`
  font-size: 100px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #717171;
  font-weight: 600;
`;
const PropertyNotFound = () => {
  return (
    <StyledPropertyNotFound>
      <StyledH2>Property not found</StyledH2>
    </StyledPropertyNotFound>
  );
};

export default PropertyNotFound;
