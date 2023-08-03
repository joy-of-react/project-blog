import React from 'react';

import Spinner from '@/components/Spinner';

import styles from './postSlug.module.css';

async function BlogPostLoading() {
  return (
    <div
      className={styles.loadingWrapper}
      style={{ opacity: 0 }}
    >
      <Spinner />
    </div>
  );
}
export default BlogPostLoading;
