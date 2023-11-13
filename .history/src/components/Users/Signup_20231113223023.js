import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 570px;
  height: 600px;
  margin: 0 auto;
  padding: 25px;
  overflow: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;
const Styledh2 = styled.h2`
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd;
  margin: 0 -25px;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:nth-child(1) {
    font-size: 18px;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  &:nth-child(2) {
    font-size: 18px;
    border-radius: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  &:nth-child(3) {
    font-size: 18px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  &:active {
    border: none;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 7px;
  width: 180px;
  font-size: 18px;
  font-weight: 500;
  background-color: #0962fb;
  border: none;
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
const StyledButtonReset = styled.button`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  font-size: 18px;
  padding: 7px;
  width: 180px;
  font-weight: 500;
  background-color: red;
  border: none;
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
const StyledWith = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  &::after {
    content: "";
    display: inline-block;
    width: 200px;
    border-bottom: 2px solid #dddddd;
    margin: 5px;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 200px;
    border-bottom: 2px solid #dddddd;
    margin: 5px;
  }
`;
const StyledIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0;
  > * {
    font-size: 40px;
  }
`;
const StyledA = styled.a``;
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
        <StyledA href="">
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#0962fb" }} />
        </StyledA>
        <StyledA href="">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#1853b9" }} />
        </StyledA>
        <StyledA href="">
          <FontAwesomeIcon icon={faGoogle} style={{ color: "#e00000" }} />
        </StyledA>
        <StyledA href="">
          <FontAwesomeIcon icon={faEnvelope} />
        </StyledA>
      </StyledIcon>
    </StyledContainer>
  );
};

export default Signup;
