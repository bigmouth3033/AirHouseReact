import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
`;
const StyledSecion1 = styled.section``;
const BecomeHost = () => {
  return (
    <StyledContainer>
      <StyledSecion1>
        <div className="">
          <img src="" alt="" />
        </div>
        <div>
          <h1>List your space</h1>
          <p>Buy? Rantal Let's your make money renting out your place</p>
        </div>
      </StyledSecion1>
      <section>
        <form>
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
        </form>
      </section>
    </StyledContainer>
  );
};

export default BecomeHost;
