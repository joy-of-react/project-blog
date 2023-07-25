'use client';
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Play, Pause, Square } from 'react-feather';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

function CircularColorsDemo() {
  const id = React.useId();

  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [status, setStatus] = React.useState('playing');

  React.useEffect(() => {
    if (status === 'paused' || status === 'stopped') {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setTimeElapsed(timeElapsed + 1);
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [status, timeElapsed]);

  const selectedColorIndex = timeElapsed % COLORS.length;

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = index === selectedColorIndex;

          const key = `${id}-${index}`;

          return (
            <li className={styles.color} key={key}>
              {isSelected && (
                <motion.div
                  layoutId={`${id}-selected-box`}
                  className={styles.selectedColorOutline}
                  transition={{
                    type: 'spring',
                    stiffness: 600,
                    damping: 60,
                  }}
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              />
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button
            onClick={() => {
              setStatus(
                status === 'playing' ? 'paused' : 'playing'
              );
            }}
          >
            {status === 'playing' ? <Pause /> : <Play />}
            <VisuallyHidden>
              {status === 'playing' ? 'Pause' : 'Play'}
            </VisuallyHidden>
          </button>
          <button
            onClick={() => {
              setStatus('stopped');
              setTimeElapsed(0);
            }}
          >
            <Square />
            <VisuallyHidden>Stop</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
