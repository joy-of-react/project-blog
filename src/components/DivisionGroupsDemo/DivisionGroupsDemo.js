"use client";
import React from "react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";

import { range } from "@/utils";
import Card from "@/components/Card";
import SliderControl from "@/components/SliderControl";

import Equation from "./Equation";
import styles from "./DivisionGroupsDemo.module.css";

function DivisionGroupsDemo({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea,
}) {
  const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups);

  const id = React.useId();

  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);

  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;
  console.log("🚀 ~ numOfGroups:", numOfGroups)

  // When we're splitting into 1-3 groups, display side-by-side
  // columns. When we get to 4, it should switch to a 2x2 grid.
  const gridStructure =
    numOfGroups < 4
      ? {
          gridTemplateColumns: `repeat(${numOfGroups}, 1fr)`,
        }
      : {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        };

  return (
    <Card as="section" className={styles.wrapper}>
      <header className={styles.header}>
        <SliderControl
          label="Number of Groups"
          className={styles.slider}
          step={1}
          min={1}
          max={4}
          value={numOfGroups}
          onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
        />
      </header>

      <LayoutGroup>
        <div className={styles.demoWrapper}>
          <div className={clsx(styles.demoArea)} style={gridStructure}>
            {range(numOfGroups).map((groupIndex) => {
              const transition = {
                type: "spring",
                damping: 40,
                stiffness: 200,
              };
              return (
                <div
                  key={groupIndex}
                  className={styles.group}
                  // layoutId={`${id}-${groupIndex}`}
                  // transition={transition}
                >
                  {range(numOfItemsPerGroup).map((index) => {
                    const layoutId = `${id}-${groupIndex}-${index}`;
                    // console.log("🚀 ~ {range ~ layoutId:", layoutId)
                    return (
                      <motion.div
                        key={layoutId}
                        className={styles.item}
                        layoutId={layoutId}
                        transition={transition}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {includeRemainderArea && (
          <div className={styles.remainderArea}>
            <p className={styles.remainderHeading}>Remainder Area</p>

            {range(remainder).map((index) => {
              const layoutId = `${id}-4-${index}`
              return <motion.div key={index} className={styles.item} layoutId={layoutId}/>;
            })}
          </div>
        )}
      </LayoutGroup>

      <Equation
        dividend={numOfItems}
        divisor={numOfGroups}
        remainder={remainder}
      />
    </Card>
  );
}

export default DivisionGroupsDemo;
