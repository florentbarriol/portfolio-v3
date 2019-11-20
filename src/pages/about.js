import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Works from '../components/works';
import Studies from '../components/studies';

const aboutQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

const ImgWrapper = styled.div`
  text-align: center;
  & > * {
    border-radius: 100%;
  }
`;

const About = ({ location }) => {
  const { avatar, site } = useStaticQuery(aboutQuery);
  const { author } = site.siteMetadata;
  const avatarPicture = avatar.childImageSharp.fixed;
  return (
    <Layout location={location}>
      <SEO title="A propos" />

      <ImgWrapper>
        <Img fixed={avatarPicture} alt={author} />
      </ImgWrapper>
      <h1>Bonjour,</h1>
      <p>
        Je suis développeur frontend passionné par l'environnement JavaScript
        (surtout ReactJs et ES6). Amoureux d'intégration à base d'HTML
        sémantique et de css3 avec Flexbox. Que la force du Flex, soit avec vous
        !
      </p>
      <hr />
      <Works />
      <hr />
      <Studies />
      <hr />
      <p>
        <span aria-label="Une question" role="img">
          ☝️
        </span>
        Une question ?<br />
        <span aria-label="Une interrogation" role="img">
          🤔
        </span>
        Une interrogation ?<br /> Vous pouvez passer par les réseaux sociaux, là
        en dessous ⬇️
      </p>
    </Layout>
  );
};

About.propTypes = {
  location: PropTypes.object,
};

export default About;
