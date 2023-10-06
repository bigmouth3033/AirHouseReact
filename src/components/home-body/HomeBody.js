import styled from "styled-components";
import "./home-body.css"

import BodyItem from "./BodyItem";
import StyledHomePageContainer from "../../ui/StyledHomePageContainer";

const StyledBody = styled.div`
`;

const StyledContainer = styled(StyledHomePageContainer)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  
`;

function HomeBody() {
  return (
    <StyledBody>
      <StyledContainer>
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />

        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />

        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
        <BodyItem className="item" />
      </StyledContainer>
    </StyledBody>
  );
}

export default HomeBody;
