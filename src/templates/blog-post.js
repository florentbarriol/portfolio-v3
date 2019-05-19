import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Pagination from '../components/pagination';
import { scale, rhythm } from '../utils/typography';

const Aside = styled.aside`
  margin-top: auto;
  padding-top: ${rhythm(3)};
`;

const AsideTitle = styled.h3`
  margin: 0%;
  a {
    color: var(--textLink);
    text-decoration: none;
  }
`;

const PostTitle = styled.h1`
  ${scale(1.5)};
`;

const PostDate = styled.p`
  ${scale(-0.25)};
  margin: ${rhythm(-4 / 5)} 0 ${rhythm(1)};
`;

const BioStyled = styled(Bio)`
  margin: ${rhythm(0.5)} 0 ${rhythm(3)};
`;

export default ({ data, location, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = _get(data, 'site.siteMetadata.title', '');
  const { next, previous } = pageContext;
  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        slug={post.fields.slug}
      />
      <article>
        <header>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <Aside>
        <AsideTitle>
          <Link to="/">{siteTitle}</Link>
        </AsideTitle>
        <BioStyled />
        <Pagination next={next} previous={previous} />
      </Aside>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD, MMMM YYYY")
      }
      fields {
        slug
      }
    }
  }
`;
