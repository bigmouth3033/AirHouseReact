import React from "react";
import styled from "styled-components";
import NavProduct from "../components/navbar/product-creation/NavProduct";
import ProductCreationBody from "../components/body/product-creation-body/ProductCreationBody";


const StyledContainer = styled.div`
  /* min-height: 100vh; */
  min-height: 100vh;
`;

export default function ProductCreation() {
  return (

    <StyledContainer>
      <NavProduct/>
      <ProductCreationBody/>
    </StyledContainer>
  );
}
