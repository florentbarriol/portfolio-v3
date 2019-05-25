import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import EXTERNAL_LINKS_ATTRS from '../utils/externalLinksAttrs';

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          github
          codepen
        }
      }
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto 0 0;
  padding: ${rhythm(3.5)} 0 0;
  ${scale(-0.25)}
`;

export default () => {
  const { site } = useStaticQuery(footerQuery);
  const { twitter, github, codepen } = site.siteMetadata.social;
  return (
    <Footer>
      <div>
        <span role="img" aria-label="Copyright">
          ️©️
        </span>{' '}
        {new Date().getFullYear()}
        {` - `}
        Créé avec ♥️ et beaucoup de 📻
      </div>
      <div>
        <a href={twitter} {...EXTERNAL_LINKS_ATTRS}>
          twitter
        </a>
        {` - `}
        <a href={github} {...EXTERNAL_LINKS_ATTRS}>
          github
        </a>
        {` - `}
        <a href={codepen} {...EXTERNAL_LINKS_ATTRS}>
          codepen
        </a>
      </div>
    </Footer>
  );
};
