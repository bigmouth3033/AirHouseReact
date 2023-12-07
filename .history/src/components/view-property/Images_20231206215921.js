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

const StyleContainerImage = styled.div`
  max-width: 300px; /* Kích thước tối đa mặc định */

  /* Media query cho màn hình lớn hơn hoặc bằng 1440px */
  @media screen and (min-width: 1440px) {
    max-width: 400px; /* Kích thước tối đa cho màn hình 1440px trở lên */
  }

  /* Media query cho màn hình lớn hơn hoặc bằng 992px nhưng nhỏ hơn 1440px */
  @media screen and (min-width: 992px) and (max-width: 1439px) {
    max-width: 350px; /* Kích thước tối đa cho màn hình 992px - 1439px */
  }
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
            propertyQuery.data.images.map((imageUrl, index) => (
              <StyleContainerImage key={index}>
                <StyledImage src={imageUrl} />
              </StyleContainerImage>
            ))}
        </StyledImageGroup>
      )}
    </StyledContainer>
  );
};

export default Images;
