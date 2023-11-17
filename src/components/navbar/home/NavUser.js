import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import Avatar from "react-avatar";
import { useStateContext } from "../../../contexts/ContextProvider";
import "./avatar.css";

import StyledButtonContainer from "../../../ui/StyledButtonContainer";

import UserDropDown from "./UserDropDown";

const StyledUserContainer = styled(StyledButtonContainer)`
  width: fit-content;
  padding: 7px 16px;
  display: flex;
  align-items: center;
  gap: 1rem;

  & .user {
    font-size: 1.8rem;
    color: gray;
  }

  & .bar {
    font-size: 1rem;
  }

  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`;

const StyledTextLink = styled(StyledButtonContainer)`
  padding: 0.8rem 10px;
  box-shadow: none;
  font-weight: 600;

  &:hover {
    box-shadow: none;
    background-color: rgb(247, 247, 247);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function NavUser() {
  const { user, token } = useStateContext();

  const [showDropDown, setShowDropDown] = useState(false);

  function onClickDropDown() {
    setShowDropDown(!showDropDown);
  }

  function onBlurDropDown() {
    setShowDropDown(false);
  }

  return (
    <StyledContainer>
      <StyledTextLink>Airbnb your home</StyledTextLink>
      <StyledUserContainer className="navbar-dropdown" onClick={onClickDropDown}>
        <FontAwesomeIcon className="bar" icon={faBars} />
        {token && user.first_name ? (
          <Avatar size="30px" textSizeRatio={2} round={true} name={user.first_name} />
        ) : (
          <FontAwesomeIcon className="user" icon={faCircleUser} />
        )}
      </StyledUserContainer>
      <UserDropDown showDropDown={showDropDown} blur={onBlurDropDown} className="dropdown" />
    </StyledContainer>
  );
}

export default NavUser;
