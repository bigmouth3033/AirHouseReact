import React, { createRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Img from "assets/images/hosting-img/room_bed.jpg";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  min-height: 50rem;
  border-bottom: 1px solid black;

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

const StyledSecion2 = styled.section`
  /* width: 60%; */
`;

const StyledForm = styled.form`
  border-radius: 5px;
  margin-top: 15px;
  padding: 30px 40px 0 40px;
  overflow: auto;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
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
    font-size: 20px;
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
  color: #717171;
  @media (max-width: 992px) {
    color: black;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0px 35px 0px;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
    height: 35px;
  }
`;

const StyledButton = styled.button`
  padding: 14px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #e51d50;
  border: 1px solid #e51d50;
  background-color: white;

  &:focus,
  &:hover {
    color: white;
    border: none;
    background-color: #e51d50;
  }

  @media (max-width: 992px) {
    padding: 10px 27px;
    font-size: 16px;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
  }
`;

const StyledTitle = styled.div`
  color: black;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const StyledListing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 992px) {
    display: inline-block;
  }
`;

const StyledContainerAddBed = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 992px) {
    display: block;
  }
`;

const StyledAddBed = styled.div`
  background-color: #e51d50;
  color: white;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 992px) {
    /* width: 100%; */
  }
`;

const StyledShow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: calc(100% -16px);
  gap: 20px;
  margin-left: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledShowDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    margin-left: 15px;
    height: 30px;
  }
`;

const StyledGroupButton = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0 35px 0;

  &:focus,
  &:hover {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media (max-width: 992px) {
    margin: 8px 0 20px 0;
    height: 40px;
  }
`;

const StyledImgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const Basic = () => {
  const inRef1 = createRef();
  const inRef2 = createRef();
  const inRef3 = createRef();
  const inRef4 = createRef();
  const inRef5 = createRef();
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [showBed, setShowBed] = useState(Array(selectedNumber).fill(false));
  const [valueBed, setValueBed] = useState(Array(selectedNumber).fill(false));
  const [data, setData] = useState({});
  // Hàm xử lý sự kiện khi giá trị của select thay đổi
  const handleSelectChange = (event) => {
    const newSelectedNumber = parseInt(event.target.value, 10);
    setSelectedNumber(newSelectedNumber);
    setShowBed((prevShowBed) => {
      // Đảm bảo mảng có đúng số phần tử như newSelectedNumber
      const newArray = [...prevShowBed];
      while (newArray.length < newSelectedNumber) {
        newArray.push(false);
      }
      return newArray;
    });
    setValueBed((prevShowBed) => {
      const newArray = [...prevShowBed];
      while (newArray.length < newSelectedNumber) {
        newArray.push(false);
      }
      return newArray;
    });
  };

  const handleClickAddBed = (index) => {
    setShowBed((prevShowBed) => {
      const newArray = [...prevShowBed];
      newArray[index] = !newArray[index];
      return newArray;
    });

    setValueBed((prevValueBed) => {
      const newArray = [...prevValueBed];
      newArray[index] = !newArray[index];
      return newArray;
    });

    setData((prevData) => {
      const updatedData = { ...prevData };

      const getValue = (ref) => (ref && ref.current ? ref.current.value : null);

      updatedData[index] = {
        inRef1: getValue(inRef1),
        inRef2: getValue(inRef2),
        inRef3: getValue(inRef3),
        inRef4: getValue(inRef4),
        inRef5: getValue(inRef5),
      };

      return updatedData;
    });
  };

  const handleViewBeforeSubmit = (index) => {
    handleClickAddBed(index);

    inRef1.current && (inRef1.current.value = data[index]?.inRef1 || "");
    inRef2.current && (inRef2.current.value = data[index]?.inRef2 || "");
    inRef3.current && (inRef3.current.value = data[index]?.inRef3 || "");
    inRef4.current && (inRef4.current.value = data[index]?.inRef4 || "");
    inRef5.current && (inRef5.current.value = data[index]?.inRef5 || "");
  };

  // Tạo một mảng số từ 1 đến 10
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <StyledContainer>
      <StyledSecion1 style={{ backgroundImage: `url(${Img})` }}>
        <StyledImgOverlay />
        <StyleText>
          <h2>List your space</h2>
          <p>Buy? Rantal Let's your make money renting out your place</p>
        </StyleText>
      </StyledSecion1>
      <StyledSecion2>
        <StyledForm>
          <StyledTitle htmlFor="">Rooms and Beds </StyledTitle>
          <StyledLable htmlFor="">Bedrooms</StyledLable>
          <StyledSelect onChange={handleSelectChange} value={selectedNumber}>
            {numbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </StyledSelect>

          <StyledLable htmlFor="">Bathrooms</StyledLable>
          <StyledSelect>
            {numbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </StyledSelect>
          <StyledLable htmlFor="">Accommodates </StyledLable>
          <StyledSelect onChange={handleSelectChange} value={selectedNumber}>
            {numbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </StyledSelect>
          <StyledGroupButton>
            <div></div>
            <StyledButton type="submit">Continute</StyledButton>
          </StyledGroupButton>
        </StyledForm>
      </StyledSecion2>
    </StyledContainer>
  );
};

export default Basic;
