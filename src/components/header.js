import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rhythm, scale } from '../utils/typography';

const Wrapper = styled.header`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${rhythm(1.5)};

  & > * {
    margin: 0;
  }
  h1 {
    ${scale(1.25)}
    a {
      color: var(--textTitle);
    }
  }
  h3 {
    ${scale(0.5)};
    a {
      color: var(--textLink);
    }
  }
`;

const Nav = styled.nav`
  ${scale(-0.25)}
`;

const LinkStyled = styled(Link)`
  &,
  &:hover {
    text-decoration: none;
  }
`;

const rootPath = `${__PATH_PREFIX__}/`;

const Header = ({ location, title }) => {
  const Component = location.pathname === rootPath ? 'h1' : 'h3';
  return (
    <Wrapper>
      <Component>
        <LinkStyled to="/">{title}</LinkStyled>
      </Component>
      <Nav>
        <a
          href="https://www.twitter.com/florentbarriol"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        {` – `}
        <a
          href="https://www.github.com/florentbarriol"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        {` – `}
        <a
          href="https://www.codepen.io/florentbarriol"
          target="_blank"
          rel="noopener noreferrer"
        >
          codepen
        </a>
      </Nav>
    </Wrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object,
};

export default Header;
