import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { BLOG_TITLE } from '@/constants';
import { loadBlogPost } from '@/helpers/file-helpers';
import COMPONENT_MAP from '@/helpers/mdx-components';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const blogPostData = await loadBlogPost(
    params.postSlug
  );

  // If we can't locate the blog post, this will be a 404. This
  // means that the returned value from this function won't
  // actually be used. We'll return `null` purely to avoid an error.
  if (!blogPostData) {
    return null;
  }

  const { frontmatter } = blogPostData;

  let metadata = {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }

  if (frontmatter.canonicalUrl) {
    metadata.alternates = {
      canonical: frontmatter.canonicalUrl,
    }
  }

  return metadata;
}

async function BlogPost({ params }) {
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
