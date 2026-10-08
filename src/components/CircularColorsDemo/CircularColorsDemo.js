"use client";
import React from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";
import { time } from "motion";
import { LayoutGroup, motion } from "motion/react";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  // TODO: This value should cycle through the colors in the
  // COLORS array:
  const colorIndex = timeElapsed % COLORS.length;
  const selectedColor = COLORS[colorIndex];
  const TRANS_STYLES = {
    type: "spring",
    stiffness: 300,
    damping: 40,
  };

  React.useEffect(() => {
    if (!timerOn) {
      return;
    }
    const colorTimer = window.setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(colorTimer);
    };
  }, [timerOn]);

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              <LayoutGroup>
                {isSelected && (
                  <motion.div
                    layoutId="outline"
                    transition={TRANS_STYLES}
                    className={styles.selectedColorOutline}
                  />
                )}
              </LayoutGroup>
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
          <button
            onClick={() => {
              setTimerOn(!timerOn);
            }}
          >
            {timerOn ? <Pause /> : <Play />}
            <VisuallyHidden>Play</VisuallyHidden>
          </button>
          <button
            onClick={() => {
              setTimerOn(false);
              setTimeElapsed(0);
            }}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
