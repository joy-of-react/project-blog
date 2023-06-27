'use client';
import React from 'react';
import clsx from 'clsx';

import { range } from '@/utils';
import Card from '@/components/Card';
import Button from '@/components/Button';

import styles from './ModuloDemo.module.css';

function ModuloDemo({ dividend, divisor }) {
  const [numOfBlocks, setNumOfBlocks] = React.useState(0);

  const blocksInHolder = range(
    Math.min(numOfBlocks, dividend)
  );
  const blocksInSpillover =
    numOfBlocks > dividend
      ? range(dividend, numOfBlocks)
      : [];

  const totalCols = dividend + divisor;

  const removeBtnDisabled = numOfBlocks <= 0;
  const addBtnDisabled = numOfBlocks > dividend;

  return (
    <Card
      className={styles.wrapper}
      style={{ '--total-cols': totalCols }}
    >
      <p className={styles.operation}>
        {dividend} % {divisor}
      </p>
      <div className={styles.demoArea}>
        <BlockGroup
          type="holder"
          width={(dividend / totalCols) * 100 + '%'}
          numOfSlots={dividend}
          blocks={blocksInHolder}
        />
        <BlockGroup
          type="spillover"
          width={(divisor / totalCols) * 100 + '%'}
          numOfSlots={divisor}
          blocks={blocksInSpillover}
        />
        {/*
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
        </div> */}
      </div>

      <div className={styles.actions}>
        <Button
          className={clsx(styles.actionButton)}
          disabled={removeBtnDisabled}
          onClick={() => {
            if (removeBtnDisabled) {
              alert(
                "There aren't any blocks to remove yet! Click the “Add” button first."
              );
              return;
            }
            setNumOfBlocks(numOfBlocks - divisor);
          }}
        >
          Remove {divisor}
        </Button>
        <Button
          className={clsx(styles.actionButton)}
          disabled={addBtnDisabled}
          onClick={() => {
            if (addBtnDisabled) {
              alert(
                `We can't fit any more chunks of ${divisor} blocks into the provided number.`
              );
              return;
            }
            setNumOfBlocks(numOfBlocks + divisor);
          }}
        >
          Add {divisor}
        </Button>
      </div>
    </Card>
  );
}

function BlockGroup({
  // "holder" | "spillover"
  type,
  width,
  numOfSlots,
  blocks,
}) {
  return (
    <div
      className={clsx(
        styles.blockGroup,
        type === 'holder'
          ? styles.blockHolder
          : styles.blockSpillover
      )}
      style={{
        width,
        '--block-width': 100 / numOfSlots + '%',
        aspectRatio: `${numOfSlots} / 1`,
      }}
    >
      <div className={styles.background}>
        {range(numOfSlots).map((colIndex) => {
          const isLastHolderColumn =
            colIndex === numOfSlots - 1 &&
            type === 'holder';

          return (
            <div
              key={colIndex}
              className={styles.col}
              style={
                isLastHolderColumn
                  ? { opacity: 0 }
                  : undefined
              }
            />
          );
        })}
      </div>
      {blocks.map((index) => (
        <div key={index} className={styles.blockWrapper}>
          <div className={styles.block}>{index + 1}</div>
        </div>
      ))}
    </div>
  );
}

export default ModuloDemo;
