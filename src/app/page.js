import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {/* TODO: Iterate over the data read from the file system! */}
      <BlogSummaryCard
        slug="example"
        title="Hello world!"
        publishedOn={new Date()}
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
      />
    </div>
  );
}

export default Home;
