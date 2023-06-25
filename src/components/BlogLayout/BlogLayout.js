import React from 'react';

import MainHeader from '@/components/MainHeader';

import Hero from './Hero';
import styles from './BlogLayout.module.css';

function BlogLayout({ postSlug, frontmatter, children }) {
  const heroImageSrc = `/covers/${postSlug}.jpg`;

  return (
    <>
      <MainHeader className={styles.mainHeader} />
      <main>
        <article className={styles.wrapper}>
          <Hero
            title={frontmatter.title}
            publishedOn={frontmatter.publishedOn}
            imageSrc={heroImageSrc}
          />
          <div className={styles.pageWrapper}>{children}</div>
        </article>
      </main>
    </>
  );
}

export default BlogLayout;
