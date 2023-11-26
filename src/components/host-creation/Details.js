import React from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/room_bed.jpg";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  min-height: 50rem;
  border-bottom: 1px solid black;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const StyledSecion1 = styled.section`
  min-height: 10rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const StyledSecion2 = styled.section``;

const StyledForm = styled.form`
  border-radius: 5px;
  padding: 30px 40px 20px 40px;

  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 30px 40px 0px 40px;
  }
`;
const StyleText = styled.div`
  line-height: 40px;
  color: white;
  z-index: 99;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 25px;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
    }
  }
`;

const StyledLable = styled.label`
  font-size: 16px;
  color: #717171;
`;
const StyledButtonBack = styled.button`
  padding: 14px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #e51d50;
  border: 1px solid #e51d50;
  background-color: white;

  &:focus,
  &:hover {
    color: white;
    border: none;
    background-color: #e51d50;
  }
  @media (max-width: 992px) {
    padding: 10px 27px;
    font-size: 16px;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
  }
`;
const StyledButtonNext = styled.button`
  padding: 14px 32px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border: 1px solid #e51d50;
  background-color: #e51d50;

  &:focus,
  &:hover {
    color: white;
    border: none;
    background-color: #e51d50;
  }

  @media (max-width: 992px) {
    padding: 10px 27px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 30px;
    color: white;
    background-color: #e51d50;
  }
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
`;
const StyledTextarea = styled.textarea`
  padding: 10px 20px;
  margin: 15px 0;
  width: 100%;
  height: 100px;
  border-radius: 5px;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    height: 100px;
    margin: 15px 0;
  }
`;

const StyledImgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const Details = () => {
  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledImgOverlay />
        <StyleText>
          <h2>You can add more details Tell travelers about your space and hosting style.</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledTitle>Details</StyledTitle>
          <StyledLable htmlFor="">About Place</StyledLable>
          <StyledTextarea></StyledTextarea>
          <StyledLable htmlFor="">Place is great for</StyledLable>
          <StyledTextarea></StyledTextarea>
          <StyledLable htmlFor="">Guest Access</StyledLable>
          <StyledTextarea></StyledTextarea>
          <StyledLable htmlFor="">Interaction with Guests</StyledLable>
          <StyledTextarea></StyledTextarea>
          <StyledLable htmlFor="">Other Things to Note</StyledLable>
          <StyledTextarea></StyledTextarea>
          <StyledLable htmlFor="">Overview</StyledLable>
          <StyledTextarea></StyledTextarea>
          <StyledLable htmlFor="">Getting Around</StyledLable>
          <StyledTextarea></StyledTextarea>
          <StyledButton>
            <StyledButtonBack type="submit">Back</StyledButtonBack>
            <StyledButtonNext type="submit">Next</StyledButtonNext>
          </StyledButton>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default Details;
