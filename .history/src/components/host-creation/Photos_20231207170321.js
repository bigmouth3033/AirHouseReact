import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Img from "assets/images/hosting-img/photos.jpg";
import { useOutletContext } from "react-router-dom";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  min-height: 55rem;

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

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledLable = styled.label`
  font-size: 18px;
  padding-left: 10px;
`;

const StyledTitle = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 25px;
  background-color: #eeeeee;
  padding: 10px 20px;

  @media (max-width: 992px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const StyledInput = styled.input`
  width: calc(100% - 60px);
  height: 45px;
  border: 1px solid #717171;
  padding: 0 10px;
  margin: 10px 30px 35px 30px;
  @media (max-width: 992px) {
    width: calc(100% - 70px);
    margin: 8px 0 20px 0;
  }
`;
const StyledButtonInput = styled.div`
  border: 1px solid #717171;
  padding: 10px 10px;
  width: calc(100% - 100px);
  margin: 50px 50px 35px 50px;

  input {
    width: 100%;
    font-size: 15px;
  }

  @media (max-width: 992px) {
    width: calc(100% - 60px);
    margin: 35px 20px;
    input {
      font-size: 14px;
    }
  }
`;

const StyledBoderInput = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin-bottom: 40px;
  @media (max-width: 992px) {
    border: 1px solid #eeeeee;
    height: 150px;
  }
`;

const StyledGroupButon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.button`
  border: none;
  cursor: pointer;
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

const Photos = () => {
  const [state, dispatch, ACTIONS, onSetActive, onSetAvailable] = useOutletContext();

  const onClickPrevious = (ev) => {
    ev.preventDefault();

    onSetActive(4);
  };

  const onClickNext = (ev) => {
    ev.preventDefault();

    onSetActive(6);
    onSetAvailable(6);
  };

const onChangeFile = event => {
const image = event.target.files[0];
if (!image) {
 console.log('image is required');
 return false;
 }
 if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
   console.log('select valid image.');
  return false;
 }

  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledOverlay />
        <StyleText>
          <h2>Add your photos & videos</h2>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledBoderInput>
            <StyledTitle>Image</StyledTitle>
            <StyledButtonInput>
              <input
                onChange={(ev) => {
                  dispatch({ type: ACTIONS.CHANGE_IMAGES, next: ev.target.files });
                }}
                type="file"
                multiple
              />
            </StyledButtonInput>
          </StyledBoderInput>
          <StyledBoderInput>
            <StyledTitle>Video</StyledTitle>
            <StyledInput
              value={state.video}
              onChange={(ev) => {
                dispatch({ type: ACTIONS.CHANGE_VIDEO, next: ev.target.value });
              }}
              
              type="text"
              placeholder="Enter Youtube link here"
            ></StyledInput>
          </StyledBoderInput>
          <StyledGroupButon>
            <StyledLink onClick={onClickPrevious}>Back </StyledLink>
            <StyledLink onClick={onClickNext}>Next </StyledLink>
          </StyledGroupButon>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default Photos;
