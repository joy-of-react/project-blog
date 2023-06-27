import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import Card from '@/components/Card';
import styles from './Homepage.module.css';

function Homepage({ articles }) {
  return (
    <div className={styles.wrapper}>
      <h1>Latest Content:</h1>
      {articles.map((article) => (
        <BlogCard
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

function BlogCard({ slug, title, publishedOn, abstract }) {
  const href = `/${slug}`;
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );

  return (
    <Card className={styles.post}>
      <Link href={href} className={styles.postTitle}>
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p>
        {abstract}{' '}
        <Link
          href={href}
          className={styles.continueReadingLink}
        >
          Continue reading{' '}
          <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  );
}

export default Homepage;
