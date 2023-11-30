import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: grid;
`;
const StyledImage = styled.img`
  max-width: 50%;
`;
const StyledImageGroup = styled.div`
  display: grid;
  gap: 20px;
`;
const Images = () => {
  return (
    <StyledContainer>
      <StyledImageGroup>
        <StyledImage
          src="https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=1200"
          alt=""
        />
        <StyledImage
          src="https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=1200"
          alt=""
        />
      </StyledImageGroup>
    </StyledContainer>
  );
};

export default Images;
