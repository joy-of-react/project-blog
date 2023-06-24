import React from 'react';
import { Code } from 'bright';

import styles from './CodeSnippet.module.css';

function CodeSnippet({ language, children }) {
  return (
    <Code
      lang={language}
      theme="material-ocean"
      className={styles.wrapper}
    >
      {children}
    </Code>
  );
}

export default CodeSnippet;
