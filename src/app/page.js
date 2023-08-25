import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPosts.map((blogPost) => {
        return <BlogSummaryCard key={blogPost.slug} {...blogPost} />;
      })}
    </div>
  );
}

export default Home;
