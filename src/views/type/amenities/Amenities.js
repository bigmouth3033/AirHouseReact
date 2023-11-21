import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { cilPlus } from "@coreui/icons";
import { cilCloudUpload } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import PopUpContainer from "ui/PopUpContainer";
import { useRef } from "react";

const StyledAmenities = styled.div``;

const StyledContainer = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 7px;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 80vh;
`;

const StyledHeader = styled.div``;

const StyledCreateButton = styled.button`
  background-color: blue;
  border: none;
  color: white;
  padding: 10px;
  margin: 0 0 1.5rem 0;
  font-size: 18px;

  &:active {
  }

  & .create-icon {
    width: 25px;
    border: 1px solid white;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & label {
    font-size: 18px;
    font-weight: 500;
  }
`;

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    height: 2.2rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row-;
  border-top: 1px solid black;
  padding-top: 1rem;
`;

const StyledPopUpContainer = styled(PopUpContainer)`
  padding: 1rem;
  left: 53%;
  top: 20%;
  width: 27rem;
`;

const StyledImgField = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    display: none;
  }

  & .upload-icon {
    width: 30px;
    margin-right: 5px;
  }

  & button {
    background-color: blue;
    color: white;
    padding: 10px 0px;
    border: 0;
  }
`;

export default function Amenities() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const imgUploadRef = useRef();

  const onUploadImg = (ev) => {
    ev.preventDefault();

    imgUploadRef.current.click();

    console.log(imgUploadRef.current.files[0]);
  };

  const checkChange = () => {
    // console.log(imgUploadRef.current.webkitRelativePath);
    // setImgSrc(imgUploadRef.current.files[0]);
    console.log(URL.createObjectURL(imgUploadRef.current.files[0]));
    setImgSrc(URL.createObjectURL(imgUploadRef.current.files[0]));
  };

  return (
    <StyledAmenities>
      <StyledHeader>
        <StyledCreateButton onClick={() => setShowPopUp(true)}>
          <CIcon icon={cilPlus} customClassName="create-icon" />
          Create New Amenity
        </StyledCreateButton>
        {showPopUp && (
          <StyledPopUpContainer setShowPopUp={setShowPopUp}>
            <StyledForm>
              <StyledInputField>
                <label>Amenity Name</label>
                <input type="text" />
              </StyledInputField>
              <StyledImgField>
                <label>Icon</label>
                <input accept="image/*" onChange={checkChange} ref={imgUploadRef} type="file" />
                <img src={imgSrc} />
                <button onClick={onUploadImg}>
                  <CIcon icon={cilCloudUpload} customClassName="upload-icon" />
                  Image Upload
                </button>
              </StyledImgField>
              <StyledButtonRow>
                <button className="submit-button">submit</button>
              </StyledButtonRow>
            </StyledForm>
          </StyledPopUpContainer>
        )}
      </StyledHeader>
      <StyledContainer></StyledContainer>
    </StyledAmenities>
  );
}
