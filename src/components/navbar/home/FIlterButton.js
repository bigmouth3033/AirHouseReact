import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../../../contexts/ContextProvider";

import StyledBoxContainer from "../../../ui/StyledBoxContainer";

const StyledFilterButton = styled(StyledBoxContainer)`
  padding: 16px 1rem;
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const StyledResizeFilterButton = styled.div`
  padding: 12px 12px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-left: 10px;
`;

function FilterButton() {

  const {pageWidth} = useStateContext();

  return (
    <>
      {pageWidth >= 800 ? (
        <StyledFilterButton>
          <FontAwesomeIcon icon={faSliders} />
          <p>Filters</p>
        </StyledFilterButton>
      ) : (
        <StyledResizeFilterButton>
          <FontAwesomeIcon icon={faSliders} />
        </StyledResizeFilterButton>
      )}
    </>
  );
}

export default FilterButton;
