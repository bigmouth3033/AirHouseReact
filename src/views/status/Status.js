import React from "react";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import StatusAll from "./StatusAll";
import StatusWaiting from "./StatusWaiting";
import StatusError from "./StatusError";
import StatusSucess from "./StatusSucess";

const StyledContainer = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 7px;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 80vh;
`;

const StyledContent = styled.div``;

const StyledHeader = styled.div`
  display: flex;
  gap: 1rem;
  transition: all 1s;
  border-bottom: 2px solid #e3e9ed;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-bottom: 2px solid white;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;

  ${(props) => {
    if (props.$active == true) {
      return css`
        border-bottom: 2px solid blue;
      `;
    }
  }}
`;

const StyledContentBody = styled.div``;

export default function Status() {
  const [active, setActive] = useState([true, false, false, false]);
  const [body, setBody] = useState([<StatusAll />]);

  const onSetActive = (index) => {
    const newActive = Array(4).fill(false);
    newActive[index] = true;

    if (JSON.stringify(active) == JSON.stringify(newActive)) {
      return;
    }

    setActive(newActive);

    if (index == 0) {
      setBody(<StatusAll />);
      return;
    }

    if (index == 1) {
      setBody(<StatusWaiting />);
      return;
    }

    if (index == 2) {
      setBody(<StatusError />);
      return;
    }

    if (index == 3) {
      setBody(<StatusSucess />);
      return;
    }
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledHeader>
          <StyledButton onClick={() => onSetActive(0)} $active={active[0]}>
            All Properties
          </StyledButton>
          <StyledButton onClick={() => onSetActive(1)} $active={active[1]}>
            In Waiting
          </StyledButton>
          <StyledButton onClick={() => onSetActive(2)} $active={active[2]}>
            Error
          </StyledButton>
          <StyledButton onClick={() => onSetActive(3)} $active={active[3]}>
            Sucess
          </StyledButton>
        </StyledHeader>
        <StyledContentBody>{body}</StyledContentBody>
      </StyledContent>
    </StyledContainer>
  );
}
