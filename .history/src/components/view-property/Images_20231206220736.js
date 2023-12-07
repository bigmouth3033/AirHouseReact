import { PropertyQueryId } from "api/propertyApi";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 400px;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

const StyledImageGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const StyleCOntainerImage = styled.div`
  /* border: 3px solid #dddddd;
  border-radius: 8px; */
  height: 400px;
`;
const Images = () => {
  const id = 98;
  const propertyQuery = PropertyQueryId(id);

  return (
    <StyledContainer>
      {propertyQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledImageGroup>
          {propertyQuery.isSuccess &&
            propertyQuery.data.images.map((imageUrl, index) => {
              return (
                <StyleCOntainerImage>
                  <StyledImage key={index} src={imageUrl}></StyledImage>
                </StyleCOntainerImage>
              );
            })}
        </StyledImageGroup>
      )}
    </StyledContainer>
  );
};

export default Images;
