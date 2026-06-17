const theme = {
  colors: {
    good: '#16A97A',
    moderate: '#D4920A',
    unhealthy: '#E06A10',
    hazardous: '#C72828',
  },
  bg: {
    primary: '#E8F4FD',
    secondary: '#F0F8FF',
    card: 'rgba(255, 255, 255, 0.92)',
    cardHover: 'rgba(255, 255, 255, 1)',
  },
  text: {
    primary: '#0D2D4A',
    secondary: '#2E6088',
    muted: '#6A9BB8',
  },
  accent: '#1E90D6',
  accentGlow: 'rgba(30, 144, 214, 0.22)',
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
    card: '0 4px 24px rgba(30,100,180,0.12)',
    glow: '0 0 24px rgba(30, 144, 214, 0.22)',
  },
  transition: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
} as const;

export type ThemeType = typeof theme;
export default theme;
