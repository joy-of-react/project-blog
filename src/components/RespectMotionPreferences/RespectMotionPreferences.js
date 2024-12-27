"use client";
import React from "react";
import { MotionConfig } from "framer-motion";

const RespectMotionPreferences = ({ children }) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default RespectMotionPreferences;
