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
        <StyledImageGroup>
          {propertyQuery.isSuccess && Array.isArray(propertyQuery.data) ? (
            propertyQuery.data.map((imageUrl, index) => (
              <StyledImage key={index} src={imageUrl} />
            ))
          ) : (
            <p>Data format is not as expected.</p>
          )}
        </StyledImageGroup>
      )}
    </StyledContainer>
  );
};

export default Images;
