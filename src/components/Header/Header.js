'use client';

import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';
import Cookies from 'js-cookie'

import { DARK_TOKENS, LIGHT_TOKENS, THEME_COOKIE_NAME } from '@/constants';
import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './Header.module.css';

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleThemeToggle() {
    const htmlEl = document.documentElement;

    let newTheme;
    let newThemeTokens;

    if (theme === 'light') {
      newTheme = 'dark';
      newThemeTokens = DARK_TOKENS;
    } else {
      newTheme = 'light';
      newThemeTokens = LIGHT_TOKENS;
    }

    // 1. set component state (which is tied to the icon)
    setTheme(newTheme);
    // 2. set data-color-theme
    htmlEl.setAttribute('data-color-theme', newTheme);
    // 3. set cookie
    Cookies.set(THEME_COOKIE_NAME, newTheme, { expires: 30 });
    // 4. change styles
    Object.keys(newThemeTokens).forEach((key) => {
      htmlEl.style.setProperty(key, newThemeTokens[key]);
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size='1.5rem'
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button className={styles.action} onClick={handleThemeToggle}>
          {theme === 'dark' ? <Sun size='1.5rem' /> : <Moon size='1.5rem' />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
