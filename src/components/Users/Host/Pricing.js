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
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
const Photos = () => {
  return (
    <StyledContainer>
      <StyledSecion1>
        <StyelImg
          src="https://demowpthemes.com/buy2rental/public/front/images/logos/1635921178_hosting_sixth_img.jpg"
          alt="Pic..."
        />
        <StyledOverlay></StyledOverlay>
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

export default Photos;
