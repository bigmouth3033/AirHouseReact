import React from "react";
import styled, { css } from "styled-components";
import Img from "assets/images/hosting-img/booking.jpg";

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
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (max-width: 992px) {
    border: 1px solid #eeeeee;
    height: 270px;
  }
`;
const StyledSpan = styled.span`
  color: red;
`;
const StyledText = styled.p`
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 992px) {
    /* font-size: 16px; */
    margin-bottom: 15px;
  }
`;
const StyledBooking = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #717171;

  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
    height: 35spx;
  }
`;
const StyledBoderCancellationPolicyInput = styled.select`
  height: 35px;
  border-radius: 5px;
  border: 1px solid #717171;
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

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Booking = () => {
  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledOverlay />
        <StyleText>
          <h2>Book your space</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledBoderInput>
            <StyledTitle>Booking</StyledTitle>
            <StyledContent>
              <StyledText>
                Choose how your guests book <StyledSpan>*</StyledSpan>
              </StyledText>
              <StyledText>Get ready for guests by choosing your booking style.</StyledText>
              <StyledBooking>
                <StyledSelectContainer>
                  <StyledText>Booking Per Day/Hour</StyledText>
                  <StyledSelect>
                    <option>Per day</option>
                    <option>Per hours</option>
                  </StyledSelect>
                </StyledSelectContainer>
                <StyledSelectContainer>
                  <StyledText>Booking Type</StyledText>
                  <StyledSelect>
                    <option>Review each request</option>
                    <option>Guests book instantly</option>
                  </StyledSelect>
                </StyledSelectContainer>
              </StyledBooking>
            </StyledContent>
          </StyledBoderInput>
          <StyledBoderInput>
            <StyledTitle>Terms</StyledTitle>
            <StyledContent>
              <StyledText>
                The requirements and conditions to book a reservation at your listing. <StyledSpan>*</StyledSpan>
              </StyledText>
              <StyledText>Cancellation Policy</StyledText>
              <StyledBoderCancellationPolicyInput>
                <option>Flexible: Full refund 1 day prior to arrival, except fees</option>
                <option>Moderate: Full refund 5 days prior to arrival, except fees</option>
                <option>Strict: 50% refund up until 1 week prior to arrival, except fees</option>
              </StyledBoderCancellationPolicyInput>
              <StyledBooking>
                <StyledSelectContainer>
                  <StyledText>Check in after</StyledText>
                  <StyledSelect>
                    <option>None</option>
                    <option>12:00 AM</option>
                    <option>01:00 AM</option>
                    <option>02:00 AM</option>
                    <option>03:00 AM</option>
                    <option>04:00 AM</option>
                    <option>05:00 AM</option>
                    <option>06:00 AM</option>
                    <option>07:00 AM</option>
                    <option>08:00 AM</option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 AM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                    <option>06:00 PM</option>
                    <option>07:00 PM</option>
                    <option>08:00 PM</option>
                    <option>09:00 PM</option>
                    <option>10:00 PM</option>
                    <option>11:00 PM</option>
                    <option>12:00 PM</option>
                  </StyledSelect>
                </StyledSelectContainer>
                <StyledSelectContainer>
                  <StyledText>Check out before</StyledText>
                  <StyledSelect>
                    <option>None</option>
                    <option>12:00 AM</option>
                    <option>01:00 AM</option>
                    <option>02:00 AM</option>
                    <option>03:00 AM</option>
                    <option>04:00 AM</option>
                    <option>05:00 AM</option>
                    <option>06:00 AM</option>
                    <option>07:00 AM</option>
                    <option>08:00 AM</option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 AM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                    <option>06:00 PM</option>
                    <option>07:00 PM</option>
                    <option>08:00 PM</option>
                    <option>09:00 PM</option>
                    <option>10:00 PM</option>
                    <option>11:00 PM</option>
                    <option>12:00 PM</option>
                  </StyledSelect>
                </StyledSelectContainer>
              </StyledBooking>
            </StyledContent>
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
