import React from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/description.jpg";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid black;
  min-height: 50rem;
  color: #717171;

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
  margin-top: 15px;
  padding: 30px 40px 0 40px;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const StyleText = styled.div`
  line-height: 30px;
  color: white;
  z-index: 99;

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
    }
  }
`;

const StyelImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 600px;
  object-fit: cover;
  @media (max-width: 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyledLable = styled.label`
  font-size: 18px;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0 35px 0;
  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
  }
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
const StyledSpan = styled.span`
  color: red;
`;
const StyledTitle = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;
const StyledTextarea = styled.textarea`
  padding: 10px 20px;
  margin: 40px 0;
  width: 100%;
  height: 200px;
  @media (max-width: 992px) {
    height: 100px;
    margin: 28px 0;
  }
`;

const StyledImgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const Description = () => {
  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledImgOverlay />
        <StyleText>
          <h2>Add description of your space</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledTitle>Desription</StyledTitle>
          <StyledLable htmlFor="">
            Listing Name <StyledSpan>*</StyledSpan>
          </StyledLable>
          <StyledInput type="text" placeholder="Entire home/apt in " />
          <StyledLable htmlFor="">
            Summary <StyledSpan>*</StyledSpan>
          </StyledLable>
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

export default Description;
