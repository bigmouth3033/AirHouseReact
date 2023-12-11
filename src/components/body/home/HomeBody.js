import styled from "styled-components";
import "./home-body.css";
import BodyItem from "./BodyItem";
import StyledHomePageContainer from "../../../ui/StyledHomePageContainer";
import { PropertyIndexQuery } from "api/hostApi";
import { useStateContext } from "contexts/ContextProvider";
import Loading from "components/Loading";
import { BodyItemSkeleton } from "./BodyItem";
import { useNavigate } from "react-router-dom";
import NavUser from "components/navbar/home/NavUser";

const StyledBody = styled.div``;

const StyledContainer = styled(StyledHomePageContainer)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  font-family: "Poppins", sans-serif;

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
  const { chosenProperty } = useStateContext();
  const propertyQuery = PropertyIndexQuery(chosenProperty);
  const navigate = useNavigate();

  const onClickProperty = (id) => {
    navigate({
      pathname: "property",
      search: `?id=${id}`,
    });
  };

  if (propertyQuery.isLoading) {
    return (
      <StyledContainer>
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
        <BodyItemSkeleton />
      </StyledContainer>
    );
  }

  return (
    <StyledBody>
      <StyledContainer>
        {propertyQuery.isSuccess &&
          propertyQuery.data.map((item, index) => <BodyItem key={index} click={onClickProperty} data={item} className="item" />)}
      </StyledContainer>
    </StyledBody>
  );
}

export default HomeBody;
