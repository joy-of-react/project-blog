import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constants';

import styles from './homepage.module.css';

export async function generateMetadata() {
  return {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  };
}

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map(({ slug, title, abstract, publishedOn }) => {
        return (
          <BlogSummaryCard
            key={slug}
            slug={slug}
            title={title}
            abstract={abstract}
            publishedOn={publishedOn}
          />
        );
      })}
    </div>
  );
}

export default Home;
