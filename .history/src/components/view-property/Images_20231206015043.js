import { PropertyQueryId } from "api/propertyApi";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const StyledImageGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Images = () => {
  const id = 98;
  const propertyQuery = PropertyQueryId(id);

  return (
    <StyledContainer>
      {propertyQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        propertyQuery.isSuccess &&
        propertyQuery.data &&
        propertyQuery.data.images && (
          <StyledImageGroup>
            {propertyQuery.data.images.map((imageUrl, index) => (
              <StyledImage
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
              />
            ))}
          </StyledImageGroup>
        )
      )}
    </StyledContainer>
  );
};

export default Images;
