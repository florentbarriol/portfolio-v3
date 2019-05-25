import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { rhythm } from '../utils/typography';

const bioQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fixed(width: 56, height: 56) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(2.5)};

  & > * {
    margin-bottom: 0;
  }
  & > *:first-child {
    flex: 0 0 56px;
    border-radius: 100%;
    margin-right: ${rhythm(1 / 2)};
  }
`;

const Bio = () => {
  const { avatar, site } = useStaticQuery(bioQuery);
  const { author, social } = site.siteMetadata;
  const avatarPicture = avatar.childImageSharp.fixed;
  return (
    <Wrapper>
      <Img fixed={avatarPicture} alt={author} />
      <p>
        Blog personnel de <a href={social.twitter}>{author}</a>
        <br />
        Je fais des trucs avec des pixels.
      </p>
    </Wrapper>
  );
};

export default Bio;
