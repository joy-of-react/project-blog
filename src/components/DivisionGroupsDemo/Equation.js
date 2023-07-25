import React from 'react';

import styles from './Equation.module.css';

function Equation({ dividend, divisor, remainder }) {
  return (
    <p className={styles.wrapper}>
      {dividend} ÷ {divisor} ={' '}
      {Math.floor(dividend / divisor)}
      {typeof remainder === 'number' && remainder > 0 && (
        <span className={styles.remainderPhrase}>
          {' '}
          (and{' '}
          <span className={styles.remainderDigit}>
            {remainder}
          </span>{' '}
          leftover)
        </span>
      )}
    </p>
  );
}

export default Equation;
