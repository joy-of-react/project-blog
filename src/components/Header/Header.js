import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';

import Logo from '@/components/Logo';

import HeaderAction from './HeaderAction';
import styles from './Header.module.css';

function Header({ className, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

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
    </header>
  );
}

export default Header;
