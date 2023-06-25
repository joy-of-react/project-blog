import React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';

import styles from './Hero.module.css';

function Hero({
  title,
  publishedOn,
  imageSrc,
  className,
  ...delegated
}) {
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on{' '}
          <time dateTime={publishedOn}>
            {humanizedDate}
          </time>
        </p>
      </div>
    </header>
  );
}

export default Hero;
