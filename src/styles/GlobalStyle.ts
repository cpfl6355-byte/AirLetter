import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  /* Reset & Base */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Pretendard', 'Noto Sans KR', -apple-system, sans-serif;
    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    background: linear-gradient(160deg, #EBE5E2 0%, #FAF8F6 50%, #E3DDD9 100%);
  }

  /* Animations */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.5; }
  }

  @keyframes breathe {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.04); }
  }

  @keyframes countUp {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* Custom Range Slider Webkit styles */
  input[type="range"] {
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: rgba(196, 81, 49, 0.12);
    outline: none;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent}, #A03D22);
    box-shadow: 0 0 8px ${({ theme }) => theme.accentGlow};
    cursor: pointer;
    transition: transform ${({ theme }) => theme.transition.fast};
  }

  input[type="range"]::-webkit-slider-thumb:active {
    transform: scale(1.2);
  }
`;

export default GlobalStyle;
