import React from 'react';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

function ThemeHydration() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: generateSnippet(),
      }}
    />
  );
}

function generateSnippet() {
  const statementsForEachColor = Object.keys(LIGHT_COLORS)
    .map((colorKey) => {
      const lightColor = LIGHT_COLORS[colorKey];
      const darkColor = DARK_COLORS[colorKey];

      return `
root.style.setProperty(
  '${colorKey}',
  isDark ? '${darkColor}' : '${lightColor}'
);
    `;
    })
    .join('\n');

  return `
let theme = 'light'; // default

// Check for value set in localStorage
const savedTheme = window.localStorage.getItem('color-theme');

if (typeof savedTheme === 'string') {
  theme = savedTheme;
}

const isDark = theme === 'dark';

const root = document.documentElement;

root.setAttribute(
  'data-color-mode',
  isDark ? 'dark' : 'light'
);

${statementsForEachColor}`;
}

// (function() {
//   function writeColors(isDark) {
//     let root = document.documentElement;
//     root.setAttribute(
//       'data-color-mode',
//       isDark ? 'dark' : 'light'
//     );
//     root.style.setProperty(
//       '--color-text',
//       isDark ? '${DARK_COLORS.text}' : '${LIGHT_COLORS.text}'
//     );
//     root.style.setProperty(
//       '--color-background',
//       isDark ? '${DARK_COLORS.background}' : '${LIGHT_COLORS.background}'
//     );
//     root.style.setProperty(
//       '--color-blurred-background',
//       isDark ? '${DARK_COLORS.blurredBackground}' : '${LIGHT_COLORS.blurredBackground}'
//     );
//     root.style.setProperty(
//       '--color-primary',
//       isDark ? '${DARK_COLORS.primary}' : '${LIGHT_COLORS.primary}'
//     );
//     root.style.setProperty(
//       '--color-secondary',
//       isDark ? '${DARK_COLORS.secondary}' : '${LIGHT_COLORS.secondary}'
//     );
//     root.style.setProperty(
//       '--color-tertiary',
//       isDark ? '${DARK_COLORS.tertiary}' : '${LIGHT_COLORS.tertiary}'
//     );
//     root.style.setProperty(
//       '--color-decorative',
//       isDark ? '${DARK_COLORS.decorative}' : '${LIGHT_COLORS.decorative}'
//     );
//     root.style.setProperty(
//       '--color-muted',
//       isDark ? '${DARK_COLORS.muted}' : '${LIGHT_COLORS.muted}'
//     );
//     root.style.setProperty(
//       '--color-muted-background',
//       isDark ? '${DARK_COLORS.mutedBackground}' : '${LIGHT_COLORS.mutedBackground}'
//     );
//     root.style.setProperty(
//       '--color-info',
//       isDark ? '${DARK_COLORS.primary}' : '${LIGHT_COLORS.primary}'
//     );
//     root.style.setProperty(
//       '--color-success',
//       isDark ? '${DARK_COLORS.success}' : '${LIGHT_COLORS.success}'
//     );
//     root.style.setProperty(
//       '--color-success-background',
//       isDark ? '${DARK_COLORS.successBackground}' : '${LIGHT_COLORS.successBackground}'
//     );
//     root.style.setProperty(
//       '--color-error',
//       isDark ? '${DARK_COLORS.error}' : '${LIGHT_COLORS.error}'
//       );
//     root.style.setProperty(
//       '--color-error-background',
//       isDark ? '${DARK_COLORS.errorBackground}' : '${LIGHT_COLORS.errorBackground}'
//     );
//     root.style.setProperty(
//       '--color-alert',
//       isDark ? '${DARK_COLORS.alert}' : '${LIGHT_COLORS.alert}'
//     );
//     root.style.setProperty(
//       '--color-alert-background',
//       isDark ? '${DARK_COLORS.alertBackground}' : '${LIGHT_COLORS.alertBackground}'
//     );
//     root.style.setProperty(
//       '--color-venn-0',
//       isDark ? '${DARK_COLORS.venn[0]}' : '${LIGHT_COLORS.venn[0]}'
//     );
//     root.style.setProperty(
//       '--color-venn-1',
//       isDark ? '${DARK_COLORS.venn[1]}' : '${LIGHT_COLORS.venn[1]}'
//     );
//     root.style.setProperty(
//       '--color-gray-100',
//       isDark ? '${DARK_COLORS.gray[100]}' : '${LIGHT_COLORS.gray[100]}'
//     );
//     root.style.setProperty(
//       '--color-gray-200',
//       isDark ? '${DARK_COLORS.gray[200]}' : '${LIGHT_COLORS.gray[200]}'
//     );
//     root.style.setProperty(
//       '--color-gray-300',
//       isDark ? '${DARK_COLORS.gray[300]}' : '${LIGHT_COLORS.gray[300]}'
//     );
//     root.style.setProperty(
//       '--color-gray-400',
//       isDark ? '${DARK_COLORS.gray[400]}' : '${LIGHT_COLORS.gray[400]}'
//     );
//     root.style.setProperty(
//       '--color-gray-500',
//       isDark ? '${DARK_COLORS.gray[500]}' : '${LIGHT_COLORS.gray[500]}'
//     );
//     root.style.setProperty(
//       '--color-gray-600',
//       isDark ? '${DARK_COLORS.gray[600]}' : '${LIGHT_COLORS.gray[600]}'
//     );
//     root.style.setProperty(
//       '--color-gray-700',
//       isDark ? '${DARK_COLORS.gray[700]}' : '${LIGHT_COLORS.gray[700]}'
//     );
//     root.style.setProperty(
//       '--color-gray-900',
//       isDark ? '${DARK_COLORS.gray[900]}' : '${LIGHT_COLORS.gray[900]}'
//     );
//     root.style.setProperty(
//       '--color-gray-1000',
//       isDark ? '${DARK_COLORS.gray[1000]}' : '${LIGHT_COLORS.gray[1000]}'
//     );
//     root.style.setProperty(
//       '--color-subtle-background',
//       isDark
//         ? '${DARK_COLORS.subtleBackground}'
//         : '${LIGHT_COLORS.subtleBackground}'
//     );
//     root.style.setProperty(
//       '--color-subtle-floating',
//       isDark
//         ? '${DARK_COLORS.subtleFloating}'
//         : '${LIGHT_COLORS.subtleFloating}'
//     );
//     root.style.setProperty(
//       '--color-homepage-light',
//       isDark
//         ? '${DARK_COLORS.homepageLight}'
//         : '${LIGHT_COLORS.homepageLight}'
//     );
//     root.style.setProperty(
//       '--color-homepage-dark',
//       isDark
//         ? '${DARK_COLORS.homepageDark}'
//         : '${LIGHT_COLORS.homepageDark}'
//     );
//     root.style.setProperty(
//       '--color-homepage-bg',
//       isDark
//         ? '${DARK_COLORS.homepageBg}'
//         : '${LIGHT_COLORS.homepageBg}'
//     );

//     root.style.setProperty(
//       '--syntax-bg',
//       isDark ? '${DARK_COLORS.syntax.bg}' : '${LIGHT_COLORS.syntax.bg}'
//     );
//     root.style.setProperty(
//       '--syntax-highlight',
//       isDark ? '${DARK_COLORS.syntax.highlight}' : '${LIGHT_COLORS.syntax.highlight}'
//     );
//     root.style.setProperty(
//       '--syntax-txt',
//       isDark ? '${DARK_COLORS.syntax.txt}' : '${LIGHT_COLORS.syntax.txt}'
//     );
//     root.style.setProperty(
//       '--syntax-comment',
//       isDark ? '${DARK_COLORS.syntax.comment}' : '${LIGHT_COLORS.syntax.comment}'
//     );
//     root.style.setProperty(
//       '--syntax-prop',
//       isDark ? '${DARK_COLORS.syntax.prop}' : '${LIGHT_COLORS.syntax.prop}'
//     );
//     root.style.setProperty(
//       '--syntax-bool',
//       isDark ? '${DARK_COLORS.syntax.bool}' : '${LIGHT_COLORS.syntax.bool}'
//     );
//     root.style.setProperty(
//       '--syntax-val',
//       isDark ? '${DARK_COLORS.syntax.val}' : '${LIGHT_COLORS.syntax.val}'
//     );
//     root.style.setProperty(
//       '--syntax-str',
//       isDark ? '${DARK_COLORS.syntax.str}' : '${LIGHT_COLORS.syntax.str}'
//     );
//     root.style.setProperty(
//       '--syntax-name',
//       isDark ? '${DARK_COLORS.syntax.name}' : '${LIGHT_COLORS.syntax.name}'
//     );
//     root.style.setProperty(
//       '--syntax-del',
//       isDark ? '${DARK_COLORS.syntax.del}' : '${LIGHT_COLORS.syntax.del}'
//     );
//     root.style.setProperty(
//       '--syntax-regex',
//       isDark ? '${DARK_COLORS.syntax.regex}' : '${LIGHT_COLORS.syntax.regex}'
//     );
//     root.style.setProperty(
//       '--syntax-fn',
//       isDark ? '${DARK_COLORS.syntax.fn}' : '${LIGHT_COLORS.syntax.fn}'
//     );

//     root.style.setProperty('${PREFERS_DARK_CSS_PROP}', isDark);
//   }

//   const PREFERS_DARK_KEY = '${PREFERS_DARK_KEY}';
//   const preferDarkQuery = '(prefers-color-scheme: dark)';
//   const mql = window.matchMedia(preferDarkQuery);
//   const prefersDarkFromMQ = mql.matches;
//   const prefersDarkFromLocalStorage = localStorage.getItem('${PREFERS_DARK_KEY}');

//   let isDark;

//   const hasUsedToggle = typeof prefersDarkFromLocalStorage === 'string';
//   if (hasUsedToggle) {
//     isDark = prefersDarkFromLocalStorage === "true";
//   } else {
//     isDark = prefersDarkFromMQ;
//   }

//   writeColors(isDark);
// })();

export default ThemeHydration;
