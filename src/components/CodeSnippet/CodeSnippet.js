import React from 'react';
import { Code } from 'bright';

import theme from './theme';
import styles from './CodeSnippet.module.css';

function CodeSnippet({ language, children }) {
  return (
    <Code
      lang={language}
      theme={theme}
      className={styles.wrapper}
    >
      {children}
    </Code>
  );
}

export default CodeSnippet;
