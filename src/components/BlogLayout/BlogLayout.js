import React from 'react';

import Hero from './Hero';
import styles from './BlogLayout.module.css';

function BlogLayout({ frontmatter, children }) {
  return (
    <article className={styles.wrapper}>
      <Hero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>{children}</div>
    </article>
  );
}

export default BlogLayout;
