import React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';

import styles from './BlogPostHeader.module.css';

function BlogPostHeader({
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
      style={{
        '--image': `url(${imageSrc})`,
      }}
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

export default BlogPostHeader;
