import React from 'react';
import { Recursive } from 'next/font/google';
import './styles.css';

const recursive = Recursive({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  axes: ['MONO', 'slnt', 'CRSV'],
  variable: '--font-family',
});

function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={recursive.variable}
    >
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
