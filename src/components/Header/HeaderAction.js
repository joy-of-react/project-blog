import React from 'react';
import clsx from 'clsx';

import styles from './HeaderAction.module.css';

function HeaderAction({
  as: Element = 'button',
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

export default HeaderAction;
