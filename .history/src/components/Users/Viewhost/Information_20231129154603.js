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
const StyledSpan = styled.span`
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
          <div>
            6 guests <StyledSpan> . </StyledSpan>
          </div>
          <div>
            6 bedrooms <StyledSpan> . </StyledSpan>
          </div>
          <div>
            7 beds <StyledSpan> . </StyledSpan>
          </div>
          <div>
            5 baths <StyledSpan> . </StyledSpan>
          </div>
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
