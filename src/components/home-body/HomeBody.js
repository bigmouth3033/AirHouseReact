import styled from "styled-components";
import "./home-body.css";

import BodyItem from "./BodyItem";
import StyledHomePageContainer from "../../ui/StyledHomePageContainer";

const StyledBody = styled.div``;

const StyledContainer = styled(StyledHomePageContainer)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  @media (max-width: 1879px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1640px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1127px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
