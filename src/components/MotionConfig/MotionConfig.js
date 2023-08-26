'use client';

import React from 'react';
import { MotionConfig as MC } from 'framer-motion';

function MotionConfig({ children, ...delegated }) {
  return <MC {...delegated}>{children}</MC>;
}

export default MotionConfig;
