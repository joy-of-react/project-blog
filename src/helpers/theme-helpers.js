import {
  LIGHT_COLORS,
  DARK_COLORS,
  LIGHT_SHADOWS,
  DARK_SHADOWS,
} from '@/constants';

export function generateThemeStyleObject(theme) {
  const relevantColors =
    theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  const relevantShadows =
    theme === 'light' ? LIGHT_SHADOWS : DARK_SHADOWS;

  let output = {};

  Object.entries(relevantColors).forEach(([key, value]) => {
    output[`--color-${key}`] = value;
  });
  Object.entries(relevantShadows).forEach(
    ([key, value]) => {
      output[`--shadow-${key}`] = value;
    }
  );

  return output;
}

export function dynamicallyChangeCssVars(theme) {
  const colors =
    theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  const shadows =
    theme === 'light' ? LIGHT_SHADOWS : DARK_SHADOWS;

  const root = document.documentElement;

  root.setAttribute('data-color-mode', theme);

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  Object.entries(shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value);
  });
}
