import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const StyledSecion1 = styled.section`
  position: relative;
  width: 50%;
`;
const StyledForm = styled.form`
  margin-top: 15px;
  padding: 30px 40px 0 40px;
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
  object-fit: contain;
`;
const StyledLable = styled.label`
  font-size: 18px;
`;
const StyledSpan = styled.span`
  color: red;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0 35px 0;
`;
const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0 35px 0;
`;
const StyledButton = styled.button`
  padding: 15px 35px;
  font-size: 18px;
  font-weight: 600;
  color: #e51d50;
  border: 1px solid #e51d50;
  background-color: white;

  &:hover {
    color: white;
    border: none;
    background-color: #e51d50;
  }
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
      <StyledSecion1>
        <StyledForm>
          <StyledLable htmlFor="">Home type</StyledLable>
          <StyledSelect>
            <option value="option1">Choose option </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </StyledSelect>
          <StyledLable htmlFor="">Room type</StyledLable>
          <StyledSelect>
            <option value="option1">Choose option </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </StyledSelect>
          <StyledLable htmlFor="">Accommodates</StyledLable>
          <StyledSelect>
            <option value="option1">Choose option </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </StyledSelect>
          <StyledLable htmlFor="">
            City <StyledSpan>*</StyledSpan>
          </StyledLable>
          <StyledSelect>
            <option value="option1">Choose option </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </StyledSelect>
          <StyledLable htmlFor="">Select Option</StyledLable>
          <StyledSelect>
            <option value="option1">Choose option </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </StyledSelect>
          <StyledButton type="submit">Continute</StyledButton>
        </StyledForm>
      </StyledSecion1>
    </StyledContainer>
  );
};

export default BecomeHost;
