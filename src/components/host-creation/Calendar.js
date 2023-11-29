import React, { createRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/calender.jpg";
import { Link } from "react-router-dom";
import { Calendar as CalendarLb } from "react-calendar";
import "./calendar.css";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSecion1 = styled.section`
  min-height: 10rem;
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

const StyledSecion2 = styled.section`
  /* width: 60%; */
`;

const StyledForm = styled.form`
  border-radius: 5px;
  margin-top: 15px;
  padding: 30px 40px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
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
    font-size: 20px;
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

const StyledGroupButon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
  background-color: red;
  text-decoration: none;
  padding: 1rem;
  border-radius: 5px;
  color: white;
  transition: all 0.1s;
  &:hover {
    background-color: rgb(200, 0, 0);
  }
`;

const StyledImgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const StyledCalendar = styled(CalendarLb)`
  background-color: white;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label{
    font-size: 14px;
  }
`;

const StyledInput = styled.input`
  height: 40px;
  border: 1px solid #717171;
  padding: 0 20px;
  border-radius: 5px;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #717171;
  padding: 0 20px;
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

const Calendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledImgOverlay />
        <StyleText>
          <h2>Add your location</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledCalendar
            allowPartialRange={true}
            selectRange={true}
            returnValue={"range"}
            view={"month"}
            minDate={new Date()}
            maxDetail={"month"}
            onChange={setValue}
          />
          <StyledBox>
            <label>Minimum Stay</label>
            <StyledInput type="number" min={1} />
          </StyledBox>

          <StyledBox>
            <label>Maximum Stay</label>
            <StyledInput type="number" />
          </StyledBox>

          <StyledBox>
            <label>Status</label>
            <StyledSelect>
              <option>Available</option>
              <option>Not Available</option>
            </StyledSelect>
          </StyledBox>
          <StyledGroupButon>
            <StyledLink to="/user/host-creation/content/details">Back </StyledLink>
            <StyledLink to="/user/host-creation/content/amenities">Next </StyledLink>
          </StyledGroupButon>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default Calendar;
