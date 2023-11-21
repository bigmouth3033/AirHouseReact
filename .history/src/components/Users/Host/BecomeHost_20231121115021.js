import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const StyledSecion1 = styled.section`
  position: relative;
  width: 50%;
`;
const StyledForm = styled.form`
  margin-top: 15px;
  padding: 0 20px;
`;
const StyleText = styled.div`
  display: inline-block;
  position: absolute;
`;
const StyelImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const BecomeHost = () => {
  return (
    <StyledContainer>
      <StyledSecion1>
        <StyelImg
          src="https://demowpthemes.com/buy2rental/public/front/images/logos/1635921594_list_your_space.jpg"
          alt="Pic..."
        />
        <StyleText>
          <h1>List your space</h1>
          <p>Buy? Rantal Let's your make money renting out your place</p>
        </StyleText>
      </StyledSecion1>
      <StyledSecion1>
        <StyledForm>
          <label htmlFor="">Home type</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Room type</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Accommodates</label>
          <input type="text" name="" id="" />
          <label htmlFor="">
            City <span>*</span>
          </label>
          <input type="text" name="" id="" />
          <button type="submit">Continute</button>
        </StyledForm>
      </StyledSecion1>
    </StyledContainer>
  );
};

export default BecomeHost;
