import React from "react";
import styled, { css } from "styled-components";

import CreationBodyContainer from "../../../ui/CreationBodyContainer";
import firstImg from "../../../assets/product-creation/first-img1.webp";
import secondImg from "../../../assets/product-creation/first-img2.webp";
import thirdImg from "../../../assets/product-creation/first-img3.webp";

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  > p {
    font-weight: 600;
    font-size: 4rem;
  }

  @media (max-width: 950px) {
    > p {
      font-weight: 600;
      font-size: 2rem;
    }
  }
`;

const StyledRightContent = styled.div`
  & img {
    height: 5rem;
  }

  padding: 0 2rem 0 5rem;

  @media (max-width: 950px) {
    padding: 0 2rem 0 2rem;
  }
`;

const StyledBox = styled.div`
  display: flex;
  padding: 2.5rem 0;
  gap: 1rem;

  & img {
    height: 6.5rem;
  }

  > div {
    width: 80%;

    > p:nth-of-type(1) {
      font-weight: 600;
      font-size: 21px;
      margin-bottom: 10px;
    }

    > p:nth-of-type(2) {
      color: rgba(0, 0, 0, 0.6);
      font-size: 17px;
    }
  }

  > p {
    font-weight: 600;
    font-size: 21px;
  }

  ${(props) => {
    if (props.$isBorder === true) {
      return css`
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
      `;
    }
  }}
`;

export default function FirstPage() {
  return (
    <CreationBodyContainer quantity={2}>
      <StyledLeftContent>
        <p>it’s easy to get started on Airbnb</p>
      </StyledLeftContent>
      <StyledRightContent>
        <StyledBox>
          <p>1</p>
          <div>
            <p>Tell us about your place</p>
            <p>Share some basic info, like where it is and how many guests can stay.</p>
          </div>
          <img src={firstImg} />
        </StyledBox>
        <StyledBox $isBorder={true}>
          <p>2</p>
          <div>
            <p>Make it stand out</p>
            <p>Add 5 or more photos plus a title and description—we’ll help you out.</p>
          </div>
          <img src={secondImg} />
        </StyledBox>
        <StyledBox>
          <p>3</p>
          <div>
            <p>Finish up and publish</p>
            <p>Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing.</p>
          </div>
          <img src={thirdImg} />
        </StyledBox>
      </StyledRightContent>
    </CreationBodyContainer>
  );
}
