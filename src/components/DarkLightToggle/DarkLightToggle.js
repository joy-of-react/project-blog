'use client';
import React from 'react';
import Cookie from 'js-cookie';

import { dynamicallyChangeCssVars } from '@/helpers/theme-helpers';

function DarkLightToggle({
  theme: initialTheme,
  ...delegated
}) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    // Update the cookie for our next page load
    Cookie.set('theme', nextTheme, { expires: 1000 });

    // Update the values on the root tag
    dynamicallyChangeCssVars(nextTheme);
  }

  return <button onClick={handleClick} {...delegated} />;
}

export default DarkLightToggle;
