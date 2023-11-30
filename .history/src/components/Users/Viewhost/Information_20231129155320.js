import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  max-width: 654px;
`;
const Styledsection1 = styled.div`
  border-bottom: 1px solid #dddddd;
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
  margin: 0 5px;
`;
const StyledReview = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  div {
    margin-right: 10px;
  }
`;
const Information = () => {
  return (
    <StyledContainer>
      <Styledsection1>
        <h2>Entire home in Ko Samui, Thailand</h2>
        <StyledDetailInfor>
          <StyledSpan>
            <span> 6 guests </span> <span> . </span>
          </StyledSpan>
          <StyledSpan>
            <span> 6 bedrooms</span> <span> . </span>
          </StyledSpan>
          <StyledSpan>
            <span> 7 beds</span> <span> . </span>
          </StyledSpan>
          <StyledSpan>
            <span>5 baths</span>
          </StyledSpan>
        </StyledDetailInfor>
        <div>
          <StyledReview>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p> 4.86</p>
          </StyledReview>
        </div>
      </Styledsection1>
      <Styledsection1>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div></div>
            <p></p>
          </div>
        </div>
      </Styledsection1>
    </StyledContainer>
  );
};

export default Information;
