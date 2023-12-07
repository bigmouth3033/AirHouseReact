import { faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import CalendarViewHost from "./CalendarViewHost";
import { PropertyQueryId } from "api/propertyApi";

const StyledContainer = styled.div`
  max-width: 654px;
  margin: auto;
`;
const StyledSection = styled.div`
  border-bottom: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 1.5rem 0;
`;
const StyledDetailInfor = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
const StyledSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
`;
const StyledP = styled.p`
  color: #717171;
  font-size: 14px;
`;
const StyledGroupIcon = styled.div`
  display: flex;
  justify-content: stretch;
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

const StyledTitle = styled.div`
  display: flex;
  gap: 10px;
  font-size: 19px;
  font-weight: 500;
`;
const Information = () => {
  const [selectedDateRange, setSelectedDateRange] = useState();

  const handleDateChange = (item) => {
    setSelectedDateRange([item.selection]);
  };
  //get data
  const id = 98;
  const propertyQuery = PropertyQueryId(id);
  return (
    <StyledContainer>
      {propertyQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <StyledSection>
            <StyledTitle>
              <span>Entire home in Ko Samui, Thailand</span>
              <StyledReview>
                <div>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p> 4.86</p>
              </StyledReview>
            </StyledTitle>
            <StyledDetailInfor>
              <StyledSpan>
                <span>6 guests </span> <span> . </span>
              </StyledSpan>
              <StyledSpan>
                <span>6 bedrooms</span> <span> . </span>
              </StyledSpan>
              <StyledSpan>
                <span>7 beds</span> <span> . </span>
              </StyledSpan>
              <StyledSpan>
                <span>5 baths</span>
              </StyledSpan>
            </StyledDetailInfor>
          </StyledSection>
          <StyledSection>
            {propertyQuery.isSuccess ? (
              <StyledHost>
                <div>
                  <StyledImage
                    src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Hosted by {propertyQuery.data.user.first_name}{" "}
                    <span> </span>
                    {propertyQuery.data.user.last_name}
                  </p>
                  <p> 11 year</p>
                </div>
              </StyledHost>
            ) : null}
          </StyledSection>
          <StyledSection>
            {propertyQuery.isSuccess && (
              <StyledDesign>
                {propertyQuery.data.amenities.map((obamenities, index) => {
                  return (
                    <StyledGroupIcon>
                      <StyledImageIcon
                        // src={obamenities.icon_image}
                        src="https://a0.muscache.com/im/pictures/ea3a10aa-645f-4754-a4a2-9a4920b2c17b.jpg?im_w=720"
                        alt={index}
                      />
                      <div>{obamenities.name}</div>
                    </StyledGroupIcon>
                  );
                })}
              </StyledDesign>
            )}
          </StyledSection>
          <StyledSection>
            <StyledAboutText>{propertyQuery.description}</StyledAboutText>
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
            <CalendarViewHost
              selectedDateRange={selectedDateRange}
              onDateChange={handleDateChange}
            />
          </StyledSection>
        </div>
      )}
    </StyledContainer>
  );
};

export default Information;
