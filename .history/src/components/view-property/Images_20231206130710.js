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
  console.log("propertyQuery:", propertyQuery);
  console.log("propertyQuery.data:", propertyQuery.data);

  return (
    <StyledContainer>
      {propertyQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledImageGroup>
          {propertyQuery.isSuccess &&
            propertyQuery.data.map((imageUrl, index) => {
              {
                /* console.log(imageUrl); */
              }
              return <StyledImage key={index} src={imageUrl}></StyledImage>;
            })}
        </StyledImageGroup>
      )}
    </StyledContainer>
  );
};

export default Images;
