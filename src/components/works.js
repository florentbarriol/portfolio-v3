import React from 'react';
import EXTERNAL_LINKS_ATTRS from '../utils/externalLinksAttrs';
import { WORKS } from '../data.static';

export default () => (
  <>
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
  </>
);
