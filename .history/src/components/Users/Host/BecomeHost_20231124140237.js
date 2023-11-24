import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 650px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  color: #717171;
  @media (max-width: 992px) {
    position: relative;
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
  margin-top: 15px;
  padding: 30px 40px 0 40px;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
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
  line-height: 30px;
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
const StyledSelect = styled.select`
  width: 100%;
  height: 45px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0 35px 0;
  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
  }
`;
const StyledButton = styled.button`
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

const StyledTitle = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;
const StyledSpan = styled.span`
  color: red;
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
const StyledGroupBuuton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BecomeHost = () => {
  return (
    <StyledContainer>
      <StyledSecion1>
        <StyelImg
          src="https://demowpthemes.com/buy2rental/public/front/images/logos/1635921594_list_your_space.jpg"
          alt="Pic..."
        />
        <StyleText>
          <h2>List your space</h2>
          <p>Buy? Rantal Let's your make money renting out your place</p>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledTitle>Rooms and Beds</StyledTitle>
          <StyledLable htmlFor="">Bedrooms</StyledLable>
          <StyledSelect>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
            <option value="option3">6</option>
            <option value="option3">7</option>
          </StyledSelect>
          <StyledLable htmlFor="">Room Type</StyledLable>
          <StyledSelect>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
            <option value="option3">6</option>
            <option value="option3">7</option>
          </StyledSelect>
          <StyledLable htmlFor="">Accommodates</StyledLable>
          <StyledSelect>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
            <option value="option3">6</option>
            <option value="option3">7</option>
          </StyledSelect>
          <StyledLable htmlFor="">
            City <StyledSpan>*</StyledSpan>
          </StyledLable>
          <StyledInput type="text" />
          <StyledGroupBuuton>
            <div></div>
            <StyledButton type="submit">Continute </StyledButton>
          </StyledGroupBuuton>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default BecomeHost;
