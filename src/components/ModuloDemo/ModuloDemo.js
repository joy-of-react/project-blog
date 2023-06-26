'use client';
import React from 'react';
import clsx from 'clsx';

import { range } from '@/utils';
import Card from '@/components/Card';

import styles from './ModuloDemo.module.css';

const TOTAL_COLS = 14;

function ModuloDemo({ dividend, divisor }) {
  const [numAdded, setNumAdded] = React.useState(0);

  const segmentWidth = divisor * (1 / TOTAL_COLS) * 100;

  return (
    <Card className={styles.wrapper} style={{ '--total-cols': TOTAL_COLS }}>
      <p className={styles.operation}>
        {dividend} % {divisor}
      </p>
      <div className={styles.barWrapper}>
        {range(0, TOTAL_COLS).map((index) => {
          const isWithinDividend = index < dividend;

          return (
            <div
              key={index}
              className={clsx(styles.cell, isWithinDividend && styles.dividend)}
            ></div>
          );
        })}
        <div className={styles.addedSegmentWrapper}>
          {range(numAdded).map((index) => {
            return (
              <div
                key={index}
                className={styles.addedSegment}
                style={{ '--width': segmentWidth + '%' }}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={() => setNumAdded(numAdded - 1)}>
          Remove {divisor}
        </button>
        <button onClick={() => setNumAdded(numAdded + 1)}>Add {divisor}</button>
      </div>
    </Card>
  );
}

export default ModuloDemo;
