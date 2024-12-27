"use client";
import React from "react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import { Play, Pause, RotateCcw } from "react-feather";
import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

const getColor = (timeElapsed) => {
  const { length } = COLORS;
  const index = timeElapsed % length;
  return COLORS[index];
};

function CircularColorsDemo() {
  // IDs
  const id = React.useId();
  // states
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  // effects
  React.useEffect(() => {
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setTimeElapsed((value) => value + 1);
      }, 1 * 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);
  // cycle through the colors in the COLORS array
  const selectedColor = getColor(timeElapsed);
  // handlers
  const handleReset = () => {
    setIsPlaying(false);
    setTimeElapsed(0);
  };
  // JSX
  return (
    <LayoutGroup>
      <Card as="section" className={styles.wrapper}>
        <ul className={styles.colorsWrapper}>
          {COLORS.map((color, index) => {
            const isSelected = color.value === selectedColor.value;
            const key = `${id}-item-${index}`;
            return (
              <li className={styles.color} key={key}>
                {isSelected && (
                  <motion.div
                    className={styles.selectedColorOutline}
                    layoutId="outline"
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
            {isPlaying ? (
              <button type="button" onClick={() => setIsPlaying(false)}>
                <Pause />
                <VisuallyHidden>Pause</VisuallyHidden>
              </button>
            ) : (
              <button type="button" onClick={() => setIsPlaying(true)}>
                <Play />
                <VisuallyHidden>Play</VisuallyHidden>
              </button>
            )}
            <button type="button" onClick={handleReset}>
              <RotateCcw />
              <VisuallyHidden>Reset</VisuallyHidden>
            </button>
          </div>
        </div>
      </Card>
    </LayoutGroup>
  );
}

export default CircularColorsDemo;
