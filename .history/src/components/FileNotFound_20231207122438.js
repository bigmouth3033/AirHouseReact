import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledImage = styled.img`
  object-fit: cover;
`;
const StyledContainer = styled.div`
  width: 100%;
`;
const FileNotFound = () => (
  <div className="not-found">
    <StyledContainer>
      <StyledImage
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
    </StyledContainer>
    {/* <Link to="/" className="link-home">
      Go Home
    </Link> */}
  </div>
);

export default FileNotFound;
