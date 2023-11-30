import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  max-width: 654px;
`;
const StyledDetailInfor = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
const StyledSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Information = () => {
  return (
    <StyledContainer>
      <div>
        <h2>Entire home in Ko Samui, Thailand</h2>
        <StyledDetailInfor>
          <StyledSpan>
            <span> 6 guests </span> <span> . </span>
          </StyledSpan>
          <StyledSpan>
            6 bedrooms <span> . </span>
          </StyledSpan>
          <StyledSpan>
            7 beds <span> . </span>
          </StyledSpan>
          <StyledSpan>
            5 baths <span> . </span>
          </StyledSpan>
        </StyledDetailInfor>
        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p> 4.86</p>
          </div>
          <div></div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Information;
