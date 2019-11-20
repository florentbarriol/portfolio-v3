import React from 'react';
import { STUDIES } from '../data.static';

export default () => (
  <>
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
  </>
);
