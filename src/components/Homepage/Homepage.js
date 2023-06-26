import React from 'react';

import styles from './Homepage.module.css';

function Homepage({ articles }) {
  return (
    <div className={styles.wrapper}>
      <h1>Latest Content:</h1>
      {articles.map((article) => article.title)}
    </div>
  );
}

export default Homepage;
