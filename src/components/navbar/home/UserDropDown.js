import styled from "styled-components";
import StyledBoxContainer from "../../../ui/StyledBoxContainer";
import Signup from "../../user/Signup";
import Overlay from "../../../ui/Overlay";
import { useState, useEffect, useRef } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

const StyledDropDownContainer = styled(StyledBoxContainer)`
  width: 15rem;
  padding: 10px 0;
  position: absolute;
  transform: translate(-105%, 15%);
  background-color: white;

  & p {
    padding: 0.7rem 1rem;
  }

  & .first {
    border-top-left-radius: 50;
    border-top-right-radius: 50;
  }

  & p:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;

const StyledSignUpOverlay = styled(Overlay)`
  z-index: 2;
`;

const StyledContainer = styled.div``;

function UserDropDown({ blur, showDropDown }) {
  const { user } = useStateContext();

  const [showSignUp, setShowSignUp] = useState(false);

  function onShowSignUpHandler() {
    setShowSignUp(true);
    blur();
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        const dropDownButton = document.querySelector(".navbar-dropdown");
        if (ref.current && !ref.current.contains(event.target) && !dropDownButton.contains(event.target)) {
          blur();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      if (showSignUp === true) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, showSignUp]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <StyledContainer>
      {showDropDown && (
        <StyledDropDownContainer ref={wrapperRef}>
          <p>{user.email}</p>
          <p onClick={onShowSignUpHandler}>Signup</p>
          <p>Log in</p>
          <hr />
          <p>Airbnb your home</p>
          <p onClick={() => alert("ngo dinh tan")}>Help Center</p>
        </StyledDropDownContainer>
      )}
      {showSignUp ? (
        <>
          <StyledSignUpOverlay onClick={() => setShowSignUp(false)} />
          <Signup />
        </>
      ) : (
        <></>
      )}
    </StyledContainer>
  );
}

export default UserDropDown;
