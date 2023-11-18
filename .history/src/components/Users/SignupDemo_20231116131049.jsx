import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { getYear } from "date-fns";
import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import { useRef } from "react";
// npm install react-hook-form date-fns  --force
const StyledError = styled.p`
  color: red;
`;
const StyledContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 25px;
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
const StyledForm = styled.div`
  height: 500px;
  overflow: auto;
  margin-right: -25px;
`;
const StyledFormContainer = styled.div`
  margin: 20px 0;
`;
const StyledInput = styled.input`
  width: 440px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  padding: 0 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    border: none;
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border: none;
    border-radius: 12px;
  }
`;
const StyledSpan = styled.p`
  font-size: 14px;
  width: 400px;
  color: #717171;
  padding: 10px 0 20px 0;
`;
const StyledButtonSubmit = styled.button`
  width: 440px;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 20px 4px; */
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  background-color: #db0c63;
  border-radius: 12px;
  border: none;
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
const StyledWith = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 30px 0;
  &::after {
    content: "";
    display: inline-block;
    width: 50px;
    border-bottom: 2px solid #dddddd;
    margin: 5px;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 50px;
    border-bottom: 2px solid #dddddd;
    margin: 5px;
  }
`;
const StyledIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  > * {
    font-size: 40px;
  }
`;
const StyledA = styled.a``;
const StyledAa = styled.p`
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  -moz-transform: rotateX(210deg);
  -o-transform: rotateX(210deg);
  -webkit-transform: rotateX(210deg);
  transform: rotateX(210deg);
  perspective: 200px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    right top,
    right bottom,
    from(transparent),
    color-stop(20%, transparent),
    to(rgba(0, 0, 0, 0.4))
  );
`;
const SignupDemo = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const birthdayRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      fisrt_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      birthday: birthdayRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    console.log(payload);
  };
  return (
    <StyledContainer>
      <Styledh2>Finish signing up</Styledh2>
      <StyledForm>
        <form onSubmit={onSubmit}>
          <StyledFormContainer>
            <StyledInput
              ref={firstNameRef}
              type="text"
              placeholder="First name"
            />
            {/* <StyledInput type="text" placeholder="Fisrt name" required /> */}
            <StyledInput
              ref={lastNameRef}
              type="text"
              placeholder="Last name"
            />
            <StyledSpan>
              Make sure it matches the name on your goverment ID.
            </StyledSpan>
            <StyledInput
              ref={birthdayRef}
              type="date"
              id="birthday"
              name="birthday"
            />

            <StyledSpan>
              To signup, you need to be at least 18. Your birthday won't be
              share with other people who use AirHouse.
            </StyledSpan>
            <StyledInput ref={emailRef} type="email" placeholder="Email" />
            <StyledSpan>
              We'll email you trip confirmations and receipts.
            </StyledSpan>
            <StyledInput
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <StyledInput
              ref={passwordConfirmationRef}
              type="password"
              placeholder="Password Confirm"
            />
          </StyledFormContainer>
          <StyledButtonSubmit type="submit">Continute</StyledButtonSubmit>
        </form>
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
        <StyledIcon>
          <StyledAa href="">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#0962fb" }} />
          </StyledAa>
          <StyledAa href="">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1853b9" }} />
          </StyledAa>
          <StyledAa href="">
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#e00000" }} />
          </StyledAa>
          <StyledAa href="">
            <FontAwesomeIcon icon={faEnvelope} />
          </StyledAa>
        </StyledIcon>
      </StyledForm>
    </StyledContainer>
  );
};

export default SignupDemo;
