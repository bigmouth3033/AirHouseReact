import styled from "styled-components";

import StyledBoxContainer from "../../ui/StyledBoxContainer";
import CloseButton from "../../ui/CloseButton";

const Container = styled(StyledBoxContainer)`
  max-width: 15rem;
  background-color: white;
  border: 1px solid white;
  z-index: 5;
  position: absolute;
`;

function SignUp() {
  return (
    <Container>
      <div>
        <CloseButton />
        <p>Log in or sign up</p>
        <div></div>
      </div>
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
