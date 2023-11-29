import React from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/hj.jpg";
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  min-height: 50rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const StyledSecion1 = styled.section`
  min-height: 11rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const StyledSecion2 = styled.section``;
const StyledForm = styled.form`
  border-radius: 5px;
  padding: 30px 40px 20px 40px;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 30px 40px 0px 40px;
  }
`;
const StyleText = styled.div`
  line-height: 30px;
  color: white;
  z-index: 99;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
    }
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
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 25px;
  background-color: #eeeeee;
  padding: 10px 20px;

  @media (max-width: 992px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;
const StyledBoderInput = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (max-width: 992px) {
    border: 1px solid #eeeeee;
    /* height: 250px; */
  }
`;
const StyledSpan = styled.span`
  color: red;
`;
const StyledText = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 0px 20px;

  @media (max-width: 992px) {
    /* font-size: 16px; */
    margin-bottom: 15px;
  }
`;
const StyledBooking = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 0 20px;
`;
const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #717171;
  /* padding: 0 20px; */
  /* margin: 0 20px; */
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
    height: 35px;
  }
`;
const StyledBoderCancellationPolicyInput = styled.select`
  width: calc(100% - 100px);
  height: 35px;
  border-radius: 5px;
  border: 1px solid #717171;
  margin: 0 50px;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    width: calc(100% - 60px);
    margin: 0 30px;
    height: 35px;
  }
`;
const Booking = () => {
  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledOverlay />
        <StyleText>
          <h2>Add your spaces</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledBoderInput>
            <StyledTitle>Booking</StyledTitle>
            <StyledText>
              Choose how your guests book <StyledSpan>*</StyledSpan>
            </StyledText>
            <StyledText>
              Get ready for guests by choosing your booking style.
            </StyledText>
            <StyledBooking>
              <div>
                <StyledText>Booking Per Day/Hour</StyledText>
                <StyledSelect></StyledSelect>
              </div>
              <div>
                <StyledText>Booking Per Day/Hour</StyledText>
                <StyledSelect></StyledSelect>
              </div>
            </StyledBooking>
          </StyledBoderInput>
          <StyledBoderInput>
            <StyledTitle>Terms</StyledTitle>
            <StyledText>
              The requirements and conditions to book a reservation at your
              listing. <StyledSpan>*</StyledSpan>
              <br /> Cancellation Policy
            </StyledText>
            <StyledBoderCancellationPolicyInput />
            <StyledBooking>
              <div>
                <StyledText>Check in after</StyledText>
                <StyledSelect></StyledSelect>
              </div>
              <div>
                <StyledText>Check out before</StyledText>
                <StyledSelect></StyledSelect>
              </div>
            </StyledBooking>
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

export default Booking;
