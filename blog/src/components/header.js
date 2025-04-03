import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BaseContainer } from "../BaseContainer";

const StyledHeader = styled(BaseContainer).attrs({ as: "header" })`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.Header.backgroundColor};
`;

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${(props) => props.theme.Header.color};
`;

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink to="/">{siteTitle || "My Styled Blog"}</StyledLink>
  </StyledHeader>
);
