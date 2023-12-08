import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { cilCloudUpload } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import PopUpContainer from "ui/PopUpContainer";
import { useRef } from "react";
import DefaultImg from "assets/default-img.webp";
import { useQueryClient } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";

//api import

import { BlogQueryId, UpdateBlogMutation } from "api/blogApi";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h6 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 500;
  }

  & label {
    font-size: 18px;
    font-weight: 500;
  }
`;

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & input {
    height: 2.2rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  & input:focus {
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
  position: fixed;
  padding: 1rem;
  left: 53%;
  top: 15%;
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

export default function UpdateBlogPopUp({
  currentPage,
  chosenId,
  setShowPopUp,
}) {
  console.log(currentPage, chosenId, setShowPopUp);
  const queryClient = useQueryClient();
  const blogQuery = BlogQueryId(chosenId);
  const updateMutation = UpdateBlogMutation();

  // const imgUploadRef = useRef();

  // const [imgSrc, setImgSrc] = useState(DefaultImg);
  const [blogTitle, setBlogTitle] = useState("Loading...");
  const [error, setError] = useState(null);

  // const onUploadImg = (ev) => {
  //   ev.preventDefault();
  //   imgUploadRef.current.click();
  // };

  // const checkChange = () => {
  //   if (imgUploadRef.current.files.length != 0) {
  //     setImgSrc(URL.createObjectURL(imgUploadRef.current.files[0]));
  //   }
  // };

  const turnOffPopUp = () => {
    setShowPopUp(false);
    // setImgSrc(DefaultImg);
  };

  useEffect(() => {
    if (blogQuery.isSuccess) {
      // setImgSrc(blogQuery.data[0].icon_image);
      alert(blogQuery.data.id);
      setBlogTitle(blogQuery.data.title);
    }
  }, [blogQuery.status]); //cái if này nó sẽ chỉ chạy 2 lần, khi status là isLoading và Success, nếu để ngoài useEffecr nó sẽ bị vòng lặp vì isSuccess nó giữ trạng thái trủ quài =>setState sẽ chạy => component sẽ rerender nên function lại chạy lại, lại đụng isSuccess

  const onUpdateEvent = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("id", blogQuery.data.id);
    formData.append("title", blogTitle);
    formData.append("content", blogQuery.data.content);
    blogQuery.data.category.forEach();

    console.log(blogTitle);

    // if (imgUploadRef.current.files[0]) {
    //   formData.append("icon_image", imgUploadRef.current.files[0]);
    // }

    updateMutation.mutate(formData, {
      onSuccess: () => {
        alert("sucess update");
        queryClient.invalidateQueries({
          queryKey: ["blog", "page", currentPage],
        });
      },
      onError: (err) => {
        const response = err.response;
        setError(response.data.errors);
        console.log(response.data.errors);
      },
    });
    console.log();
  };

  return (
    <StyledPopUpContainer setShowPopUp={turnOffPopUp}>
      <StyledForm>
        <h6>
          {blogQuery.isSuccess ? "ID: " + blogQuery.data.id : <Skeleton />}
        </h6>
        <StyledInputField>
          <label>Tilte</label>
          <input
            onChange={(ev) => {
              setBlogTitle(ev.target.value);
            }}
            type="text"
            placeholder="Blog Tilte"
            value={blogTitle}
          />
        </StyledInputField>
        {/* <StyledImgField>
          <label>Icon</label>
          <input
            ref={imgUploadRef}
            accept="image/*"
            onChange={checkChange}
            type="file"
          />
          <img src={imgSrc} alt="img" />
          <button onClick={onUploadImg}>
            <CIcon icon={cilCloudUpload} customClassName="upload-icon" />
            Image Upload
          </button>
        </StyledImgField> */}
        {error && (
          <div className="alert">
            {Object.keys(error).map((key) => (
              <div key={key}>{error[key]}</div>
            ))}
          </div>
        )}
        <StyledButtonRow>
          <button
            onClick={onUpdateEvent}
            disabled={blogTitle == ""}
            className="submit-button"
          >
            Update
          </button>
        </StyledButtonRow>
      </StyledForm>
    </StyledPopUpContainer>
  );
}
