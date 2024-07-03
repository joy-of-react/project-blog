"use client";

import React from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";
import { motion, LayoutGroup } from "framer-motion";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:
  const [status, setStatus] = React.useState("pause");
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  console.log("🚀 ~ CircularColorsDemo ~ timeElapsed:", timeElapsed);

  const id = React.useId();

  React.useEffect(() => {
    let intervalId = null;

    if (status == "play") {
      intervalId = setInterval(() => {
        setTimeElapsed((currentTimeElapsed) => currentTimeElapsed + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [status]);

  // TODO: This value should cycle through the colors in the
  // COLORS array:
  const selectedColor = COLORS[timeElapsed % COLORS.length];

  return (
    <Card as="section" className={styles.wrapper}>
      <LayoutGroup>
        <ul className={styles.colorsWrapper}>
          {COLORS.map((color, index) => {
            const isSelected = color.value === selectedColor.value;

            return (
              <motion.li className={styles.color} key={index} layout={true}>
                {isSelected && (
                  <motion.div
                    className={styles.selectedColorOutline}
                    layoutId={`${id}-${index}`}
                    transition={{
                      type: 'spring'
                    }}
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
              </motion.li>
            );
          })}
        </ul>
      </LayoutGroup>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          {status === "pause" && (
            <button onClick={() => setStatus("play")}>
              <Play />
              <VisuallyHidden>Play</VisuallyHidden>
            </button>
          )}
          {status === "play" && (
            <button onClick={() => setStatus("pause")}>
              <Pause />
              <VisuallyHidden>Pause</VisuallyHidden>
            </button>
          )}
          <button
            onClick={() => {
              setStatus("pause");
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
