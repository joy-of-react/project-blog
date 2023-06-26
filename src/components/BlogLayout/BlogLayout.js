import React from 'react';

import Hero from './Hero';
import styles from './BlogLayout.module.css';

function BlogLayout({ postSlug, frontmatter, children }) {
  const heroImageSrc = `/covers/${postSlug}.jpg`;

  return (
    <article className={styles.wrapper}>
      <Hero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
        imageSrc={heroImageSrc}
      />
      <div className={styles.page}>{children}</div>
    </article>
  );
}

export default BlogLayout;
