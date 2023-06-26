import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.css';

function Card({ children, className, ...delegated }) {
  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </div>
  );
}

export default Card;
