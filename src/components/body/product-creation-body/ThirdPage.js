import React from "react";
import styled, { css } from "styled-components";

import CreationBodyContainer from "../../../ui/CreationBodyContainer"

import amazingPools from "../../../assets/nav-slider-img/amazing-pools.jpg";
import amazingViews from "../../../assets/nav-slider-img/amazing-views.jpg";
import beach from "../../../assets/nav-slider-img/beach.jpg";
import boats from "../../../assets/nav-slider-img/boats.jpg";
import farm from "../../../assets/nav-slider-img/farm.jpg";
import golfing from "../../../assets/nav-slider-img/golfing.jpg";
import iconicCities from "../../../assets/nav-slider-img/iconic-cities.jpg";
import nationPark from "../../../assets/nav-slider-img/nation-park.jpg";
import omg from "../../../assets/nav-slider-img/nation-park.jpg";
import rooms from "../../../assets/nav-slider-img/rooms.jpg";
import tinyhome from "../../../assets/nav-slider-img/tinyhome.jpg";
import treehouses from "../../../assets/nav-slider-img/treehouses.jpg";
import trending from "../../../assets/nav-slider-img/trending.jpg";





const StyledContainer = styled.div`
  > p{
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  margin: 0 2rem;

  
  max-width: 650px;
`;

const StyledBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 6.5rem;
  padding: 10px;


  & img{
    height: 2.5rem;
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

`;

export default function ThirdPage() {
  return (
    <CreationBodyContainer quantity={1}>
      <StyledContainer>
        <p>Which of these best describes your place?</p>
        <StyledContent>
          <StyledBox>
            
            <p></p>
            <p></p>
          </StyledBox>
          <StyledBox></StyledBox>
          <StyledBox></StyledBox>
          <StyledBox></StyledBox>
          <StyledBox></StyledBox>
          <StyledBox></StyledBox>
          <StyledBox></StyledBox>
          <StyledBox></StyledBox>
        </StyledContent>
      </StyledContainer>
    </CreationBodyContainer>
  );
}
