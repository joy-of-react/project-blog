"use-client";
import React from "react";
import { MotionConfig } from "motion/react";
export default function RespectMotionPreferences({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
