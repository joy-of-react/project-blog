import React from 'react';
import clsx from 'clsx';

import styles from './HeaderAction.module.css';

function HeaderAction({
  className,
  children,
  ...delegated
}) {
  return (
    <button
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default HeaderAction;
