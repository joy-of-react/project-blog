import React from 'react';
import clsx from 'clsx';

import styles from './VisuallyHidden.module.css';

function VisuallyHidden({
  as: Element = 'span',
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

export default VisuallyHidden;
