import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const Footer = styled.footer`
  margin: auto 0 0;
  padding: ${rhythm(1)} 0 0;
`;

export default () => (
  <Footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> and ❤️
  </Footer>
);
