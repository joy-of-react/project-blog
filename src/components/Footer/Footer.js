import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import DecorativeSwoops from './DecorativeSwoops';
import styles from './Footer.module.css';
import { PAGE_VISITS, LIKE_COUNTER } from '../../constants';

import fs from 'fs';
import path from 'path';

const databasePath = 'src/components/Footer/databasetest.json';

const databaseAbsolutePath = path.join(process.cwd(), databasePath);

//TODO: access json file and log to the console
console.log(databaseAbsolutePath);

const readFileFunction = fs.readFileSync(databaseAbsolutePath, 'utf8');

console.log(JSON.parse(readFileFunction));

function Footer() {


  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
          {/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
          <p className={styles.attribution}>
            Blog template created by{' '}
            <a href="https://www.joshwcomeau.com/">
              Josh W. Comeau
            </a>
            . Check out{' '}
            <a href="https://www.joyofreact.com/">
              The Joy of React
            </a>{' '}
            to learn how to build dynamic React apps like
            this one!
          </p>
          <p>
            You are visitor number: {PAGE_VISITS}
          </p>
          <div>
          <button>
            Like
          </button>
            {' '}
            {LIKE_COUNTER}
          </div>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/rss">RSS feed</Link>
            </li>
            <li>
              <Link href="/todo">Terms of Use</Link>
            </li>
            <li>
              <Link href="/todo">Privacy Policy</Link>
            </li>
            <li>
              <a href="https://twitter.com/JoshWComeau">
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
