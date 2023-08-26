'use client';

import React from 'react';
import { Sun, Moon } from 'react-feather';
import Cookies from 'js-cookie';

import VisuallyHidden from '@/components/VisuallyHidden';
import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import styles from './Header.module.css';

export function ThemeToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // 1 — Change the state variable, for the sun/moon icon
    setTheme(nextTheme);

    // 2 — Update the cookie, for the user's next visit
    Cookies.set('color-theme', nextTheme, {
      expires: 1000,
    });

    // 3 — Update the DOM to present the new colors
    const root = document.documentElement;
    const colors = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    // 3.1 — Edit the data-attribute, so that we can apply CSS
    // conditionally based on the theme.
    root.setAttribute('data-color-theme', nextTheme);

    // 3.2 — Swap out the actual colors on the <html> tag.
    //       We do this by iterating over each CSS variable
    //       and setting it as a new inline style.
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles.action} onClick={handleClick}>
      {theme === 'light' ? <Moon size='1.5rem' /> : <Sun size='1.5rem' />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}
