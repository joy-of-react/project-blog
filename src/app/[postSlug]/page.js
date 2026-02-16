import React from 'react';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { notFound } from 'next/navigation'

import { BLOG_TITLE } from '@/constants';
import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';
import { COMPONENT_MAP } from '@/helpers/component-map';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const { postSlug } = await params;

  const blogData = await loadBlogPost(postSlug);

  if (!blogData) {
    return null;
  }

  const { frontmatter } = blogData;

  return {
    title: `${frontmatter.title} | ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;

  const data = await loadBlogPost(postSlug);
  
  if (!data) {
    notFound();
  }

  const {frontmatter, content} = data;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        {
          <MDXRemote
            source={content}
            components={COMPONENT_MAP}
          />
        }
      </div>
    </article>
  );
}

export default BlogPost;
