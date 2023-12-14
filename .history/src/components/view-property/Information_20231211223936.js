import { faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import CalendarViewHost from "./CalendarViewHost";
import { PropertyQueryId } from "api/propertyApi";
import { useSearchParams } from "react-router-dom";
import Loading from "components/Loading";
// import { search } from "core-js/fn/symbol";

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
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
const StyledAboutText = styled.p`
  color: #717171;
  font-size: 16px;
  line-height: 1.5;
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

const StyledTitle = styled.div`
  display: flex;
  gap: 10px;
  font-size: 19px;
  font-weight: 500;
`;
const StyledAmentinies = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Information = ({
  data,
  value,
  setValue,
  onHandleChange,
  disabledBookDate,
}) => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledTitle>
          <span>{data.name}</span>
          <StyledReview>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p> 4.86</p>
          </StyledReview>
        </StyledTitle>
        <StyledDetailInfor>
          <StyledSpan>
            <span>{data.guest_access} guests </span> <span> . </span>
          </StyledSpan>
          <StyledSpan>
            <span>{data.bedroom_count} bedrooms</span> <span> . </span>
          </StyledSpan>
          <StyledSpan>
            <span>{data.bed_count} beds</span>
            <span> . </span>
          </StyledSpan>
          <StyledSpan>
            <span>{data.bathroom_count} baths</span>
          </StyledSpan>
        </StyledDetailInfor>
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
            <p>
              Hosted by {data.user.first_name} <span> </span>
              {data.user.last_name}
            </p>
            <p> 11 year</p>
          </div>
        </StyledHost>
      </StyledSection>
      <StyledSection>
        <StyledAmentinies>What this place offers</StyledAmentinies>
        <StyledDesign>
          {data.amenities.map((obamenities, index) => {
            return (
              <StyledGroupIcon>
                <StyledImageIcon src={obamenities.icon_image} alt={index} />
                <div>{obamenities.name}</div>
              </StyledGroupIcon>
            );
          })}
        </StyledDesign>
      </StyledSection>
      <StyledSection>
        <StyledTitle>Description</StyledTitle>
        <StyledAboutText>
          <div>
            <a href={data.video}>Video</a>
          </div>
          {data.description}
        </StyledAboutText>
        <StyledShowMore></StyledShowMore>
      </StyledSection>
      <StyledSection>
        <h2>Location's property</h2>
        <StyledP>
          {data.province.name_en}
          <span> </span> {data.district.name_en}
          <span> </span> {data.address}
        </StyledP>
      </StyledSection>
      <StyledSection>
        <h2>Select check-in date</h2>
        <StyledP>Add your travel dates for exact pricing</StyledP>
        <CalendarViewHost
          disabledBookDate={disabledBookDate}
          value={value}
          setValue={setValue}
          onHandleChange={onHandleChange}
          data={data}
        />
      </StyledSection>
    </StyledContainer>
  );
};

export default Information;