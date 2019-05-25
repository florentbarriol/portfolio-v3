import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Pagination from '../components/pagination';
import { scale, rhythm } from '../utils/typography';

const Aside = styled.aside`
  margin-top: auto;
`;

const AsideTitle = styled.h3`
  a {
    color: var(--textLink);
    box-shadow: none;
  }
`;

const PostDate = styled.p`
  ${scale(-1 / 5)};
  margin: ${rhythm(-1)} 0 ${rhythm(1)};
`;

const HR = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        slug={post.fields.slug}
      />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <PostDate>{post.frontmatter.date}</PostDate>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      {/* TODO : ajouter un lien vers github pour faire une issue de correction */}
      <HR />
      <Aside>
        <AsideTitle>
          <Link to="/">{siteTitle}</Link>
        </AsideTitle>
        <Bio />
        <Pagination next={next} previous={previous} />
      </Aside>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "📅 DD MMMM YYYY", locale: "fr")
        description
      }
      fields {
        slug
      }
    }
  }
`;
