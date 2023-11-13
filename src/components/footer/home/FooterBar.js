import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.div`
  font-family: "Poppins", sans-serif;

  ${(props) => {
    if (props.$variant === "home") {
      return css`
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        position: sticky;
        bottom: 0;
        background-color: white;
      `;
    }
  }}
`;

const StyledContainer = styled.div`
  ${(props) => {
    if (props.$variant === "home") {
      return css`
        width: 90%;
        margin: auto;

        @media only screen and (max-width: 1400px) {
          & {
            width: 93%;
          }
        }

        @media only screen and (max-width: 1200px) {
          & {
            width: 95%;
          }
        }
        @media only screen and (max-width: 992px) {
          & {
            width: 95%;
          }
        }
      `;
    }
  }}

  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

const StyledLeftContent = styled.div`
  display: flex;
  gap: 7px;
  color: rgb(90, 90, 90);
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: rgb(90, 90, 90);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${(props) => {
    if (props.$position === "right") {
      return css`
        font-weight: 600;
        color: black;
        font-size: 15px;
      `;
    }
  }}
`;

const StyledRightContent = styled.div``;

export default function FooterBar({ variant }) {
  return (
    <StyledFooter $variant={variant}>
      <StyledContainer $variant={variant}>
        <StyledLeftContent>
          <p>&#169; 2023 Airbnb, Inc.</p>
          <span>&#183;</span>
          <StyledLink>Terms</StyledLink>
          <span>&#183;</span>
          <StyledLink>Sitemap</StyledLink>
          <span>&#183;</span>
          <StyledLink>Privacy</StyledLink>
          <span>&#183;</span>
          <StyledLink>
            Your Privacy Choices <FontAwesomeIcon icon={faCheck} />
          </StyledLink>
        </StyledLeftContent>
        <StyledRightContent>
          <StyledLink $position="right">
            Support & resources <FontAwesomeIcon icon={faChevronUp} />
          </StyledLink>
        </StyledRightContent>
      </StyledContainer>
    </StyledFooter>
  );
}
