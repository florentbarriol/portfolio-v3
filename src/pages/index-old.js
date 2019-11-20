import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Bio from '../components/bio';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const PostTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: ${rhythm(1)};
  margin-bottom: ${rhythm(1 / 4)};
  a {
    box-shadow: none;
  }
`;

const Home = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title="Tous les articles" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <PostTitle>
                <Link to={node.fields.slug} rel="bookmark">
                  {title}
                </Link>
              </PostTitle>
              <small>{node.frontmatter.date}</small>
            </header>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </article>
        );
      })}
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
          }
        }
      }
    }
  }
`;
