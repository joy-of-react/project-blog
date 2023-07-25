import React from 'react';

import { loadBlogPost } from '@/helpers/file-helpers';
import BlogHero from '@/components/BlogHero';

import styles from './layout.module.css';

async function PostSlugLayout({ params, children }) {
  const { frontmatter } = await loadBlogPost(
    params.postSlug
  );

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>{children}</div>
    </article>
  );
}

export default PostSlugLayout;
