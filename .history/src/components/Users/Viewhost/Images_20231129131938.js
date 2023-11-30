import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: grid;
`;
const StyledImage = styled.img`
  max-width: 50%;
`;
const Images = () => {
  return (
    <StyledContainer>
      <StyledImage
        src="https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=1200"
        alt=""
      />
      <StyledImage
        src="https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=1200"
        alt=""
      />
    </StyledContainer>
  );
};

export default Images;
