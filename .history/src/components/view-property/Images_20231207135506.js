import { PropertyQueryId } from "api/propertyApi";
import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  /* height: 400px; */
`;

const StyledImageGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 10px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  .fisrtimage {
    grid-row: 1/3;
  }
`;
const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Images = () => {
  const [serachParam, setserachParam] = useSearchParams();
  // console.log(serachParam.get("id"));
  const propertyQuery = PropertyQueryId(serachParam.get("id"));
  return (
    <StyledContainer>
      <StyledImageGroup>
        {propertyQuery.isSuccess &&
          propertyQuery.data.images.map((imageUrl, index) => {
            return (
              <div>
                <StyledImage
                  className={index === 0 ? "fisrtimage" : ""}
                  key={index}
                  src={imageUrl}
                ></StyledImage>
                <StyledOverlay />
              </div>
            );
          })}
      </StyledImageGroup>
    </StyledContainer>
  );
};

export default Images;
