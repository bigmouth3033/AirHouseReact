import { PropertyQueryId } from "api/propertyApi";
import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: grid;
`;
const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
  /* border: 10px solid #dddddd; */
`;
const StyledImageGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const Images = () => {
  const propertyQuery = PropertyQueryId(98);
  return (
    <StyledContainer>
      {propertyQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        propertyQuery.isSuccess && (
            {/* <StyledImage src="" alt="" /> */}
            {propertyQuery.data.map((property, index) => {
              return
          <StyledImageGroup>
               <StyledImage key={index} src={property.images} alt="" />;
          </StyledImageGroup>
            })}
        )
      )}
    </StyledContainer>
  );
};

export default Images;
