import styled, {css} from "styled-components";

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
  

  & *{
    padding: 1rem 0 ; 
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

  ${ (props) => {
    if(props.onEffect == 0){
      return css`
        display: flex;
      `;
    }else{
      return css`
        display: none;
      `
    }
  }


  }
`;

function NavTopCenter({clickStay, clickEx, effect}) {
  return (
    <StyledContainer onEffect={effect}>
      <button className="bold" onClick={clickStay}>Anywhere</button>
      <span className="separator" >|</span>
      <button className="bold" onClick={clickEx}>Any week</button>
      <span className="separator">|</span>
      <button>Add guests</button>
      <FontAwesomeIcon className="icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
    </StyledContainer>
  );
}

export default NavTopCenter;
