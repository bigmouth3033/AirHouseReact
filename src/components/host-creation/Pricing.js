import React from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/photos.jpg";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  border: 1px solid black;

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
  overflow: auto;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 30px 40px 0px 40px;
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

const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;


const StyledLable = styled.label`
  font-size: 17px;
  padding-left: 10px;
  color: black;
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
  margin-top: 30px;
`;

const StyledTitle = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
  background-color: #eeeeee;
  padding: 10px 20px;

  @media (max-width: 992px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const StyledButtonInput = styled.div`
  border: 1px solid #717171;
  height: 35px;
  width: calc(100% - 100px);
  margin: 30px 50px 5px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 34px;
    background-color: #dddddd;
    border: 1px solid #717171;
  }
  input {
    width: calc(100% - 25px);
    height: 34px;
  }
  @media (max-width: 992px) {
    width: calc(100% - 60px);
    margin: 10px 20px;
  }
`;
const StyledBoderInput = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (max-width: 992px) {
    border: 1px solid #eeeeee;
    height: 170px;
    margin-bottom: 25px;
  }
`;
const StyledInputCheck = styled.input`
  cursor: pointer;
  zoom: 1.5;
`;
const StyleGroupPricing = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;
`;
const StyledSpan = styled.span`
  color: red;
`;
const StyledP = styled.p`
  margin: 15px 50px 0 50px;
  font-size: 18px;
  @media (max-width: 992px) {
    margin: 5px 20px 0 20px;
    font-size: 15px;
  }
`;
const Pricing = () => {
  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledOverlay />
        <StyleText>
          <h2>Add your photos & videos</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledBoderInput>
            <StyledTitle>Base price</StyledTitle>
            <StyledLable>
              Daily/hourly Price <StyledSpan>*</StyledSpan>
            </StyledLable>
            <StyledButtonInput>
              <p>$</p>
              <input type="number" />
            </StyledButtonInput>
            <StyledP>
              You can offer discounts for longer stays by setting
              <StyledSpan> weekly and monthly</StyledSpan> prices.
            </StyledP>
          </StyledBoderInput>
          {/* chikhoi */}
          <StyledBoderInput>
            <StyledTitle>Additional Pricing Options</StyledTitle>
            <StyleGroupPricing>
              <StyledInputCheck type="checkbox" />
              <StyledLable htmlFor="">Cleaning fee</StyledLable>
            </StyleGroupPricing>
            <StyleGroupPricing>
              <StyledInputCheck type="checkbox" />
              <StyledLable htmlFor="">Additional guests</StyledLable>
            </StyleGroupPricing>
            <StyleGroupPricing>
              <StyledInputCheck type="checkbox" />
              <StyledLable htmlFor="">Security deposit</StyledLable>
            </StyleGroupPricing>
            <StyleGroupPricing>
              <StyledInputCheck type="checkbox" />
              <StyledLable htmlFor="">Weekend pricing</StyledLable>
            </StyleGroupPricing>
          </StyledBoderInput>

          <StyledButton>
            <StyledButtonBack type="submit">Back</StyledButtonBack>
            <StyledButtonNext type="submit">Next</StyledButtonNext>
          </StyledButton>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default Pricing;
