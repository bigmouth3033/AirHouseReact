import styled from "styled-components";
import StyledBoxContainer from "../../../ui/StyledBoxContainer";
import Signup from "../../user/Signup";
import Overlay from "../../../ui/Overlay";
import { useState, useEffect, useRef } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import Login from "../../user/Login";
import { LogoutUserMutation } from "api/userApi";
import { Link } from "react-router-dom";

const StyledDropDownContainer = styled(StyledBoxContainer)`
  width: 15rem;
  padding: 10px 0;
  position: absolute;
  transform: translate(-105%, 15%);
  background-color: white;
  display: flex;
  flex-direction: column;

  & button {
    padding: 0.7rem 1rem;
    background-color: white;
    border: none;
    cursor: pointer;
  }

  & .first {
    border-top-left-radius: 50;
    border-top-right-radius: 50;
  }

  & button:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;

const StyledOverlay = styled(Overlay)`
  z-index: 2;
`;

const StyledContainer = styled.div``;

function UserDropDown({ blur, showDropDown }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function onShowSignUpHandler() {
    setShowSignUp(true);
    blur();
  }

  function onShowLoginHandler() {
    setShowLogin(true);
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

      if (showSignUp === true || showLogin === true) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, showSignUp, showLogin]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const logoutMutation = LogoutUserMutation();


  const onLogoutHandler = () => {
    logoutMutation.mutate();
    blur();
  };

  return (
    <StyledContainer>
      {showDropDown && (
        <StyledDropDownContainer ref={wrapperRef}>
          <button onClick={onShowSignUpHandler}>Signup</button>
          <button onClick={onShowLoginHandler}>Log in</button>
          <button onClick={onLogoutHandler}>Log out</button>
          <Link to="/inbox">Inbox</Link>
          <button>Airbnb your home</button>
          <button onClick={() => alert("ngo dinh tan")}>Help Center</button>
        </StyledDropDownContainer>
      )}
      {showSignUp ? (
        <div>
          <StyledOverlay onClick={() => setShowSignUp(false)} />
          <Signup setShowSignUp={setShowSignUp} />
        </div>
      ) : (
        <></>
      )}

      {showLogin ? (
        <div>
          <StyledOverlay onClick={() => setShowLogin(false)} />
          <Login setShowLogin={setShowLogin} />
        </div>
      ) : (
        <></>
      )}
    </StyledContainer>
  );
}

export default UserDropDown;
