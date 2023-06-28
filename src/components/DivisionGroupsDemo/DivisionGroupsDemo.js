'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { range } from '@/utils';
import Card from '@/components/Card';

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
      <p className={styles.equation}>
        {dividend} ÷ {divisor}
      </p>
      <div
        className={styles.demoArea}
        style={gridStructure}
      >
        {range(divisor).map((groupIndex) => (
          <div key={groupIndex} className={styles.group}>
            {range(numPerGroup).map(
              (itemIndexWithinGroup) => {
                const actualIndex =
                  groupIndex * numPerGroup +
                  itemIndexWithinGroup;

                return (
                  <div
                    key={actualIndex}
                    className={styles.item}
                  />
                );
              }
            )}
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <input
          type="range"
          step={1}
          min={1}
          max={4}
          value={divisor}
          onChange={(ev) =>
            setDivisor(Number(ev.target.value))
          }
        />
      </div>
    </Card>
  );
}

export default DivisionGroupsDemo;
