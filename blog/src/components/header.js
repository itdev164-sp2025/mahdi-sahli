import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { BaseContainer } from "../BaseContainer";
import { H1 } from "../Heading";
import Section from "../Section";
import { IconButton } from "../Button";
import { Search } from "styled-icons/feather";

// Theme-based styled header
const StyledHeader = styled(BaseContainer).attrs({ as: "header" })`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.variants.header.primary.backgroundColor};
`;

// Theme-based styled link
const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${({ theme }) => theme.variants.header.primary.color};
`;

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Section width={11 / 12}>
      <H1>
        <StyledLink to="/">{siteTitle || "My Styled Blog"}</StyledLink>
      </H1>
    </Section>
    <Section width={1 / 12}>
      <IconButton icon={<Search />} variant="contrast" />
    </Section>
  </StyledHeader>
);
