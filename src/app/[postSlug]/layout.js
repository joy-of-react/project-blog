import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './layout.module.css';

function PostSlugLayout({ children }) {
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title="Example post!"
        publishedOn={new Date()}
      />
      <div className={styles.page}>{children}</div>
    </article>
  );
}

export default PostSlugLayout;
