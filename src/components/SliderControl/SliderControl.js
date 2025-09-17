import React from "react";

import Slider from "@/components/Slider";
import styles from "./SliderControl.module.css";

function SliderControl({ label, value, ...delegated }) {
  const id = React.useId();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <span className={styles.value}>{value}</span>
      </div>
      <Slider {...delegated} value={value} id={id} />
    </div>
  );
}

export default SliderControl;
