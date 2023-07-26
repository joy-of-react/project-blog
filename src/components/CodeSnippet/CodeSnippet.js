import React from 'react';
import { Code } from 'bright';

import theme from './theme';
import styles from './CodeSnippet.module.css';

function CodeSnippet(props) {
  return (
    <Code
      {...props}
      theme={theme}
      className={styles.wrapper}
    />
  );
}

export default CodeSnippet;
