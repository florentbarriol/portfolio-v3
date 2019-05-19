import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 80%;

  & > * {
    margin-right: ${rhythm(1 / 2)};
  }
  & > p {
    margin-bottom: 0;
  }
`;

const ImagePortrait = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "portrait.jpeg" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className={className}
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Florent Barriol"
      />
    )}
  />
);

const ImagePortraitStyled = styled(ImagePortrait)`
  border-radius: 50%;
`;

const Bio = ({ className }) => (
  <Wrapper className={className}>
    <ImagePortraitStyled />
    <p>
      Blog personnel de{' '}
      <a href="https://www.twitter.com/florentbarriol">Florent Barriol</a>
      <br />I make things with pixels !
    </p>
  </Wrapper>
);

export default Bio;
