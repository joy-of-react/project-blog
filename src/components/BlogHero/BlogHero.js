import React from 'react';
import clsx from 'clsx';

import { getHumanizedDate } from '@/helpers/date-helpers';

import styles from './BlogHero.module.css';

function BlogHero({ title, publishedOn, className, ...delegated }) {
  const humanizedDate = getHumanizedDate(publishedOn);

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{humanizedDate}</time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
