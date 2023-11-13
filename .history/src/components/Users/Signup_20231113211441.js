import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-brands-svg-icons";
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
  padding: 0 10px;
  &:active {
    border-radius: 8px;
  }
  &:hover {
    border-radius: 8px;
  }
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
        <div>
          <button type="submit">Sign up</button>
          <button type="reset">Reset</button>
        </div>
      </StyledForm>
      <div>Or</div>
      <div>
        <FontAwesomeIcon icon={faTwitter} style={{ color: "#0962fb" }} />
        <FontAwesomeIcon icon={faFacebook} style={{ color: "#1853b9" }} />
        <FontAwesomeIcon icon={faGoogle} style={{ color: "#e00000" }} />
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      </div>
    </StyledContainer>
  );
};

export default Signup;
