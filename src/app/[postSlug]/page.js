import React from 'react';
import { MDXRemote } from 'next-mdx-remote-client/rsc';

import { BLOG_TITLE } from '@/constants';
import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const { postSlug } = await params;

  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: `${frontmatter.title} | ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;

  const { frontmatter, content } = await loadBlogPost(postSlug);

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
            components={{
              pre: CodeSnippet,
            }}
          />
        }
      </div>
    </article>
  );
}

export default BlogPost;
