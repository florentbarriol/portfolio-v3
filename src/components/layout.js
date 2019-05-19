import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { GlobalStyles } from '../utils/globalStyles';
import Header from './header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rhythm(24)};
  margin: 0 auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  min-height: 100vh;
`;

const Layout = ({ children, location, title }) => (
  <Wrapper>
    <GlobalStyles />
    <Header location={location} title={title} />
    {children}
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
