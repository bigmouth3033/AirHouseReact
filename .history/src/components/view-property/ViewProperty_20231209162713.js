import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
import Images from "./Images";
import Information from "./Information";
import TotalBeforeTaxes from "./TotalBeforeTaxes";
import { DateRangeProvider } from "./DateRangeContext";
import { useSearchParams } from "react-router-dom";
import { PropertyQueryId } from "api/propertyApi";
import Loading from "components/Loading";
import PropertyNotFound from "components/PropertyNotFound";

const StyledContainer = styled.div`
  max-width: 1150px;
  margin: auto;
`;
const StyledInformation = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 30px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
const ViewProperty = () => {
  const [serachParam, setserachParam] = useSearchParams();
  const propertyQuery = PropertyQueryId(serachParam.get("id"));
  return (
    <div>
      {propertyQuery.isLoading ? (
        <Loading />
      ) : (
        <DateRangeProvider>
          {propertyQuery.isSuccess ? (
            <StyledContainer>
              <NavViewhost data={propertyQuery.data} />
              <Images data={propertyQuery.data} />
              <StyledInformation>
                <Information data={propertyQuery.data} />
                <TotalBeforeTaxes data={propertyQuery.data} />
              </StyledInformation>
            </StyledContainer>
          ) : (
            <PropertyNotFound />
          )}
        </DateRangeProvider>
      )}
    </div>
  );
};

export default ViewProperty;
