import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
  }
`;

const Pagination = ({ next, previous }) => (
  <nav>
    <Wrapper>
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="previous">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </Wrapper>
  </nav>
);

Pagination.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default Pagination;
