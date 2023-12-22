import React, { useState } from "react";
import Knot from "../content/Knot";
import styled from "styled-components";

const StyledBox = styled.div`
  & .title-list-container {
    border: solid thin rgba(0, 0, 0, 0.2);
  }
  & .title-list-container li {
    border: solid thin rgba(0, 0, 0, 0.2);
    font-size: 1em;
    cursor: pointer;
    transition: all 0.05s;
  }
  & .title-list-container li:hover {
    background-color: rgba(118, 118, 118, 0.5);
  }
`;
export default function SideBar({ setUserTitle }) {
  const [titleArray, setTitleArray] = useState(["all", "accepted", "denied", "success","expired"]);

  const handleTitle = (item) => {
    setUserTitle(item);
  };

  return (
    <StyledBox>
      <ul className="title-list-container">
        {titleArray.map((item, index) => {
          return (
            <li key={index} onClick={(e) => handleTitle(item)}>
              <Knot title={item} />
            </li>
          );
        })}
      </ul>
    </StyledBox>
  );
}
