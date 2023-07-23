'use client';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import clsx from 'clsx';

import { range } from '@/utils';
import Card from '@/components/Card';
import SliderControl from '@/components/SliderControl';

import styles from './RemainderDemo.module.css';

function RemainderDemo() {
  const id = React.useId();

  const [timeElapsed, setTimeElapsed] = React.useState(0);

  const remainder = timeElapsed % 3;

  const numsInHoldingArea = range(
    timeElapsed - remainder,
    timeElapsed
  );
  const numsInFirstGroup = range(
    0,
    timeElapsed - remainder,
    3
  );
  const numsInSecondGroup = range(
    1,
    timeElapsed - remainder,
    3
  );
  const numsInThirdGroup = range(
    2,
    timeElapsed - remainder,
    3
  );

  return (
    <Card as="section" className={styles.wrapper}>
      <header className={styles.header}>
        <SliderControl
          label="timeElapsed"
          className={styles.slider}
          step={1}
          min={1}
          max={12}
          value={timeElapsed}
          onChange={(ev) =>
            setTimeElapsed(Number(ev.target.value))
          }
        />
      </header>
      <LayoutGroup>
        <div className={styles.demoWrapper}>
          <div
            className={styles.demoArea}
            style={{
              '--num-of-groups': 3,
            }}
          >
            <div
              className={clsx(
                styles.group,
                styles.holdingArea
              )}
            >
              {numsInHoldingArea.map((num) => (
                <motion.div
                  key={`${id}-${num}`}
                  layoutId={`${id}-${num}`}
                  className={styles.item}
                />
              ))}
            </div>
            <div className={clsx(styles.group)}>
              {numsInFirstGroup.map((num) => (
                <motion.div
                  key={`${id}-${num}`}
                  layoutId={`${id}-${num}`}
                  className={styles.item}
                />
              ))}
            </div>
            <div className={clsx(styles.group)}>
              {numsInSecondGroup.map((num) => (
                <motion.div
                  key={`${id}-${num}`}
                  layoutId={`${id}-${num}`}
                  className={styles.item}
                />
              ))}
            </div>
            <div className={clsx(styles.group)}>
              {numsInThirdGroup.map((num) => (
                <motion.div
                  key={`${id}-${num}`}
                  layoutId={`${id}-${num}`}
                  className={styles.item}
                />
              ))}
            </div>
          </div>
        </div>
      </LayoutGroup>
    </Card>
  );
}

export default RemainderDemo;
