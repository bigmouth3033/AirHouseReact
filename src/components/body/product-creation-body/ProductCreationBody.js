import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";


import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";


import ProgressBarProduct from "./ProgressBarProduct";

const StyledFirstContainer = styled(motion.div)`
  height: 100px;
  background-color: blue;
`;

const StyledSecondContainer = styled(motion.div)`
  height: 100px;
  background-color: red;
`;

const StyledThirdContainer = styled(motion.div)`
  height: 100px;
  background-color: black;
`;

const StyledFourthContainer = styled(motion.div)`
  height: 100px;
  background-color: brown;
`;

const StyledFifthContainer = styled(motion.div)`
  height: 100px;
  background-color: steelblue;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const exit = { opacity: 0, transition: { duration: 2 } };
const initial = { opacity: 0 };
const animate = { opacity: 1, transition: { duration: 2 } };
const transition = {
  ease: "easeInOut",
};

const arr = [
  <StyledFirstContainer exit={exit} initial={initial} animate={animate} transition={transition} />,
  <StyledSecondContainer exit={exit} initial={initial} animate={animate} transition={transition} />,
  <StyledThirdContainer exit={exit} initial={initial} animate={animate} transition={transition} />,
  <StyledFourthContainer exit={exit} initial={initial} animate={animate} transition={transition} />,
  <StyledFifthContainer exit={exit} initial={initial} animate={animate} transition={transition} />,
];


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
`;



export default function ProductCreationBody() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide < arr.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const previous = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <StyledContainer>
      {/* {arr[currentSlide]} */}
      <ThirdPage/>
      <ProgressBarProduct progress={(currentSlide * 25)} />

      <StyledButtonGroup>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </StyledButtonGroup>
    </StyledContainer>
  );
}
