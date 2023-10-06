import styled from "styled-components";
import StyledBoxContainer from "../../ui/StyledBoxContainer";

const StyledContainer = styled(StyledBoxContainer)`
  width: 15rem;
  padding: 10px 0;
  position: absolute;
  transform: translateY(-5%);
  background-color: white;
  z-index: 999999 ;


  & p{
    padding: 0.7rem 1rem;
  }

  & .first{
    border-top-left-radius: 50;
    border-top-right-radius: 50;
  }

  & p:hover{
    background-color: rgba(128, 128, 128, 0.1);
  }
`;


function UserDropDown(){
  return (
    <StyledContainer>
      <p >Signup</p>
      <p>Log in</p>
      <hr/>
      <p>Airbnb your home</p>
      <p >Help Center</p>
    </StyledContainer>
  );
  
}

export default UserDropDown;