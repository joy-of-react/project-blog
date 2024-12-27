"use client";
import React from "react";
import clsx from "clsx";
import Cookies from "js-cookie";
import Link from "next/link";
import { Rss, Sun, Moon } from "react-feather";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";
import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";

function Header({ initialTheme, className, ...delegated }) {
  // states
  const [theme, setTheme] = React.useState(initialTheme);
  // handlers
  const handleClick = () => {
    // toggle the value of the `theme` state-variable
    const newTheme = theme === "light" ? "dark" : "light";
    // update Cookie
    Cookies.set("color-theme", newTheme);
    // update HTML (root) element
    const root = document.documentElement;
    root.setAttribute("data-color-theme", newTheme);
    Object.entries(newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS).forEach(
      ([key, value]) => root.style.setProperty(key, value)
    );
    // update the `theme` state-variable
    setTheme(newTheme);
  };
  // JSX
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <Link href={"/rss.xml"} className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </Link>

        <button className={styles.action} onClick={handleClick}>
          {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
