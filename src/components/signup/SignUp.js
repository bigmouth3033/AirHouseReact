import styled from "styled-components";

import StyledBoxContainer from "../../ui/StyledBoxContainer";
import CloseButton from "../../ui/CloseButton";

const Container = styled(StyledBoxContainer)`
  background-color: white;
  border: 1px solid white;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 40rem;
`;


const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

`;

function SignUp() {
  return (
    <Container>
      <StyledHeader>
        <CloseButton />
        <p>Log in or sign up</p>
        <div></div>
      </StyledHeader>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}

export default SignUp;
