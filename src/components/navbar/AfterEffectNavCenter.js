import styled, { css } from "styled-components";

const Container = styled.button`
  display: flex;
  gap: 1rem;
  border: 0;
  background-color: white;
  width: 22rem;

  & button {
    border: 0;
    background-color: white;
    border-bottom: 2px solid white;
    font-size: 16px;
  }

  transition: width 300ms, opacity 300ms, transform 300ms;

  ${(props) => {
    if (props.onEffect == 0) {
      return css`
        position: absolute;
        visibility: hidden;
        transform: translateY(-200%);
      `;
    } else {
      return css`
        position: static;
        visibility: visible;
        transform: translateY(0);
      `;
    }
  }};
`;

function AfterEffectNavCenter({ clickStay, clickEx, effect }) {
  return (
    <Container onEffect={effect}>
      <button onClick={clickStay}>Stays</button>
      <button onClick={clickEx}>Experiences</button>
      <button>Online Experiences</button>
    </Container>
  );
}

export default AfterEffectNavCenter;
