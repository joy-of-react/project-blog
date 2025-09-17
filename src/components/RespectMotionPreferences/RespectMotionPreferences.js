"use client";

import { MotionConfig } from "motion/react";
import React from "react";

function RespectMotionPreferences({ children }) {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
}

export default RespectMotionPreferences;
