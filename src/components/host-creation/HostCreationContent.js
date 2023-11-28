import React from "react";
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Suspense } from "react";
import Loading from "components/Loading";

const StyledOption = styled.div`
  display: flex;
  margin-bottom: 5px;
  overflow-x: scroll;

  /* width */
  &::-webkit-scrollbar {
    height: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledOptionChoice = styled(Link)`
  padding: 15px 25px;
  background-color: rgb(223, 219, 210);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }

  ${(props) => {
    if (props.$active === true) {
      return css`
        background-color: red;
        color: white;
      `;
    }
  }}
`;

export default function HostCreationContent() {
  const [state, dispatch, ACTIONS] = useOutletContext();
  const [active, setActive] = useState([true, false, false, false, false, false, false, false, false]);

  const onSetActive = (index) => {
    const newArr = [false, false, false, false, false, false, false, false, false];
    newArr[index] = true;
    setActive(newArr);
  };

  return (
    <>
      <StyledOption>
        <StyledOptionChoice $active={active[0]} onClick={() => onSetActive(0)} to="basic">
          Basic
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[1]} onClick={() => onSetActive(1)} to="description">
          Description
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[2]} onClick={() => onSetActive(2)} to="details">
          Details
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[3]} onClick={() => onSetActive(3)} to="location">
          Location
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[4]} onClick={() => onSetActive(4)} to="amenities">
          Amenities
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[5]} onClick={() => onSetActive(5)} to="photo">
          Photo
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[6]} onClick={() => onSetActive(6)} to="pricing">
          Pricing
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[7]} onClick={() => onSetActive(7)} to="booking">
          Booking
        </StyledOptionChoice>
        <StyledOptionChoice $active={active[8]} onClick={() => onSetActive(8)} to="calendar">
          Calender
        </StyledOptionChoice>
      </StyledOption>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
