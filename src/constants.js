export const BLOG_TITLE = 'Bits & Bytes';

export const LIGHT_COLORS = {
  text: 'hsl(0deg 0% 5%)',
  'primary-100': 'hsl(240deg 100% 90%)',
  'primary-300': 'hsl(242deg 100% 70%)',
  'primary-500': 'hsl(245deg 100% 60%)',
  'primary-700': 'hsl(250deg 100% 33%)',
  'primary-900': 'hsl(256deg 100% 20%)',
  'primary-contrast': 'white',
  'secondary-500': 'oklch(0.66 0.3 6)',
  'decorative-100': 'hsl(50deg 100% 94%)',
  'decorative-200': 'hsl(50deg 100% 90%)',
  'decorative-300': 'hsl(50deg 100% 85%)',
  'decorative-500': 'hsl(50deg 100% 70%)',
  'decorative-600': 'hsl(50deg 100% 60%)',
  'decorative-700': 'hsl(50deg 100% 50%)',
  'decorative-800': 'hsl(50deg 100% 33%)',
  'decorative-900': 'hsl(50deg 100% 25%)',
  'gray-0': 'white',
  'gray-100': 'hsl(50deg 20% 90%)',
  'gray-200': 'hsl(50deg 15% 85%)',
  'gray-300': 'hsl(50deg 10% 70%)',
  'gray-500': 'hsl(50deg 4% 50%)',
  'gray-700': 'hsl(50deg 10% 25%)',
  'gray-900': 'hsl(50deg 20% 10%)',
  'gray-1000': 'black',
};

export const DARK_COLORS = {
  text: 'hsl(0deg 0% 100%)',
  primary: 'hsl(50deg 100% 50%)',
  'primary-100': 'hsl(50deg 100% 90%)',
  'primary-300': 'hsl(50deg 100% 70%)',
  'primary-500': 'hsl(50deg 100% 50%)',
  'primary-700': 'hsl(50deg 100% 35%)',
  'primary-900': 'hsl(50deg 100% 25%)',
  'primary-contrast': 'black',
  'secondary-500': 'TODO',
  'decorative-100': 'hsl(256deg 20% 4%)',
  'decorative-200': 'hsl(256deg 30% 10%)',
  'decorative-300': 'hsl(256deg 30% 15%)',
  'decorative-500': 'hsl(256deg 40% 30%)',
  'decorative-600': 'hsl(256deg 40% 40%)',
  'decorative-700': 'hsl(256deg 40% 50%)',
  'decorative-800': 'hsl(256deg 45% 65%)',
  'decorative-900': 'hsl(256deg 55% 80%)',
  'gray-0': 'black',
  'gray-100': 'hsl(256deg 20% 10%)',
  'gray-200': 'hsl(256deg 15% 15%)',
  'gray-300': 'hsl(256deg 10% 30%)',
  'gray-500': 'hsl(256deg 4% 50%)',
  'gray-700': 'hsl(256deg 10% 75%)',
  'gray-900': 'hsl(256deg 20% 90%)',
  'gray-1000': 'white',
};

// Add in semantic / special colors
LIGHT_COLORS.primary = LIGHT_COLORS['primary-500'];
LIGHT_COLORS.secondary = LIGHT_COLORS['secondary-500'];
LIGHT_COLORS['inline-code-bg'] = 'hsl(45deg 74% 85%)';
LIGHT_COLORS['selection-text'] = 'black';
LIGHT_COLORS['selection-background'] =
  LIGHT_COLORS['decorative-700'];
LIGHT_COLORS['backdrop'] = LIGHT_COLORS['decorative-500'];
LIGHT_COLORS['backdrop-highlight'] =
  LIGHT_COLORS['decorative-300'];
LIGHT_COLORS['page-background'] =
  LIGHT_COLORS['decorative-100'];
LIGHT_COLORS['page-border'] = 'transparent';
LIGHT_COLORS['card-background'] = LIGHT_COLORS['gray-0'];
LIGHT_COLORS['card-border'] = 'transparent';

DARK_COLORS.primary = DARK_COLORS['primary-500'];
DARK_COLORS.secondary = DARK_COLORS['secondary-500'];
DARK_COLORS['inline-code-bg'] = 'hsl(256deg 30% 22%)';
DARK_COLORS['selection-text'] = 'white';
DARK_COLORS['selection-background'] =
  'hsl(256deg 100% 30%)';
DARK_COLORS['backdrop'] = DARK_COLORS['decorative-100'];
DARK_COLORS['backdrop-highlight'] =
  DARK_COLORS['decorative-500'];
DARK_COLORS['page-background'] = 'transparent';
DARK_COLORS['page-border'] = 'hsl(256deg 30% 50% / 0.2)';
DARK_COLORS['card-background'] =
  DARK_COLORS['page-background'];
DARK_COLORS['card-border'] = DARK_COLORS['page-border'];

export const LIGHT_SHADOWS = {
  page: `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
  card: `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
};
export const DARK_SHADOWS = {
  page: 'none',
  card: 'none',
};
