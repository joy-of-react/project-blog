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
          const colNum = index + 1;

          return (
            <div
              key={colNum}
              className={clsx(
                styles.col,
                colNum === dividend && styles.colLimit
              )}
            >
              <div className={styles.colLabel}>{colNum}</div>
            </div>
          );
        })}

        <div
          className={styles.blocksWrapper}
          style={{
            '--block-width': `calc(${100 / TOTAL_COLS}% - 2px)`,
          }}
        >
          {range(0, numAdded * divisor).map((index) => {
            const colNum = index + 1;

            return (
              <div key={index} className={styles.block}>
                {colNum}
              </div>
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
