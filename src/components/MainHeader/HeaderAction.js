import React from 'react';
import clsx from 'clsx';

import styles from './HeaderAction.module.css';

function HeaderAction({
  href,
  className,
  children,
  ...delegated
}) {
  const Element =
    typeof href === 'string' ? 'a' : 'button';

  return (
    <Element
      href={href}
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default HeaderAction;
