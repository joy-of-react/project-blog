import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';

import HeaderAction from './HeaderAction';

import styles from './MainHeader.module.css';

function MainHeader({ className, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          The Modern Blog
        </Link>

        <div className={styles.actions}>
          <HeaderAction href="/rss">
            <Rss
              size="1.5rem"
              style={{
                // Optical alignment
                transform: 'translate(2px, -2px)',
              }}
            />
          </HeaderAction>
          <HeaderAction>
            <Sun size="1.5rem" />
          </HeaderAction>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
