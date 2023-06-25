import React from 'react';
import clsx from 'clsx';

import styles from './Paper.module.css';

function Paper({
  as: Element = 'div',
  className,
  children,
  ...delegated
}) {
  return (
    <Element
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default Paper;
