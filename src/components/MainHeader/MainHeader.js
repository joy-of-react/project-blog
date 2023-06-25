import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './MainHeader.module.css';

function MainHeader({ className, ...delegated }) {
  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          The Modern Blog
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tutorials">
                Tutorials
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
