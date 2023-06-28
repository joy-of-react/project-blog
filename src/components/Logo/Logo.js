import React from 'react';
import Link from 'next/link';

import { BLOG_TITLE } from '@/constants';

import styles from './Logo.module.css';

function Logo({ mobileAlignment = 'left' }) {
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
    >
      {BLOG_TITLE}
    </Link>
  );
}

export default Logo;
