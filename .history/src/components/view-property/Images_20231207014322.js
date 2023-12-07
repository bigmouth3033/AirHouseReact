import { PropertyQueryId } from "api/propertyApi";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  /* height: 400px; */
`;

const StyledImageGroup = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); */
  grid-template-rows: 260px 260px;
  /* grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: repeat(2, 300px); */
  gap: 20px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 17px 9px rgba(221, 221, 221, 1);
  -moz-box-shadow: 0px 0px 17px 9px rgba(221, 221, 221, 1);
  box-shadow: 0px 0px 17px 9px rgba(221, 221, 221, 1);
`;
const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
              return <StyledImage key={index} src={imageUrl}></StyledImage>;
            })}
        </StyledImageGroup>
      )}
    </StyledContainer>
  );
};

export default Images;
