import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import StyledButtonContainer from "../../ui/StyledButtonContainer";

const StyledContainer = styled(StyledButtonContainer)`
  width: fit-content;
  padding: 7px 16px;
  display: flex;
  align-items: center;
  gap: 1rem;

  & .user{
    font-size: 1.8rem;
    color: gray;
  }

  & .bar{
    font-size: 1rem;
  }
`;


function NavUser({click, blur}) {
  return (
    <StyledContainer onBlur={blur}  onClick={click}   >
      <FontAwesomeIcon className="bar" icon={faBars} />
      <FontAwesomeIcon className="user" icon={faCircleUser} />
    </StyledContainer>
  );
}

export default NavUser;
