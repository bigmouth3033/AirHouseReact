import styled, { css } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

// import image

import amazingPools from "../../assets/nav-slider-img/amazing-pools.jpg";
import amazingViews from "../../assets/nav-slider-img/amazing-views.jpg";
import beach from "../../assets/nav-slider-img/beach.jpg";
import boats from "../../assets/nav-slider-img/boats.jpg";
import farm from "../../assets/nav-slider-img/farm.jpg";
import golfing from "../../assets/nav-slider-img/golfing.jpg";
import iconicCities from "../../assets/nav-slider-img/iconic-cities.jpg";
import nationPark from "../../assets/nav-slider-img/nation-park.jpg";
import omg from "../../assets/nav-slider-img/nation-park.jpg";
import rooms from "../../assets/nav-slider-img/rooms.jpg";
import tinyhome from "../../assets/nav-slider-img/tinyhome.jpg";
import treehouses from "../../assets/nav-slider-img/treehouses.jpg";
import trending from "../../assets/nav-slider-img/trending.jpg";

const items = [
  { img: amazingPools, name: "Amazing pools", border: true },
  { img: amazingViews, name: "Amazing views", border: false },
  { img: beach, name: "Beach", border: false },
  { img: boats, name: "Boats", border: false },
  { img: farm, name: "Farm", border: false },
  { img: golfing, name: "Golfing", border: false },
  { img: iconicCities, name: "Iconic cities", border: false },
  { img: nationPark, name: "Nation park", border: false },
  { img: omg, name: "OMG", border: false },
  { img: rooms, name: "Rooms", border: false },
  { img: tinyhome, name: "Tiny home", border: false },
  { img: treehouses, name: "Tree houses", border: false },
  { img: trending, name: "Trending", border: false },
];

const StyledItemContainer = styled.button`
  border: 0;
  background-color: white;
  border-bottom: 2px solid white;
  width: fit-content;
  padding-top: 1rem;
  gap: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    padding-bottom: 10px;
  }

  > img {
    width: 1.5rem;
    display: block;
  }

  &:hover > p {
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  }

  ${(props) => {
    if (props.border === false) {
      return css`
        & > p {
          border-bottom: 3px solid rgba(255, 255, 255);
        }

        &:hover > p {
          border-bottom: 3px solid rgba(0, 0, 0, 0.3);
        }
      `;
    }

    if (props.border === true) {
      return css`
        & > p {
          border-bottom: 3px solid rgba(0, 0, 0);
        }

        &:hover > p {
          border-bottom: 3px solid rgba(0, 0, 0, 1);
        }
      `;
    }
  }};
`;

const StyledCarousel = styled(Carousel)`
  & ${StyledItemContainer} {
    margin: auto;
  }
`;

function SliderItem({ img, name, click, borderEffect }) {
  return (
    <StyledItemContainer onClick={click} border={borderEffect}>
      <img src={img} />
      <p>{name}</p>
    </StyledItemContainer>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <button className={currentSlide === 0 ? "disable" : "left"} onClick={() => previous()}>
        <FontAwesomeIcon className="icon" icon={faChevronCircleLeft} />
      </button>
      <button className={currentSlide === 3 ? "disable" : "right"} onClick={() => next()}>
        <FontAwesomeIcon className="icon" icon={faChevronCircleRight} />
      </button>
    </div>
  );
};

const StyledContainer = styled.div`
  width: 75%;
`;

function NavCarousel() {
  const [showBorder, setShowBorder] = useState(items);

  function onClickShowBorder(index) {
    const newList = showBorder.slice();

    for (let i = 0; i < newList.length; i++) {
      showBorder[i].border = false;
      if (i == index) {
        showBorder[i].border = true;
      }
    }
    setShowBorder(newList);
  }

  return (
    <StyledContainer>
      <StyledCarousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive}>
        {showBorder.map((item, index) => (
          <SliderItem click={() => onClickShowBorder(index)} borderEffect={item.border} img={item.img} name={item.name} key={item.name} />
        ))}
      </StyledCarousel>
    </StyledContainer>
  );
}

export default NavCarousel;
