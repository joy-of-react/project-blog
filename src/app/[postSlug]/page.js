import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';
import COMPONENT_MAP from '@/helpers/mdx-components';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

console.log('access postSlug file')

async function BlogPost({ params }) {
  console.log('Render Blog Post', params.postSlug)
  const blogPostData = await loadBlogPost(
    params.postSlug
  );

  // If there is no blog post with the slug taken from the route
  // params, render a 404 page instead.
  if (!blogPostData) {
    notFound();
  }

  const { frontmatter, content } = blogPostData;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={COMPONENT_MAP}
        />
      </div>
    </article>
  );
}

export default BlogPost;
