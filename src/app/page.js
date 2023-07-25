import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {
  const files = await getBlogPostList('/content');

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {files.map((article) => (
        <BlogSummaryCard
          key={article.slug}
          slug={article.slug}
          title={article.title}
          publishedOn={article.publishedOn}
          abstract={article.abstract}
        />
      ))}
    </div>
  );
}

export default Home;
