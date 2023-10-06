import styled from "styled-components";

const StyledButtonContainer = styled.button`
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 0;
  background-color: white;
  display: inline-block;
  cursor: pointer;
  padding: 0;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export default StyledButtonContainer;
