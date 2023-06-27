import React from 'react';

import styles from './DecorativeSwoops.module.css';

function DecorativeSwoops() {
  return (
    <div className={styles.wrapper}>
      <Blocker />
    </div>
  );
}

function Blocker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1706 296"
      className={styles.blocker}
      preserveAspectRatio="none"
    >
      <path d="M178.5 293C105.361 281.294.5 227.5.5 227.5V.5H1706V293s-47.61-239.974-167-230c-93.05 7.773-116.73 153.932-209.5 164.5-81.66 9.302-110.33-70.309-190-90.5-208.419-52.822-314.703 183.072-528 156-60.841-7.722-91.53-30.876-152.5-37.5-109.87-11.936-171.372 54.966-280.5 37.5z"></path>
    </svg>
  );
}

export default DecorativeSwoops;
