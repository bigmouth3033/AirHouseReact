// ThankYou.js

import React from "react";
import styled from "styled-components";

const ThankYouContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #e51d50; /* Màu chủ đạo */
  color: #fff; /* Màu chữ */
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-top: 20px;
`;

const ThankYou = () => {
  return (
    <ThankYouContainer>
      <Title>Thank You!</Title>
      <Description>
        Your payment was successful. We appreciate your business.
      </Description>
    </ThankYouContainer>
  );
};

export default ThankYou;
