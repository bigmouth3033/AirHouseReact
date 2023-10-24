import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  border: 0;
  background-color: white;
  width: 22rem;
  

  & button {
    flex-grow: 1;
    border: 0;
    background-color: white;
    border-bottom: 2px solid white;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
    font-size: 15px;
  }

  position: absolute;
  left: 50%;

  @media only screen and (max-width: 1000px) {
    & {
      position: static;
      transform: translateX(0);
    }
  }

  ${(props) => {
    if (props.$fontWeight === true) {
      return css`
        & .stay {
          font-weight: 700;
        }

        & . ex {
          font-weight: 300;
        }
      `;
    } else {
      return css`
        & .stay {
          font-weight: 300;
        }

        & .ex {
          font-weight: 600;
        }
      `;
    }
  }}
`;

const exit = { y: "-5%", x: "-50%", scale: 0.5 };
const initial = { y: "-300%", x: "-50%", scale: 0.5 };
const animate = { y: "0%", x: "-50%", scale: 1 };
const transition = {
  ease: "easeInOut",
  duration: 0.2,
};

export default function AfterEffectNavCenterHome({ clickStay, clickEx, isStay }) {
  return (
    <Container exit={exit} initial={initial} animate={animate} transition={transition} $fontWeight={isStay}>
      <button className="stay" onClick={clickStay}>
        Stays
      </button>
      <button className="ex" onClick={clickEx}>
        Experiences
      </button>
      <button>Online Experiences</button>
    </Container>
  );
}
