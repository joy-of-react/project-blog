"use client";
import React from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";
import Cookies from "js-cookie";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";
import Link from "next/link";

function Header({ theme, className, ...delegated }) {
  const [colorTheme, setColorTheme] = React.useState(theme);

  function handleMode() {
    const newTheme = colorTheme === "light" ? "dark" : "light";

    setColorTheme(newTheme);

    Cookies.set("color-theme", newTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    const colors = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

    root.setAttribute("data-color-mode", newTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <Link href="/rss.xml" className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </Link>
        <button className={styles.action} onClick={handleMode}>
          {colorTheme === "light" ? (
            <Sun size="1.5rem" />
          ) : (
            <Moon size="1.5rem" />
          )}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
