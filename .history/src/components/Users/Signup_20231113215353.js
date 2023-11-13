import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 570px;
  height: 660px;
  margin: 0 auto;
  border: 1px solid #717171;
  padding: 25px;
  overflow: auto;
  border-radius: 12px;
`;
const Styledh2 = styled.h2`
  text-align: center;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd;
  margin: 0 -25px;
`;
const StyledHr = styled.hr`
  margin: 0 -25px;
  border: 1px solid #717171;
`;
const StyledForm = styled.form`
  overflow: auto;
`;
const StyledH2 = styled.h2`
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
  padding: 25px;
`;
const StyledFormContainer = styled.div`
  margin-bottom: 20px;
`;
const StyledInput = styled.input`
  width: 510px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  padding: 0 10px;
  &:nth-child(1) {
    font-size: 18px;
    border-radius: 8px 8px 0 0;
  }
  &:nth-child(2) {
    font-size: 18px;
    border-radius: 0;
  }
  &:nth-child(3) {
    font-size: 18px;
    border-radius: 0 0 8px 8px;
  }
  &:active {
    border-radius: 12px;
  }
  &:hover {
    border-radius: 12px;
  }
`;
const StyledSubmitReset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
const StyledButtonSubmit = styled.button`
  padding: 7px;
  width: 180px;
  font-size: 18px;
  font-weight: 500;
  background-color: #0962fb;
  border: none;
`;
const StyledButtonReset = styled.button`
  font-size: 18px;
  padding: 7px;
  width: 180px;
  font-weight: 500;
  background-color: red;
  border: none;
`;
const StyledWith = styled.div`
  text-align: center;
  font-size: 18px;
`;
const StyledIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0;
  > * {
    font-size: 35px;
  }
`;
const Signup = () => {
  return (
    <StyledContainer>
      <Styledh2>Log in or sign up</Styledh2>
      <StyledForm>
        <StyledH2>Welcome to AirHouse</StyledH2>
        <StyledFormContainer>
          <StyledInput type="email" name="email" placeholder="Email" />

          <StyledInput type="password" name="password" placeholder="Password" />

          <StyledInput
            type="password"
            name="PasswordConfirm"
            placeholder="Password confirm"
          />
        </StyledFormContainer>
        <StyledSubmitReset>
          <StyledButtonSubmit type="submit">Sign up</StyledButtonSubmit>
          <StyledButtonReset type="reset">Reset</StyledButtonReset>
        </StyledSubmitReset>
      </StyledForm>
      <StyledWith>Login with</StyledWith>
      <StyledIcon>
        <FontAwesomeIcon icon={faTwitter} style={{ color: "#0962fb" }} />
        <FontAwesomeIcon icon={faFacebook} style={{ color: "#1853b9" }} />
        <FontAwesomeIcon icon={faGoogle} style={{ color: "#e00000" }} />
        <FontAwesomeIcon icon={faEnvelope} />
      </StyledIcon>
    </StyledContainer>
  );
};

export default Signup;
