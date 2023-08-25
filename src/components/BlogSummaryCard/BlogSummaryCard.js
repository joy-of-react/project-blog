import React from 'react';
import Link from 'next/link';

import Card from '@/components/Card';
import { getHumanizedDate } from '@/helpers/date-helpers';

import styles from './BlogSummaryCard.module.css';

function BlogSummaryCard({ slug, title, publishedOn, abstract }) {
  const href = `/${slug}`;
  const humanizedDate = getHumanizedDate(publishedOn);

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p>
        {abstract}{' '}
        <Link href={href} className={styles.continueReadingLink}>
          Continue reading <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  );
}

export default BlogSummaryCard;
