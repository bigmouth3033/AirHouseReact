import React, { createRef, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 650px;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  @media (max-width: 992px) {
    position: relative;
  }
`;
const StyledSecion1 = styled.section`
  position: relative;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
const StyledSecion2 = styled.section`
  width: 50%;
  @media (max-width: 992px) {
    position: absolute;
    width: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
const StyledForm = styled.form`
  height: 600px;
  border-radius: 5px;
  margin-top: 15px;
  padding: 30px 40px 0 40px;
  overflow: auto;
  @media (max-width: 992px) {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const StyleText = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  line-height: 30px;
  @media (max-width: 992px) {
    display: none;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
  }
`;

const StyelImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 600px;
  object-fit: cover;
  @media (max-width: 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyledLable = styled.label`
  font-size: 18px;
  color: #717171;
  @media (max-width: 992px) {
    color: black;
  }
`;
const StyledSelect = styled.select`
  width: 100%;
  height: 45px;
  border: 1px solid #717171;
  padding: 0 20px;
  margin: 10px 0px 35px 0px;
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
  font-size: 20px;
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
    margin: 10px 90px 0px 90px;
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

  // Update handleViewBeforeSubmit to use the updateAllData function
  const handleViewBeforeSubmit = (index) => {
    handleClickAddBed(index);
    data = updatedData;
  };
  // Tạo một mảng số từ 1 đến 10
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <StyledContainer>
      <StyledSecion1>
        <StyelImg
          src="https://demowpthemes.com/buy2rental/public/front/images/logos/1635921594_list_your_space.jpg"
          alt="Pic..."
        />
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
          <div>
            {/* Tạo số lượng <p> tương ứng với số được chọn */}
            {Array.from({ length: selectedNumber }, (_, index) => (
              <>
                <StyledTitle>Bedroom {index + 1}</StyledTitle>
                <StyledContainerAddBed>
                  <div key={index}>
                    {showBed[index] ? (
                      <StyledShow>
                        <StyledShowDetail>
                          <StyledLable>King</StyledLable>
                          <input ref={inRef1} type="number"></input>
                        </StyledShowDetail>
                        <StyledShowDetail>
                          <StyledLable>Queen</StyledLable>
                          <input ref={inRef2} type="number"></input>
                        </StyledShowDetail>
                        <StyledShowDetail>
                          <StyledLable>Double</StyledLable>
                          <input ref={inRef3} type="number"></input>
                        </StyledShowDetail>
                        <StyledShowDetail>
                          <StyledLable>Single</StyledLable>
                          <input ref={inRef4} type="number"></input>
                        </StyledShowDetail>
                        <StyledShowDetail>
                          <StyledLable>Sofa bed</StyledLable>
                          <input ref={inRef5} type="number"></input>
                        </StyledShowDetail>
                      </StyledShow>
                    ) : (
                      <div>
                        <StyledLable>King: </StyledLable>
                        <StyledLable>Queen: </StyledLable>
                        <StyledLable>Double: </StyledLable>
                        <StyledLable>Single: </StyledLable>
                        <StyledLable>Sofa Bed: </StyledLable>
                      </div>
                    )}
                  </div>
                  <StyledAddBed onClick={() => handleViewBeforeSubmit(index)}>
                    {/* {console.log(valueBed[index])} */}
                    {valueBed[index] ? <p>Done</p> : <p>Add Bed</p>}
                  </StyledAddBed>
                </StyledContainerAddBed>
              </>
            ))}
          </div>
          <StyledLable htmlFor="">Bathrooms</StyledLable>
          <StyledSelect>
            {numbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </StyledSelect>
          <StyledTitle htmlFor="">Listings </StyledTitle>
          <StyledListing>
            <div>
              <StyledLable>Property Type</StyledLable>
              <StyledSelect>
                <option value="option1">...</option>
                <option value="option1">1</option>
                <option value="option2">2</option>
              </StyledSelect>
            </div>
            <div>
              <StyledLable>Room Type</StyledLable>
              <StyledSelect>
                <option value="option1">...</option>
                <option value="option1">1</option>
                <option value="option2">2</option>
              </StyledSelect>
            </div>
            <div>
              <StyledLable>Accommodates</StyledLable>
              <StyledSelect>
                <option value="option1">...</option>
                <option value="option1">1</option>
                <option value="option2">2</option>
              </StyledSelect>
            </div>
          </StyledListing>
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
