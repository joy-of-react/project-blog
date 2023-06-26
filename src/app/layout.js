import React from 'react';
import { Work_Sans, Overpass_Mono } from 'next/font/google';
import clsx from 'clsx';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeHydration from '@/components/ThemeHydration';
import './styles.css';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Overpass_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(mainFont.variable, monoFont.variable)}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ThemeHydration />
      </body>
    </html>
  );
}

export default RootLayout;
