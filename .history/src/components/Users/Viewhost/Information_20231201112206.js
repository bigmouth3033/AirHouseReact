import { faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import CalendarViewHost from "./CalendarViewHost";
const StyledContainer = styled.div`
  max-width: 654px;
`;
const StyledSection = styled.div`
  border-bottom: 1px solid #dddddd;
  margin-bottom: 20px;
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
  width: 40px;
  height: 40px;
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
const StyledDesign = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;
const StyledP = styled.p`
  color: #717171;
  font-size: 14px;
`;
const StyledGroupIcon = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
const StyledImageIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
const StyledAboutText = styled.p`
  color: #717171;
  font-size: 16px;
`;
const StyledShowMore = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  color: black;
  a {
    color: black;
  }
`;
const StyledAmenities = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
`;
const StyledGroupAmenities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const StyledShowAmenities = styled.div`
  display: inline-block;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 7px 22px;
  font-size: 18px;
  margin: 15px 0;
  &:hover {
    background-color: #eeeeee;
  }
`;
const Information = () => {
  return (
    <StyledContainer>
      <StyledSection>
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
      </StyledSection>
      <StyledSection>
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
      </StyledSection>
      <StyledSection>
        <StyledDesign>
          <StyledGroupIcon>
            <div>
              <StyledImageIcon
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <div>
              <div>Designed by</div>
              <StyledP>Marc Gerritsen</StyledP>
            </div>
          </StyledGroupIcon>
          <StyledGroupIcon>
            <div>
              <StyledImageIcon
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <div>
              <div>Featured in</div>
              <StyledP>ArchDaily, April 2015 Dwell, January 2014</StyledP>
            </div>
          </StyledGroupIcon>
          <StyledGroupIcon>
            <div>
              <StyledImageIcon
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <div>
              <div>Self check-in</div>
              <StyledP>Check yourself in with the smartlock.</StyledP>
            </div>
          </StyledGroupIcon>
        </StyledDesign>
      </StyledSection>
      <StyledSection>
        <StyledAboutText>
          Quarantining, social distancing and remote working is what this house
          is perfect for. Please ask us about special covid rates. It is an
          architectural villa on the south side of Koh Samui, private and in a
          natural environment, it has sweeping ocean views and has a great salt
          water lap pool. Half way up a hill, it gets natural breezes, whithout
          mozzies even at dusk. It is minimally designed, but takes maximum
          advantage of the nature. It is called the naked house because the
          walls are left naked.....
        </StyledAboutText>
        <StyledShowMore>
          <a href="">Show more</a>
          <p>
            <FontAwesomeIcon icon={faAngleRight} />
          </p>
        </StyledShowMore>
      </StyledSection>
      <StyledSection>
        <h2>What this place offers</h2>
        <StyledGroupAmenities>
          <StyledGroupIcon>
            <div>
              <StyledAmenities
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <StyledP>Kitchen</StyledP>
          </StyledGroupIcon>
          <StyledGroupIcon>
            <div>
              <StyledAmenities
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <StyledP>Kitchen</StyledP>
          </StyledGroupIcon>
          <StyledGroupIcon>
            <div>
              <StyledAmenities
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <StyledP>Kitchen</StyledP>
          </StyledGroupIcon>
          <StyledGroupIcon>
            <div>
              <StyledAmenities
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <StyledP>Kitchen</StyledP>
          </StyledGroupIcon>
          <StyledGroupIcon>
            <div>
              <StyledAmenities
                src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                alt=""
              />
            </div>
            <StyledP>Kitchen</StyledP>
          </StyledGroupIcon>
        </StyledGroupAmenities>
        <StyledShowAmenities>Show all 43 amnities</StyledShowAmenities>
      </StyledSection>
      <StyledSection>
        <h2>Select check-in date</h2>
        <StyledP>Add your travel dates for exact pricing</StyledP>
        <CalendarViewHost />
      </StyledSection>
    </StyledContainer>
  );
};

export default Information;
