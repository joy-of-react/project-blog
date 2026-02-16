'use client';

import React from 'react';
import clsx from 'clsx';
import { Play, Pause, RotateCcw } from 'react-feather';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

function CircularColorsDemo() {
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [interval, setInterval] = React.useState(null);

  const selectedColor = COLORS[timeElapsed % COLORS.length];

  // time interval-related methods & handlers
  const incrementTime = () => setTimeElapsed((t) => ++t);

  const handleStartInterval = () => {
    const int = window.setInterval(incrementTime, 1000);
    setInterval(int);
  };
  const handleStopInterval = (int) => {
    setInterval(null);
    window.clearInterval(int);
  };
  const handleReset = () => {
    handleStopInterval(interval);
    setTimeElapsed(0);
  };

  React.useEffect(() => {
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <Card as='section' className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && <div className={styles.selectedColorOutline} />}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox,
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
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
          {interval ? (
            <button
              onClick={() => {
                handleStopInterval(interval);
              }}
            >
              <Pause />
              <VisuallyHidden>Pause</VisuallyHidden>
            </button>
          ) : (
            <button
              onClick={() => {
                handleStartInterval();
              }}
            >
              <Play />
              <VisuallyHidden>Play</VisuallyHidden>
            </button>
          )}

          <button onClick={() => handleReset()}>
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
