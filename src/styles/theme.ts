const theme = {
  colors: {
    good: '#70A386',
    moderate: '#D69E6B',
    unhealthy: '#C45131',
    hazardous: '#9E321E',
  },
  bg: {
    primary: '#FAF8F6',
    secondary: '#F5F1EE',
    card: '#FFFFFF',
    cardHover: '#FCFBFB',
  },
  text: {
    primary: '#5C3D35',
    secondary: '#7D6560',
    muted: '#A89895',
  },
  accent: '#C45131',
  accentGlow: 'rgba(196, 81, 49, 0.2)',
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  radius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    full: '9999px',
  },
  shadow: {
    card: '0 4px 24px rgba(92, 61, 53, 0.06)',
    glow: '0 0 24px rgba(196, 81, 49, 0.15)',
  },
  transition: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
} as const;

export type ThemeType = typeof theme;
export default theme;
