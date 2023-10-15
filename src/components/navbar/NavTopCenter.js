import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import StyledButtonContainer from "../../ui/StyledButtonContainer";

const StyledContainer = styled(StyledButtonContainer)`
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  & * {
    padding: 1rem 0;
    background-color: white;
    border: 0;
    cursor: pointer;
    border-radius: 50px;
    font-size: 14px;
  }

  & .separator {
    opacity: 0.3;
  }

  & .bold {
    font-weight: 700;
  }

  & .icon {
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 0.4em;
    font-weight: 900;
  }

  ${(props) => {
    if (props.onEffect == 0) {
      return css`
        display: flex;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
`;

const ResizeNavTop = styled(StyledButtonContainer)`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: left;
  gap: 1rem;
  padding: 0.5rem 1rem;
  font-size: 14px;

  & .icon{
    font-size: 1.3rem;
  }

  & .flex-container{
    display: flex;
    gap: 7px;
    font-size: 13px;
    font-weight: 400;
    opacity: 0.5;
  }


`;

function NavTopCenter({ clickStay, clickEx, effect, resizeWidth }) {
  return (
    <>
      {resizeWidth >= 744 ? (
        <StyledContainer onEffect={effect}>
          <button className="bold" onClick={clickStay}>
            Anywhere
          </button>
          <span className="separator">|</span>
          <button className="bold" onClick={clickEx}>
            Any week
          </button>
          <span className="separator">|</span>
          <button>Add guests</button>
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
        </StyledContainer>
      ) : (
        <ResizeNavTop>
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass}/>
          <div>
            <p>Anywhere</p>
            <div className="flex-container">
              <p>Any week</p>
              <p>-</p>
              <p>Add guests</p>
            </div>
          </div>
        </ResizeNavTop>
      )}
    </>
  );
}

export default NavTopCenter;
