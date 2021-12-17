import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Works from '../components/works';
import Studies from '../components/studies';
import { rhythm } from '../utils/typography';

const PostTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: ${rhythm(1)};
  margin-bottom: ${rhythm(1 / 4)};
  margin-top: 0;
  a {
    box-shadow: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MetaInfo = styled.p`
  margin: 0;
`;

const ImgWrapper = styled.div`
  text-align: center;
  & > * {
    border-radius: 100%;
  }
`;

const Home = ({ data, location }) => {
  const { avatar, site, allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges;
  const { author } = site.siteMetadata;
  const avatarPicture = avatar.childImageSharp.fixed;

  return (
    <Layout location={location}>
      <SEO title="Tous les articles" />
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
      <h3>
        <span aria-label="Blog" role="img">
          🗞️
        </span>{' '}
        Blog :
      </h3>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <PostTitle>
                {node.frontmatter.url ? (
                  <a
                    href={node.frontmatter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                ) : (
                  <Link to={node.fields.slug} rel="bookmark">
                    {title}
                  </Link>
                )}
              </PostTitle>
              {node.frontmatter.url && (
                <MetaInfo>
                  <small>
                    <span aria-label="Lien externe" role="img">
                      ↗️
                    </span>{' '}
                    lien externe
                  </small>
                </MetaInfo>
              )}
              <MetaInfo>
                <small>{node.frontmatter.date}</small>
              </MetaInfo>
            </header>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </article>
        );
      })}
      <hr />
      <Studies />
    </Layout>
  );
};

Home.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default Home;

export const query = graphql`
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "📅 DD MMMM YYYY", locale: "fr")
            description
            url
          }
        }
      }
    }
  }
`;
