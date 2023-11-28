import React from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/1635921594_list_your_space.jpg";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { CategoryQuery } from "api/categoryApi";
import { RoomTypeQuery } from "api/room-typeApi";

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
const StyledSecion2 = styled.section``;

const StyledForm = styled.form`
  border-radius: 5px;
  margin-top: 15px;
  padding: 30px 40px 0 40px;
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

const StyledImgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

const StyledGroupButon = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
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

const BecomeHost = () => {
  const [state, dispatch, ACTIONS] = useOutletContext();

  const categoryQuery = CategoryQuery();
  const roomTypeQuery = RoomTypeQuery();

  const onNextPage = (ev) => {
    ev.preventDefault();
  };

  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledImgOverlay />
        <StyleText>
          <h2>List your space</h2>
          <p>AirHouse Let's your make money renting out your place</p>
        </StyleText>
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
          <StyledGroupButon>
            <StyledLink to="/user/host-creation/content/basic">Continute </StyledLink>
          </StyledGroupButon>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default BecomeHost;
