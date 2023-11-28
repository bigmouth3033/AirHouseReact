import React from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/amenities.jpg";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const StyledSecion1 = styled.section`
  min-height: 10rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const StyledSecion2 = styled.section``;
const StyledForm = styled.form`
  border-radius: 5px;
  padding: 30px 40px 20px 40px;
  overflow: auto;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 30px 40px 0px 40px;
  }
`;
const StyleText = styled.div`
  line-height: 30px;
  color: white;
  z-index: 99;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
    }
  }
`;

const StyledLable = styled.label`
  font-size: 16px;
  padding-left: 10px;
`;

const StyledTitle = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
  @media (max-width: 992px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;
const StyledAmenities = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

const StyledImgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const StyledGroupButon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  background-color: red;
  text-decoration: none;
  padding: 1rem;
  border-radius: 5px;
  color: white;
  transition: all 0.1s;
  &:hover {
    background-color: rgb(200, 0, 0);
  }
`;

const Amenities = () => {
  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledImgOverlay />
        <StyleText>
          <h2>Add your amenities</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledTitle>Common Amenities</StyledTitle>
          <StyledAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Essentials</StyledLable>
            </StyledItemAmenities>
          </StyledAmenities>

          <StyledTitle>Safety Amenities</StyledTitle>
          <StyledAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
            <StyledItemAmenities>
              <StyledInput type="checkbox" />
              <StyledLable htmlFor="">Smoke Detector</StyledLable>
            </StyledItemAmenities>
          </StyledAmenities>

          <StyledGroupButon>
            <StyledLink to="/user/host-creation/content/location">Back </StyledLink>
            <StyledLink to="/user/host-creation/content/photo">Next </StyledLink>
          </StyledGroupButon>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default Amenities;
