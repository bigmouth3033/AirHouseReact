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
const StyledImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
const StyledHost = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  p {
    margin-left: 20px;
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
        <StyledHost>
          <div>
            <StyledImage
              src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
              alt=""
            />
          </div>
          <div>
            <p>Hosted by Marc</p>
            <p>11 years hosting</p>
          </div>
        </StyledHost>
      </Styledsection1>
    </StyledContainer>
  );
};

export default Information;
