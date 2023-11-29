import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { cilCloudUpload } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import PopUpContainer from "ui/PopUpContainer";
import { useRef } from "react";
import DefaultImg from "assets/default-img.webp";
import { useQueryClient } from "@tanstack/react-query";

//api import
import { CreateAmenitiesMutation } from "api/amenitiesApi";

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
  gap: 10px;

  & input,
  & select {
    height: 2.2rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  & input:focus,
  & select:focus {
    outline: 1px solid rgba(30, 144, 255);
    border: 1px solid rgba(30, 144, 255);
  }
`;

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row-;
  border-top: 1px solid black;
  padding-top: 1rem;

  & .submit-button {
    background-color: white;
    border: 1px solid black;
    font-size: 18px;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all 0.1s;
  }

  & .submit-button:focus {
    background-color: blue;
    color: white;
  }
`;

const StyledPopUpContainer = styled(PopUpContainer)`
  padding: 1rem;
  left: 53%;
  top: 20%;
  width: 27rem;

  @media only screen and (max-width: 500px) {
    width: 300px;
    left: 50%;
  }
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

  & img {
    height: 8rem;
    width: max-content;
    margin-bottom: 10px;
    outline: 1px solid rgba(30, 144, 255);
    border: 1px solid rgba(30, 144, 255);
  }
`;

export default function CreateAmenityPopUp({ currentPage, setShowPopUp }) {
  const queryClient = useQueryClient();
  const createMutation = CreateAmenitiesMutation();
  const imgUploadRef = useRef();

  const [imgSrc, setImgSrc] = useState(DefaultImg);
  const [amenitiesName, setAmenitiesName] = useState("");
  const [type, setType] = useState("essentials");
  const [error, setError] = useState(null);

  const onUploadImg = (ev) => {
    ev.preventDefault();
    imgUploadRef.current.click();
  };

  const checkChange = () => {
    if (imgUploadRef.current.files.length != 0) {
      setImgSrc(URL.createObjectURL(imgUploadRef.current.files[0]));
    }
  };

  const onAddNewAmenity = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("icon_image", imgUploadRef.current.files[0]);
    formData.append("name", amenitiesName);
    formData.append("type", type);

    createMutation.mutate(formData, {
      onSuccess: () => {
        alert("sucess");
        setAmenitiesName("");
        setImgSrc(DefaultImg);
        setError(null);
        queryClient.invalidateQueries({ queryKey: ["amenity", "page", currentPage] });
      },
      onError: (err) => {
        const response = err.response;
        setError(response.data.errors);
        console.log(response.data.errors);
      },
    });
  };

  const turnOffPopUp = () => {
    setShowPopUp(false);
    setImgSrc(DefaultImg);
  };

  return (
    <StyledPopUpContainer setShowPopUp={turnOffPopUp}>
      <StyledForm>
        <StyledInputField>
          <label>Amenity Name</label>
          <input
            onChange={(ev) => {
              setAmenitiesName(ev.target.value);
            }}
            type="text"
            placeholder="Amenity name"
            value={amenitiesName}
          />
        </StyledInputField>
        <StyledInputField>
          <label>Type</label>
          <select value={type} onChange={(ev) => setType(ev.target.value)}>
            <option value={"essentials"}>Essentials</option>
            <option value={"features"}>Features</option>
            <option value={"location"}>Location</option>
            <option value={"safety"}>Safety</option>
          </select>
        </StyledInputField>
        <StyledImgField>
          <label>Icon</label>
          <input ref={imgUploadRef} accept="image/*" onChange={checkChange} type="file" />
          <img src={imgSrc} alt="img" />
          <button onClick={onUploadImg}>
            <CIcon icon={cilCloudUpload} customClassName="upload-icon" />
            Image Upload
          </button>
        </StyledImgField>
        {error && (
          <div className="alert">
            {Object.keys(error).map((key) => (
              <div key={key}>{error[key]}</div>
            ))}
          </div>
        )}
        <StyledButtonRow>
          <button disabled={amenitiesName == "" || imgSrc == DefaultImg} onClick={onAddNewAmenity} className="submit-button">
            Submit
          </button>
        </StyledButtonRow>
      </StyledForm>
    </StyledPopUpContainer>
  );
}
