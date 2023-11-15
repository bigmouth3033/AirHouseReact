import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { differenceInYears, isBefore, parseISO } from "date-fns";
// npm install react-hook-form date-fns  --force

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
const StyledForm = styled.form`
  height: 500px;
  overflow: auto;
  margin-right: -25px;
`;
const StyledFormContainer = styled.div`
  margin: 20px 0;
`;
const StyledInput = styled.input`
  width: 440px;
  height: 45px;
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
  padding: 10px 0 30px 0;
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
const SignupStep2 = () => {
  // Sử dụng useForm để quản lý trạng thái và validation
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Xử lý khi submit (data là đối tượng chứa giá trị của các trường)
    console.log(data);
  };
  const validateDate = (value) => {
    // Kiểm tra định dạng ngày và người dùng có trên 18 tuổi không
    const parsedDate = parseISO(value);
    //     Lấy ngày hiện tại
    const today = new Date();
    // Kiểm tra xem giá trị ngày có hợp lệ không (không phải NaN và không sau ngày hiện tại)
    const isDateValid =
      !isNaN(parsedDate.getTime()) && isBefore(parsedDate, today);
    const isAgeValid = differenceInYears(today, parsedDate) >= 18;
    // Trả về true nếu cả hai điều kiện đều đúng, ngược lại trả về false
    return isDateValid && isAgeValid;
  };
  return (
    <StyledContainer>
      <Styledh2>Finish signing up</Styledh2>
      <StyledForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledFormContainer>
            <StyledInput type="text" placeholder="Fisrt name" required />
            <StyledInput type="text" placeholder="Last name" required />
            <StyledSpan>
              Make sure it matches the name on your goverment ID.
            </StyledSpan>
            {/* <StyledInput type="date" placeholder="Birthday" /> */}
            {/* Birthday */}
            {/* Sử dụng Controller để kết nối input với react-hook-form */}
            <Controller
              name="birthdate"
              control={control}
              render={({ field }) => (
                <div>
                  <StyledInput {...field} type="date" required />
                  {errors && errors.birthdate && (
                    <p>Ngày không hợp lệ hoặc bạn chưa đủ 18 tuổi.</p>
                  )}
                </div>
              )}
              rules={{ validate: validateDate }}
            />

            <StyledSpan>
              To signup, you need to be at least 18. Your birthday won't be
              share with other people who use AirHouse.
            </StyledSpan>
            <StyledInput type="email" placeholder="Email" />
            <StyledSpan>
              We'll email you trip confirmations and receipts.
            </StyledSpan>
            <StyledInput type="password" placeholder="Password" required />
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

export default SignupStep2;
