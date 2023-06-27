import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

function Button({ className, children, ...delegated }) {
  return (
    <button
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>{children}</span>
    </button>
  );
}

export default Button;
