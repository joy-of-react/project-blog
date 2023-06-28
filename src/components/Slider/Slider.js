import React from 'react';
import clsx from 'clsx';

import styles from './Slider.module.css';

function Slider({ className, ...delegated }) {
  return (
    <input
      type="range"
      className={clsx(styles.slider, className)}
      {...delegated}
    />
  );
}

export default Slider;
