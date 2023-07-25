import React from 'react';
import clsx from 'clsx';
import { Rss, Sun } from 'react-feather';

import Logo from '@/components/Logo';
import DarkLightToggle from '@/components/DarkLightToggle';
import VisuallyHidden from '@/components/VisuallyHidden';

import HeaderAction from './HeaderAction';
import styles from './Header.module.css';

function Header({ theme, className, ...delegated }) {
  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
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
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </HeaderAction>
        <HeaderAction as={DarkLightToggle} theme={theme}>
          <Sun size="1.5rem" />
          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </HeaderAction>
      </div>
    </header>
  );
}

export default Header;
