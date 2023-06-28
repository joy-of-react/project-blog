'use client';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import clsx from 'clsx';

import { range } from '@/utils';
import Card from '@/components/Card';
import SliderControl from '@/components/SliderControl';

import styles from './DivisionGroupsDemo.module.css';

function DivisionGroupsDemo({ dividend = 12 }) {
  const [divisor, setDivisor] = React.useState(1);

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
          {/* <div
            className={clsx(
              styles.demoArea,
              styles.background
            )}
            style={gridStructure}
          >
            {range(divisor).map((groupIndex) => (
              <div
                layout
                key={groupIndex}
                className={styles.groupBackground}
              />
            ))}
          </div> */}
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
                  const originalIndex =
                    groupIndex * numPerGroup + index;

                  return (
                    <motion.div
                      key={index}
                      layout
                      layoutId={originalIndex}
                      className={styles.item}
                    />
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
        {/* <div className={styles.remainderArea}>
          {range(remainder).map((index) => {
            const numAccountedFor =
              Math.floor(dividend / divisor) * divisor;
            const originalIndex = index + numAccountedFor;

            return (
              <motion.div
                key={index}
                layout
                layoutId={originalIndex}
                className={styles.item}
              />
            );
          })}
        </div> */}
        <p className={styles.equation}>
          {dividend} ÷ {divisor}
        </p>
      </LayoutGroup>
    </Card>
  );
}

export default DivisionGroupsDemo;
