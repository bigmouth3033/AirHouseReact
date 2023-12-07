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
          <StyledImageGroup>
            {/* <StyledImage src={propertyQuery.data} alt="" /> */}
            <div>{propertyQuery.data}</div>
            <StyledImage
              src="https://a0.muscache.com/im/pictures/monet/Luxury-20470768/original/cc213ade-c939-4e2f-b0af-0149bda85030?im_w=1200"
              alt=""
            />
          </StyledImageGroup>
        )
      )}
    </StyledContainer>
  );
};

export default Images;
