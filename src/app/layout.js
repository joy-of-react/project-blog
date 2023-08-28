import React from 'react';
import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';
import { cookies } from 'next/headers';

import MotionConfig from '@/components/client/MotionConfig';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  other: {
    env: process.env.GIT_BRANCH,
    version: [process.env.GIT_COMMIT_TAG, process.env.GIT_COMMIT_HASH, process.env.GIT_COMMIT_DATE]
      .filter(Boolean)
      .join(' - '),
    'deployed-at': process.env.BUILD_DATE,
  },
};

function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  const themeColors = theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

  return (
    <html
      lang='en'
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={themeColors}
    >
      <body>
        <Header theme={theme} />
        <MotionConfig reducedMotion='user'>
          <main>{children}</main>
        </MotionConfig>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
