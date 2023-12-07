import { PropertyQueryId } from "api/propertyApi";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PopUpContainer from "ui/PopUpContainer";

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
  background: rgba(0, 0, 0, 0);
  transition: all 0.2s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const StyledImageContainer = styled.div`
  position: relative;
`;
const StyledPopup = styled(PopUpContainer)`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translate(0);
`;
const Images = () => {
  const [serachParam, setserachParam] = useSearchParams();
  const propertyQuery = PropertyQueryId(serachParam.get("id"));
  const countImages = propertyQuery.data.images.length;
  console.log(countImages);
  const [clickImage, setclickImage] = useState(false);

  return (
    <StyledContainer>
      {clickImage && (
        <StyledPopup setShowPopUp={setclickImage}>
          <div>
            {propertyQuery.data.images.map((imageUrl, index) => {
              return <img src="" alt="" />;
            })}
          </div>
        </StyledPopup>
      )}
      <StyledImageGroup>
        {propertyQuery.data.images.map((imageUrl, index) => {
          if (index < 5)
            return (
              <StyledImageContainer
                className={index === 0 ? "fisrtimage" : ""}
                onClick={() => setclickImage(true)}
              >
                <StyledImage key={index} src={imageUrl} />
                <StyledOverlay />
              </StyledImageContainer>
            );
        })}
      </StyledImageGroup>
    </StyledContainer>
  );
};

export default Images;
