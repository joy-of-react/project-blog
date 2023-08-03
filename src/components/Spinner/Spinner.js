import React from 'react';
import { Loader } from 'react-feather';

import styles from './Spinner.module.css';

const Spinner = ({ color, size }) => {
  return (
    <div className={styles.wrapper}>
      <Loader color={color} size={size} />
    </div>
  );
};

export default Spinner;
