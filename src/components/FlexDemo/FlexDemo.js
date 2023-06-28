'use client';
import React from 'react';

import Card from '@/components/Card';
import SliderControl from '@/components/SliderControl';
import styles from './FlexDemo.module.css';

function FlexDemo() {
  const [flexDirection, setFlexDirection] =
    React.useState('row');
  const [justifyContent, setJustifyContent] =
    React.useState('flex-start');
  const [alignItems, setAlignItems] =
    React.useState('stretch');

  return (
    <Card className={styles.wrapper}>
      <div className={styles.controls}>
        <SliderControl />
      </div>
    </Card>
  );
}

export default FlexDemo;
