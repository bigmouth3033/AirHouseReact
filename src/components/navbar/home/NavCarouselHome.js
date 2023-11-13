import styled, { css } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import "./carousel.css";

// import image

import amazingPools from "../../../assets/nav-slider-img/amazing-pools.jpg";
import amazingViews from "../../../assets/nav-slider-img/amazing-views.jpg";
import beach from "../../../assets/nav-slider-img/beach.jpg";
import boats from "../../../assets/nav-slider-img/boats.jpg";
import farm from "../../../assets/nav-slider-img/farm.jpg";
import golfing from "../../../assets/nav-slider-img/golfing.jpg";
import iconicCities from "../../../assets/nav-slider-img/iconic-cities.jpg";
import nationPark from "../../../assets/nav-slider-img/nation-park.jpg";
import omg from "../../../assets/nav-slider-img/nation-park.jpg";
import rooms from "../../../assets/nav-slider-img/rooms.jpg";
import tinyhome from "../../../assets/nav-slider-img/tinyhome.jpg";
import treehouses from "../../../assets/nav-slider-img/treehouses.jpg";
import trending from "../../../assets/nav-slider-img/trending.jpg";

const items = [
  { img: amazingViews, name: "Amazing views", border: true },
  { img: beach, name: "Beach", border: false },
  { img: boats, name: "Boats", border: false },
  { img: farm, name: "Farm", border: false },
  { img: amazingPools, name: "Amazing pools", border: false },
  { img: golfing, name: "Golfing", border: false },
  { img: iconicCities, name: "Iconic cities", border: false },
  { img: nationPark, name: "Nation park", border: false },
  { img: omg, name: "OMG", border: false },
  { img: rooms, name: "Rooms", border: false },
  { img: tinyhome, name: "Tiny home", border: false },
  { img: treehouses, name: "Tree houses", border: false },
  { img: trending, name: "Trending", border: false },
];

const StyledItemContainer = styled.div`
  border: 0;
  background-color: white;
  border-bottom: 2px solid white;
  width: max-content;
  padding-top: 10px;
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
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  }

  ${(props) => {
    if (props.$border === false) {
      return css`
        & > p {
          border-bottom: 2px solid rgba(255, 255, 255);
        }

        &:hover > p {
          border-bottom: 2px solid rgba(0, 0, 0, 0.3);
        }

        filter: opacity(0.6);

        &:hover {
          filter: opacity(1);
        }
      `;
    }

    if (props.$border === true) {
      return css`
        & > p {
          border-bottom: 2px solid rgba(0, 0, 0);
        }

        &:hover > p {
          border-bottom: 2px solid rgba(0, 0, 0, 1);
        }
      `;
    }
  }};
`;

function SliderItem({ img, name, click, borderEffect }) {
  return (
    <StyledItemContainer onClick={click} $border={borderEffect}>
      <img src={img} />
      <p>{name}</p>
    </StyledItemContainer>
  );
}

const responsive = {
  reponsive_1: {
    breakpoint: { max: 1640, min: 1100 },
    items: 11,
  },
  reponsive_2: {
    breakpoint: { max: 1500, min: 1400 },
    items: 10,
  },
  reponsive_3: {
    breakpoint: { max: 1400, min: 1300 },
    items: 9,
  },
  reponsive_4: {
    breakpoint: { max: 1300, min: 1200 },
    items: 8,
  },
  reponsive_5: {
    breakpoint: { max: 1200, min: 1100 },
    items: 7,
  },
  reponsive_6: {
    breakpoint: { max: 1100, min: 1000 },
    items: 6,
  },
  reponsive_7: {
    breakpoint: { max: 1000, min: 900 },
    items: 5,
  },
  reponsive_8: {
    breakpoint: { max: 900, min: 800 },
    items: 4,
  },
  reponsive_9: {
    breakpoint: { max: 800, min: 744 },
    items: 7,
  },
  reponsive_10: {
    breakpoint: { max: 744, min: 650 },
    items: 6,
  },
  reponsive_11: {
    breakpoint: { max: 650, min: 550 },
    items: 5,
  },
  reponsive_12: {
    breakpoint: { max: 550, min: 450 },
    items: 4,
  },
  reponsive_13: {
    breakpoint: { max: 450, min: 350 },
    items: 3,
  },
  reponsive_14: {
    breakpoint: { max: 350, min: 0 },
    items: 2,
  },
};

const StyledCarousel = styled(Carousel)`
  & ${StyledItemContainer} {
    margin: auto;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  flex: 1;
`;

function NavCarouselHome() {
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
      {window.innerWidth > 800 ? (
        <StyledCarousel draggable={false} swipeable={false} arrows={true} containerClass="carousel-container" responsive={responsive}>
          {showBorder.map((item, index) => (
            <SliderItem click={() => onClickShowBorder(index)} borderEffect={item.border} img={item.img} name={item.name} key={item.name} />
          ))}
        </StyledCarousel>
      ) : (
        <StyledCarousel arrows={false} centerMode={true} containerClass="carousel-container" responsive={responsive}>
          {showBorder.map((item, index) => (
            <SliderItem click={() => onClickShowBorder(index)} borderEffect={item.border} img={item.img} name={item.name} key={item.name} />
          ))}
        </StyledCarousel>
      )}
    </StyledContainer>
  );
}

export default NavCarouselHome;
