import React from "react";
import AboutSession from "./AboutSession";
import styled from "styled-components";
const TitleAbout = ["Support", "Hosting", "Airbnb"];
const link = "https://www.airbnb.com/";
const SupportDetail = [
  "Help Center",
  "AirCover",
  " Anti-discrimination",
  "Disability support",
  "Cancellation options",
  "Report neighborhood concern",
];
const HostingDetail = [
  "Airbnb your home",
  "AirCover for Hosts",
  "Hosting resources",
  "Community forum",
  "Hosting responsibly",
  "Airbnb-friendly apartments",
];
const AirbnbDetail = [
  "Newsroom",
  "New features",
  "Careers",
  "Investors",
  "Gift cards",
  "Airbnb.org emergency stays",
];
const StyleAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  border-bottom: 1px solid #717171;
  padding-bottom: 50px;
`;
const StyleA = styled.a`
  display: block;
  text-decoration: none;
  font-style: 16px;
  color: black;
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #717171;
  }
  /* &:hover:empty {
    cursor: not-allowed;
    pointer-events: none;
  } */
`;
const About = () => {
  return (
    <StyleAbout>
      <AboutSession
        title={TitleAbout[0]}
        item={SupportDetail.map((value, index) => (
          <StyleA href={link}>{value}</StyleA>
        ))}
      ></AboutSession>
      <AboutSession
        title={TitleAbout[1]}
        item={HostingDetail.map((value, index) => (
          <StyleA href={link}>{value}</StyleA>
        ))}
      ></AboutSession>
      <AboutSession
        title={TitleAbout[2]}
        item={AirbnbDetail.map((value, index) => (
          <StyleA href={link}>{value}</StyleA>
        ))}
      ></AboutSession>
    </StyleAbout>
  );
};

export default About;
