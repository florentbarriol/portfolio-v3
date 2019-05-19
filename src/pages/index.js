import React from 'react';
import styled from 'styled-components';
import _get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Bio from '../components/bio';
import SEO from '../components/seo';
import Footer from '../components/footer';
import { rhythm, scale } from '../utils/typography';

const PostTitle = styled.h3`
  ${scale(1)};
  margin: ${rhythm(2)} 0 ${rhythm(1 / 4)};
  a {
    text-decoration: none;
  }
`;

const PostDate = styled.div`
  ${scale(-0.25)}
`;

export default ({ data, location }) => {
  const siteTitle = _get(data, 'site.siteMetadata.title', '');

  return (
    <Layout title={siteTitle} location={location}>
      <SEO />
      <aside>
        <Bio />
      </aside>
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <header>
              <PostTitle>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </PostTitle>
              <PostDate>{node.frontmatter.date}</PostDate>
            </header>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </main>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD, MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
