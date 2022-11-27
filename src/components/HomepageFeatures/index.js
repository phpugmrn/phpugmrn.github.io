import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Wissen teilen',
    description: (
      <>
          Egal ob erfahrener Entwickler, Rookie, Student oder Freiberufler, jeder ist herzlich dazu eingeladen,
          sein Wissen rund um PHP und die Softwareentwicklung aufzubauen, zu erweitern und mit anderen zu teilen.
      </>
    ),
  },
  {
    title: 'Meetups',
    description: (
      <>
          Wir organisieren seit 2015 regelmäßig Meetups in der <a href="https://www.m-r-n.com">Metropolregion Rhein-Neckar</a>. Lust mehr über PHP zu erfahren?
        Dann komm gerne zu unserem Meetups. Wir freuen uns auf dich!
      </>
    ),
  },
  {
    title: 'Hackathons',
    description: (
      <>
        Zusätzlich zu unseren <a href="https://www.meetup.com/de-DE/PHPUG-Rhein-Neckar/">Meetups</a> möchten wir gemeinsam mit euch das machen was uns allen Spaß macht: Entwickeln.<br />
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
