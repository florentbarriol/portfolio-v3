import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import EXTERNAL_LINKS_ATTRS from '../utils/externalLinksAttrs';

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

const WORKS = [
  {
    url: 'http://6play.fr',
    project: '6play.fr',
    client: 'Groupe M6',
    company: 'Linkvalue',
    description:
      "Refonte graphique de la plateforme avec un design system pour intégrer plus de possibilités d'éditoralisation",
    date: '2018 - today',
    occupation: 'Développeur frontend',
    stack: [
      'css3',
      'redux',
      'styled-components',
      'Jest',
      'Cucumber',
      'VueJS',
      'Cypress',
    ],
  },
  {
    url: 'http://www.ebuyclub.com',
    project: 'ebuyclub.com',
    client: 'Plebicom',
    company: 'Plebicom',
    date: '2014 - 2017',
    occupation: 'Développeur FullStack / Référent frontend',
    description: '',
    stack: ['html5', 'css3', 'jQuery', 'java', 'j2ee', 'jsp'],
  },
  {
    url: 'https://shopformiles.flyingblue.com/',
    project: 'Shop For Miles (Flying Blue)',
    client: 'Air France',
    company: 'Plebicom',
    date: '2017',
    occupation: 'Intégrateur/Développeur frontend',
    description: '',
    stack: ['html5', 'css3', 'jQuery', 'java', 'j2ee', 'jsp'],
  },
  {
    url: 'https://www.bonnejournee-by-up.fr/',
    project: 'Bonne journée',
    client: 'Groupe Up',
    company: 'Plebicom',
    date: '2016 - 2017',
    occupation: 'Intégrateur/Développeur frontend',
    description: '',
    stack: ['html5', 'css3', 'jQuery', 'java', 'j2ee', 'jsp'],
  },
];

const STUDIES = [
  {
    degree:
      "Licence Professionnelle Métiers de l'Internet et des Applications Multimédia",
    date: '2012 - 2013',
    school: 'UPMF Grenoble',
  },
  {
    degree: 'Licence Informatique',
    date: '2011 - 2012',
    school: 'UCBL Lyon',
  },
  {
    degree: 'D.U.T Informatique',
    date: '2009 - 2011',
    school: 'UCBL Lyon',
  },
];

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
      <h3>
        <span aria-label="My" role="img">
          ‍👨‍💻
        </span>{' '}
        Quelques projets auquel j'ai participé :{' '}
      </h3>
      <ul>
        {WORKS.map(work => (
          <li key={work.project}>
            <p>
              <a href={work.url} {...EXTERNAL_LINKS_ATTRS}>
                {work.project}
              </a>{' '}
              {work.client ? `, ${work.client}` : ''}
              <br />
              <small>
                {work.occupation} @{work.company}
              </small>
              <br />
              {work.description && (
                <>
                  <small>{work.description}</small>
                  <br />
                </>
              )}
              <small>
                <span aria-label="Date" role="img">
                  📅
                </span>{' '}
                {work.date}
              </small>
              <br />
              <small>
                <span aria-label="Technologies" role="img">
                  ⚒
                </span>{' '}
                #{work.stack.join(' #')}
              </small>
            </p>
          </li>
        ))}
      </ul>
      <hr />
      <h3>
        <span aria-label="Mon parcours" role="img">
          ‍🏫
        </span>{' '}
        Mon parcours scolaire :{' '}
      </h3>
      <ul>
        {STUDIES.map(study => (
          <li key={study.degree}>
            {study.degree}
            <br />
            <small>{study.school}</small>
            <br />
            <small>
              <span aria-label="Date" role="img">
                📅
              </span>{' '}
              {study.date}
            </small>
          </li>
        ))}
      </ul>
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
