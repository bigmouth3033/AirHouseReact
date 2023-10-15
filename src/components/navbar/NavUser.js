import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

import StyledButtonContainer from "../../ui/StyledButtonContainer";

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
`;

const StyledContainer = styled.div`
  
`;

function NavUser() {

  const [showDropDown, setShowDropDown] = useState(false);

  
  function onClickDropDown() {
    setShowDropDown(true);
  }

  function onBlurDropDown() {
    setShowDropDown(false);
  }

  const userRef = useRef(null);

  return (
    <StyledContainer>
      <StyledUserContainer onClick={onClickDropDown}>
        <FontAwesomeIcon className="bar" icon={faBars} />
        <FontAwesomeIcon className="user" icon={faCircleUser} />
      </StyledUserContainer>
      <UserDropDown showDropDown={showDropDown} blur={onBlurDropDown} className="dropdown"/>
    </StyledContainer>
  );
}

export default NavUser;
