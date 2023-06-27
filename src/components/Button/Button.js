import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

function Button({
  className,
  disabled,
  children,
  ...delegated
}) {
  return (
    <button
      className={clsx(
        styles.wrapper,
        className,
        disabled && styles.pseudoDisabled
      )}
      {...delegated}
    >
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>{children}</span>
    </button>
  );
}

export default Button;
