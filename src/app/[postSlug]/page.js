import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const { frontmatter, content } =
    await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
