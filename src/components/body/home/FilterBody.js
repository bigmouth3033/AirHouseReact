import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { RoomTypeQuery } from "api/room-typeApi";
import { PropertyTypeQuery } from "api/property-typeApi";
import { AmenitiesQuery } from "api/amenitiesApi";
import PopUpContainer from "ui/PopUpContainer";

const StyledPopUpContainer = styled(PopUpContainer)`
  background-color: white;
  position: fixed;
  top: 3%;
  min-width: 30rem;

  & button {
    cursor: pointer;
  }
`;

const StyledAmenities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  margin-bottom: 30px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 10px;
  }
`;

const StyledItemAmenities = styled.div`
  display: flex;
  align-items: center;
  input {
    font-size: 10px;
  }
`;
const StyledInput = styled.input`
  cursor: pointer;
  zoom: 1.5;
`;

const StyledLable = styled.label`
  font-size: 16px;
  padding-left: 10px;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-size: 22px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
  }
`;

const StyledRoomTypeGroup = styled.div`
  display: flex;
  gap: 10px;

  margin: auto;
`;

const StyledRoomTypeButton = styled.button`
  flex-grow: 1;
  background-color: white;
  padding: 1.4rem 1rem;
  border-radius: 10px;
  font-weight: 600;

  ${(props) => {
    if (props.$activeRoomType) {
      return css`
        background-color: black;
        color: white;
      `;
    }
  }}
`;

const StyledRoomBedGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledBedButton = styled.button`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: 600;

  ${(props) => {
    if (props.$active) {
      return css`
        background-color: black;
        color: white;
      `;
    }
  }}
`;

const StyledBathButton = styled.button`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: 600;

  ${(props) => {
    if (props.$active) {
      return css`
        background-color: black;
        color: white;
      `;
    }
  }}
`;

const StyledProperTypeGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: auto;
`;

const StyledPropertyTypeButton = styled.button`
  flex-grow: 1;
  background-color: white;
  padding: 1.4rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;

  ${(props) => {
    if (props.$active) {
      return css`
        background-color: black;
        color: white;
      `;
    }
  }}
`;

const StyledHeader = styled.div`
  text-align: center;
  font-weight: 600;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  border-radius: 20px 20px 0 0;
`;

const StyledEnd = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  border-radius: 0 0 20px 20px;
`;

const StyledContenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow-y: scroll;
  height: 10rem;
  height: 80vh;
  padding: 2rem;
`;

export default function FilterBody({ setShowPopUp }) {
  const roomTypeQuery = RoomTypeQuery();
  const propertyTypeQuery = PropertyTypeQuery();
  const amenitiesQuery = AmenitiesQuery();
  const arrRoomAndBeds = ["Any", 1, 2, 3, 4, 5, 6, 7, "8+"];

  const [activeRoomType, setActiveRoomType] = useState([true, false, false, false, false]);

  const [roomType, setRoomType] = useState("any");

  const onSetActiveRoomType = (index) => {
    const newArr = [false, false, false, false, false];
    newArr[index] = true;
    setActiveRoomType(newArr);
  };

  const initialActiveRoomAndBed = [true, false, false, false, false, false, false, false, false];

  const [activeBed, setActiveBed] = useState(initialActiveRoomAndBed);
  const [activeBath, setActiveBath] = useState(initialActiveRoomAndBed);

  const onSetActiveBath = (index) => {
    const newArr = [false, false, false, false, false, false, false, false, false];
    newArr[index] = true;
    setActiveBath(newArr);
  };

  const onSetActiveBed = (index) => {
    const newArr = [false, false, false, false, false, false, false, false, false];
    newArr[index] = true;
    setActiveBed(newArr);
  };

  const [activePropertyType, setActivePropertyType] = useState([true, false, false, false, false]);

  const onSetActivePropertyType = (index) => {
    const newArr = [false, false, false, false, false];
    newArr[index] = true;
    setActivePropertyType(newArr);
  };

  return (
    <StyledPopUpContainer setShowPopUp={setShowPopUp}>
      <StyledHeader>Filters</StyledHeader>

      <StyledContenContainer>
        <StyledSection>
          <h3>Type Of Place</h3>
          <p>Search rooms, entire homes, or any type of place.</p>
          <StyledRoomTypeGroup>
            <StyledRoomTypeButton onClick={() => onSetActiveRoomType(0)} $activeRoomType={activeRoomType[0]} value="any">
              Any Type
            </StyledRoomTypeButton>
            {roomTypeQuery.data.map((item, index) => (
              <StyledRoomTypeButton key={index} $activeRoomType={activeRoomType[index + 1]} onClick={() => onSetActiveRoomType(index + 1)}>
                {item.name}
              </StyledRoomTypeButton>
            ))}
          </StyledRoomTypeGroup>
        </StyledSection>
        <StyledSection>
          <h3>Rooms and beds</h3>
          <p>Bedrooms</p>
          <StyledRoomBedGroup>
            {arrRoomAndBeds.map((item, index) => (
              <StyledBedButton $active={activeBed[index]} onClick={() => onSetActiveBed(index)} key={index}>
                {item}
              </StyledBedButton>
            ))}
          </StyledRoomBedGroup>
          <p>Bathrooms</p>
          <StyledRoomBedGroup>
            {arrRoomAndBeds.map((item, index) => (
              <StyledBathButton $active={activeBath[index]} onClick={() => onSetActiveBath(index)} key={index}>
                {item}
              </StyledBathButton>
            ))}
          </StyledRoomBedGroup>
        </StyledSection>
        <StyledSection>
          <h3>Property Type</h3>
          <StyledProperTypeGroup>
            <StyledPropertyTypeButton onClick={() => onSetActivePropertyType(0)} $active={activePropertyType[0]}>
              Any Type
            </StyledPropertyTypeButton>
            {propertyTypeQuery.data.map((item, index) => (
              <StyledPropertyTypeButton
                onClick={() => onSetActivePropertyType(index + 1)}
                key={index}
                $active={activePropertyType[index + 1]}
              >
                {item.name}
              </StyledPropertyTypeButton>
            ))}
          </StyledProperTypeGroup>
        </StyledSection>
        <StyledSection>
          <h3>Amentities</h3>
          <p>Essentials</p>
          <StyledAmenities>
            {amenitiesQuery.data
              .filter((amenity) => amenity.type == "essentials")
              .map((amenity, index) => {
                return (
                  <StyledItemAmenities key={index}>
                    <StyledInput readOnly name="amenities" value={amenity.id} type="checkbox" />
                    <StyledLable htmlFor="">{amenity.name}</StyledLable>
                  </StyledItemAmenities>
                );
              })}
          </StyledAmenities>

          <p>Features</p>
          <StyledAmenities>
            {amenitiesQuery.data
              .filter((amenity) => amenity.type == "features")
              .map((amenity, index) => {
                return (
                  <StyledItemAmenities key={index}>
                    <StyledInput readOnly name="amenities" value={amenity.id} type="checkbox" />
                    <StyledLable htmlFor="">{amenity.name}</StyledLable>
                  </StyledItemAmenities>
                );
              })}
          </StyledAmenities>

          <p>Location</p>
          <StyledAmenities>
            {amenitiesQuery.isSuccess &&
              amenitiesQuery.data
                .filter((amenity) => amenity.type == "location")
                .map((amenity, index) => {
                  return (
                    <StyledItemAmenities key={index}>
                      <StyledInput readOnly name="amenities" value={amenity.id} type="checkbox" />
                      <StyledLable htmlFor="">{amenity.name}</StyledLable>
                    </StyledItemAmenities>
                  );
                })}
          </StyledAmenities>
        </StyledSection>
      </StyledContenContainer>

      <StyledEnd>
        <button>a</button>
        <button>filter</button>
      </StyledEnd>
    </StyledPopUpContainer>
  );
}
