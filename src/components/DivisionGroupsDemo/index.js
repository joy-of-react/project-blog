"use client";

import dynamic from 'next/dynamic';

const DivisionGroupsDemo = dynamic(() =>
  import('./DivisionGroupsDemo')
);

export default DivisionGroupsDemo;
