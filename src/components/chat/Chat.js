import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserQuery } from "api/userApi";

const StyledBox = styled.div`
  & .grid-container{
    display: grid;
    grid-template-columns: auto auto auto;
  }
  /* & .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
  } */

  
`;

export default function Chat(props) {
  const userQuery = UserQuery();


  return (
    <StyledBox>
      Messages
        <div className="grid-container">
          <div className="item1">1</div>
          <div className="item2">2</div>
          <div className="item3">3</div>
        </div>
    </StyledBox>
  );
}
