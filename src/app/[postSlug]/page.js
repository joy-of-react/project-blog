import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);
  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={blogPost.frontmatter.title} publishedOn={blogPost.frontmatter.publishedOn} />
      <div className={styles.page}>
        <MDXRemote frontmatter={blogPost.frontmatter} source={blogPost.content} />
      </div>
    </article>
  );
}

export default BlogPost;
