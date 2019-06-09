import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import GIF from '../../content/assets/turkey.gif';

const Wrapper = styled.div`
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Page non trouvée: Aïe" />
      <Wrapper>
        <h1>
          <span aria-label="Aïe" role="img">
            😱
          </span>{' '}
          Aïe...
        </h1>
        <p>
          Cette page n'existe pas, c'est la tristesse...
          <br />
          Mais vous aurez au moins vu ça :
          <br />
          <br />
          <img src={GIF} alt="The GIF" />
        </p>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
