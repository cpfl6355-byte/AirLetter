import React from 'react';
import styled, { keyframes } from 'styled-components';

interface AlertBannerProps {
  type: 'hazardous' | 'unhealthy';
  text: string;
  visible: boolean;
}

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.65; }
`;

const Banner = styled.div<{ $type: 'hazardous' | 'unhealthy' }>`
  margin: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  animation: ${pulse} 2s infinite;

  ${({ $type, theme }) =>
    $type === 'hazardous'
      ? `
    background: rgba(232, 64, 64, 0.15);
    border: 1px solid rgba(232, 64, 64, 0.4);
    color: ${theme.colors.hazardous};
  `
      : `
    background: rgba(255, 140, 66, 0.15);
    border: 1px solid rgba(255, 140, 66, 0.4);
    color: ${theme.colors.unhealthy};
  `}
`;

export const AlertBanner: React.FC<AlertBannerProps> = ({ type, text, visible }) => {
  if (!visible) return null;

  return (
    <Banner $type={type}>
      <span>🚨</span>
      <span>{text}</span>
    </Banner>
  );
};

export default AlertBanner;
