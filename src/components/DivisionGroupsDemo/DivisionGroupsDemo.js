'use client';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import clsx from 'clsx';

import { range } from '@/utils';
import Card from '@/components/Card';
import SliderControl from '@/components/SliderControl';

import styles from './DivisionGroupsDemo.module.css';

function DivisionGroupsDemo({
  dividend = 12,
  initialDivisor = 1,
  includeRemainderArea,
}) {
  const id = React.useId();

  const [divisor, setDivisor] =
    React.useState(initialDivisor);

  const numPerGroup = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;

  const gridStructure =
    divisor < 4
      ? { gridTemplateColumns: `repeat(${divisor}, 1fr)` }
      : {
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
        };

  return (
    <Card as="section" className={styles.wrapper}>
      <header className={styles.header}>
        <SliderControl
          label="Number of Groups"
          className={styles.slider}
          step={1}
          min={1}
          max={4}
          value={divisor}
          onChange={(ev) =>
            setDivisor(Number(ev.target.value))
          }
        />
      </header>
      <LayoutGroup>
        <div className={styles.demoWrapper}>
          <div
            className={clsx(
              styles.demoArea,
              styles.background
            )}
            style={gridStructure}
          >
            {range(divisor).map((groupIndex) => (
              <div
                key={groupIndex}
                className={styles.groupBackground}
              />
            ))}
          </div>
          <div
            className={clsx(styles.demoArea)}
            style={gridStructure}
          >
            {range(divisor).map((groupIndex) => (
              <motion.div
                layout
                key={groupIndex}
                className={styles.group}
              >
                {range(numPerGroup).map((index) => {
                  const uniqueId = `${id}-${
                    groupIndex * numPerGroup + index
                  }`;

                  return (
                    <motion.div
                      layout={true}
                      key={uniqueId}
                      layoutId={uniqueId}
                      className={styles.item}
                    />
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
        {includeRemainderArea && (
          <div className={styles.remainderArea}>
            <p className={styles.remainderHeading}>
              Remainder Area
            </p>
            {range(remainder)
              .reverse()
              .map((index) => {
                const numAccountedFor =
                  Math.floor(dividend / divisor) * divisor;
                const uniqueId = `${id}-${
                  index + numAccountedFor
                }`;

                return (
                  <motion.div
                    layout={true}
                    key={uniqueId}
                    layoutId={uniqueId}
                    className={styles.item}
                  />
                );
              })}
          </div>
        )}
        <p className={styles.equation}>
          {dividend} ÷ {divisor} ={' '}
          {Math.floor(dividend / divisor)}
          {includeRemainderArea && remainder > 0 && (
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
      </LayoutGroup>
    </Card>
  );
}

export default DivisionGroupsDemo;
