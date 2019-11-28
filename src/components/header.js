/* global __PATH_PREFIX__:true */
/* eslint no-undef: "error" */
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rhythm, scale } from '../utils/typography';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 ${rhythm(1.5)};

  h1 {
    ${scale(0.75)};
    margin: 0;
  }
  h3 {
    font-family: Montserrat, sans-serif;
    margin-top: 0;
    margin-bottom: 0;
    height: ${rhythm(1.5)};
    line-height: ${rhythm(1.5)};
    & a {
      color: var(--textLink);
    }
  }
`;

const LinkStyled = styled(Link)`
  & {
    color: var(--textLink);
  }
  &,
  &:hover {
    box-shadow: none;
    text-decoration: none;
    /* color: inherit; */
  }
`;

const headerQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const rootPath = `${__PATH_PREFIX__}/`;

const Header = ({ location }) => {
  const { site } = useStaticQuery(headerQuery);
  const TitleComponent = (location || {}).pathname === rootPath ? 'h1' : 'h3';
  return (
    <Wrapper>
      <TitleComponent>
        <LinkStyled to="/">{site.siteMetadata.title}</LinkStyled>
      </TitleComponent>
    </Wrapper>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
