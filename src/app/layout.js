import React from 'react';
import {
  Figtree,
  Source_Code_Pro,
} from 'next/font/google';
import clsx from 'clsx';

import MainHeader from '@/components/MainHeader';
import './styles.css';

const mainFont = Figtree({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Source_Code_Pro({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        mainFont.variable,
        monoFont.variable
      )}
    >
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
