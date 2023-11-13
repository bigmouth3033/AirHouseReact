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
const Signup = () => {
  return (
    <StyledContainer>
      <Styledh2>Log in or sign up</Styledh2>
      <StyledForm>
        <StyledH2>Welcome to AirHouse</StyledH2>
        <div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label>Password Confirm</label>
            <input type="password" name="passwordConfirm" />
          </div>
        </div>
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
