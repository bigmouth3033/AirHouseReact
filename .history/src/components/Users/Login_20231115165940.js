import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const StyledContainer = styled.div`
  max-width: 530px;
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
const StyledForm = styled.form`
  height: 520px;
  overflow: auto;
  margin-right: -25px;
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
  width: 460px;
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
    border: none;
  }
  &:nth-child(2) {
    font-size: 18px;
    border-radius: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
  }
  &:nth-child(3) {
    font-size: 18px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
  }
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
const StyledSubmitReset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  &:nth-child(1) {
    border-radius: 8px 0 0 8px;
  }
  &:nth-child(2) {
    border-radius: 0 8px 8px 0;
  }
`;
const StyledButtonSubmit = styled.button`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 20px 4px;
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
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 20px 4px;
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
  margin-bottom: 50px;
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
const StyledCreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 22px;
`;
const StyledSpan = styled.span`
  color: #717171;
  padding: 5px;
  text-decoration: none;
`;
const StyledCreate = styled.a`
  text-decoration: none;
`;
const Login = () => {
  return (
    <StyledContainer>
      <Styledh2>Log in</Styledh2>
      <StyledForm>
        <form>
          <StyledH2>Welcome to AirHouse</StyledH2>
          <StyledFormContainer>
            <StyledInput type="email" name="email" placeholder="Email" />

            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
            />
          </StyledFormContainer>
          <StyledSubmitReset>
            <StyledButtonSubmit type="submit">Sign up</StyledButtonSubmit>
            <StyledButtonReset type="reset">Reset</StyledButtonReset>
          </StyledSubmitReset>
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

        <StyledCreateAccount>
          <StyledSpan>Not Registered?</StyledSpan>
          <StyledSpan>
            <StyledCreate href=""> Create an account</StyledCreate>
          </StyledSpan>
        </StyledCreateAccount>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;
// Lỗi "popup_closed_by_user" xuất hiện khi cửa sổ popup mà bạn mở để đăng nhập với Google đã bị đóng bởi người dùng trước khi quá trình xác thực hoàn tất. Đây là một phản hồi thông thường khi người dùng đóng cửa sổ đăng nhập trước khi xác thực được hoàn thành.

// Để xử lý trường hợp này, bạn có thể thêm xử lý trong hàm onFailure của react-google-login.
