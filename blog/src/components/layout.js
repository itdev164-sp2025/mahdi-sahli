/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { Gray } from "./themes/Gray";
import { Header } from "../components/Header";

import "./layout.css";
import { Gray } from "./themes/Gray";

const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`;

const Footer = styled.footer`
  margin-top: var(--space-5);
  font-size: var(--font-sm);
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={Gray}>
      <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Content>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()} &middot; Built with{' '}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </Footer>
        </Content>
      </>
    </ThemeProvider>
  );
};

export default Layout;
