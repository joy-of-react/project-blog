'use client';
import React from 'react';
import clsx from 'clsx';

import { range } from '@/utils';
import Card from '@/components/Card';

import styles from './ModuloDemo.module.css';

function ModuloDemo({ dividend, divisor }) {
  const [numOfBlocks, setNumOfBlocks] = React.useState(0);

  const numOfBlocksInHolder = Math.min(numOfBlocks, dividend);
  const numOfBlocksInSpillover = Math.max(numOfBlocks - dividend, 0);

  const blockHolderWidth = (dividend / 14) * 100;
  const spilloverWidth = (divisor / 14) * 100;

  const totalCols = dividend + divisor;

  return (
    <Card className={styles.wrapper} style={{ '--total-cols': totalCols }}>
      <p className={styles.operation}>
        {dividend} % {divisor}
      </p>
      <div className={styles.demoArea}>
        <div className={styles.background}>
          {range(totalCols).map((index) => {
            const isAtBreak = index + 1 === dividend;
            return (
              <div
                key={index}
                className={styles.col}
                style={isAtBreak && { opacity: 0 }}
              />
            );
          })}
        </div>
        <div
          className={styles.blockHolder}
          style={{
            width: blockHolderWidth + '%',
            '--block-width': 100 / dividend + '%',
            aspectRatio: `${dividend} / 1`,
          }}
        >
          {range(numOfBlocksInHolder).map((index) => (
            <Block key={index} index={index} />
          ))}
        </div>
        <div
          className={styles.spillover}
          style={{
            width: spilloverWidth + '%',
            '--block-width': 100 / divisor + '%',
          }}
        >
          {range(numOfBlocksInSpillover).map((index) => (
            <Block key={index} index={numOfBlocksInHolder + index} />
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={() => setNumOfBlocks(numOfBlocks - divisor)}>
          Remove {divisor}
        </button>
        <button onClick={() => setNumOfBlocks(numOfBlocks + divisor)}>
          Add {divisor}
        </button>
      </div>
    </Card>
  );
}

function Block({ index }) {
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.block}>{index + 1}</div>
    </div>
  );
}

export default ModuloDemo;
