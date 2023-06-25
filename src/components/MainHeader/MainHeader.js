import React from 'react';
import Link from 'next/link';

import styles from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.outerWrapper}>
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
      </div>
    </header>
  );
}

export default MainHeader;
