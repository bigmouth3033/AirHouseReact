import React from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/1635921594_list_your_space.jpg";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { CategoryQuery } from "api/categoryApi";
import { RoomTypeQuery } from "api/room-typeApi";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  color: #717171;
  @media (max-width: 992px) {
    position: relative;
  }
`;
const StyledSecion1 = styled.section`
  position: relative;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const StyledSecion2 = styled.section`
  width: 50%;
  background-color: white;
  @media (max-width: 992px) {
    position: absolute;
    width: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
const StyledForm = styled.form`
  border-radius: 5px;
  margin-top: 15px;
  padding: 30px 40px 0 40px;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const StyleText = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  line-height: 30px;
  @media (max-width: 992px) {
    display: none;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }
`;

const StyelImg = styled.img`
  display: block;
  width: 100%;
`;
const StyledLable = styled.label`
  font-size: 16px;
  @media (max-width: 992px) {
    color: black;
  }
`;
const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0 35px 0;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
    height: 40px;
  }
`;
const StyledButton = styled.button`
  padding: 14px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #e51d50;
  border: 1px solid #e51d50;
  background-color: white;
  cursor: pointer;

  &:active,
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

const StyledTitle = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`;
const StyledSpan = styled.span`
  color: red;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0 35px 0;

  &:focus,
  &:hover {
    color: white;
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
    height: 40px;
  }
`;
const StyledGroupBuuton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const StyledImgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

const BecomeHost = () => {
  const [state, dispatch, ACTIONS] = useOutletContext();

  const categoryQuery = CategoryQuery();
  const roomTypeQuery = RoomTypeQuery();

  const onNextPage = (ev) => {
    ev.preventDefault();
  };

  return (
    <StyledContainer>
      <StyledSecion1>
        <StyledImgOverlay />
        <StyleText>
          <h2>List your space</h2>
          <p>AirHouse Let's your make money renting out your place</p>
        </StyleText>
        <StyelImg src={Img} alt="Pic..." />
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledLable htmlFor="">Category</StyledLable>
          <StyledSelect
            onChange={(ev) => {
              dispatch({ type: ACTIONS.CHANGE_CATEGORY, next: ev.target.value });
            }}
          >
            {categoryQuery.isLoading && <option>Loading...</option>}
            {categoryQuery.isSuccess &&
              categoryQuery.data.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
          </StyledSelect>
          <StyledLable htmlFor="">Room Type</StyledLable>
          <StyledSelect>
            {roomTypeQuery.isLoading && <option>Loading...</option>}
            {roomTypeQuery.isSuccess &&
              roomTypeQuery.data.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
          </StyledSelect>
          <StyledLable htmlFor="">Accommodates</StyledLable>
          <StyledSelect>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
            <option value="option3">6</option>
            <option value="option3">7</option>
          </StyledSelect>
          <StyledLable htmlFor="">
            City <StyledSpan>*</StyledSpan>
          </StyledLable>
          <StyledInput type="text" />
          <StyledGroupBuuton>
            <Link to="/user/host-creation/content/basic">Continute </Link>
          </StyledGroupBuuton>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default BecomeHost;
