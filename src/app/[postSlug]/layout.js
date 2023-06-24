import React from 'react';

import { loadBlogPost } from '@/helpers/file-helpers';
import Header from '@/components/BlogPostHeader';

import styles from './BlogPostLayout.module.css';

async function BlogPostLayout({
  params,
  children,
}) {
  const { frontmatter } = await loadBlogPost(
    params.postSlug
  );

  const headerImageSrc = `/covers/${params.postSlug}.jpg`;

  return (
    <article className={styles.wrapper}>
      <Header
        className={styles.header}
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
        imageSrc={headerImageSrc}
      />
      <div className={styles.pageWrapper}>
        {children}
      </div>
    </article>
  );
}

export default BlogPostLayout;
