import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 650px;
  display: flex;
  justify-content: space-between;
  color: #717171;
  @media (max-width: 992px) {
    position: relative;
    color: black;
  }
`;
const StyledSecion1 = styled.section`
  position: relative;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const StyledSecion2 = styled.section`
  width: 50%;
  @media (max-width: 992px) {
    position: absolute;
    width: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
const StyledForm = styled.form`
  border-radius: 5px;
  height: 650px;
  padding: 30px 40px 20px 40px;
  overflow: auto;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
    height: 500px;
    padding: 30px 40px 0px 40px;
  }
`;
const StyleText = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  line-height: 50px;
  @media (max-width: 992px) {
    display: none;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
  }
`;

const StyelImg = styled.img`
  display: inline-block;
  width: 100%;
  object-fit: cover;
  height: 670px;
  @media (max-width: 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyledLable = styled.label`
  font-size: 18px;
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
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;
const StyledTextarea = styled.textarea`
  padding: 10px 20px;
  margin: 15px 0;
  width: 100%;
  height: 100px;
  @media (max-width: 992px) {
    height: 60px;
    margin: 15px 0;
  }
`;
const Details = () => {
  return (
    <StyledContainer>
      <StyledSecion1>
        <StyelImg
          src="https://demowpthemes.com/buy2rental/public/front/images/logos/1635921594_list_your_space.jpg"
          alt="Pic..."
        />
        <StyleText>
          <h2>
            You can add more details Tell travelers about your space and hosting
            style.
          </h2>
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
