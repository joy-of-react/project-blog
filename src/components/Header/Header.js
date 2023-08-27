'use client';
import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';
import {useRouter} from 'next/navigation'

import {
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from '@/constants';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './Header.module.css';

function Header({
  initialTheme,
  className,
  ...delegated
}) {
  const router = useRouter();

  const [theme, setTheme] =
    React.useState(initialTheme);

  function handleToggleTheme() {
    const newTheme =
      theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    });

    router.refresh();
  }

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        {/*
          Turn the <button> into an <a>, so we can link
          to the new `/rss.xml` route.
        */}
        <a href="/rss.xml" className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>
            View RSS feed
          </VisuallyHidden>
        </a>
        <button
          className={styles.action}
          onClick={handleToggleTheme}
        >
          {theme === 'light' ? (
            <Sun size="1.5rem" />
          ) : (
            <Moon size="1.5rem" />
          )}
          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
