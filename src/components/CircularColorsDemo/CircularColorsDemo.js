'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'motion/react';
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
  const [status, setStatus] = React.useState('off');

  const layoutId = React.useId();

  const selectedColor = COLORS[timeElapsed % COLORS.length];

  React.useEffect(() => {
    if (status === 'off') {
      return;
    }
    const incrementTime = () => setTimeElapsed((t) => ++t);
    const interval = window.setInterval(incrementTime, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [status]);

  return (
    <Card as='section' className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  layoutId={layoutId}
                  initial={{ zIndex: 2 }}
                  className={styles.selectedColorOutline}
                />
              )}
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
          {status === 'on' ? (
            <IconButton
              handler={() => {
                setStatus('off');
              }}
              icon={<Pause />}
              label='Pause'
            />
          ) : (
            <IconButton
              handler={() => setStatus('on')}
              icon={<Play />}
              label='Play'
            />
          )}

          <IconButton
            handler={() => {
              setStatus('off');
              setTimeElapsed(0);
            }}
            icon={<RotateCcw />}
            label='Reset'
          />
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;

function IconButton({ handler, icon, label }) {
  return (
    <button onClick={handler}>
      {icon}
      <VisuallyHidden>{label}</VisuallyHidden>
    </button>
  );
}
