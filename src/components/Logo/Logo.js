import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.css';

function Logo({ mobileAlignment = 'left' }) {
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
    >
      Bits & Bytes
    </Link>
  );
}

export default Logo;
