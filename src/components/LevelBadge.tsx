import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AirLevel } from '../types';
import { levelKo } from '../utils/airQuality';

interface LevelBadgeProps {
  level: AirLevel;
}

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
`;

const Badge = styled.div<{ $level: AirLevel }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 13px;
  font-weight: 700;

  ${({ $level, theme }) => {
    switch ($level) {
      case 'good':
        return `background: rgba(78,205,164,0.2); color: ${theme.colors.good};`;
      case 'moderate':
        return `background: rgba(245,200,66,0.2); color: ${theme.colors.moderate};`;
      case 'unhealthy':
        return `background: rgba(255,140,66,0.2); color: ${theme.colors.unhealthy};`;
      case 'hazardous':
        return `background: rgba(232,64,64,0.2); color: ${theme.colors.hazardous};`;
    }
  }}
`;

const LevelDot = styled.div<{ $level: AirLevel }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: ${pulse} 1.8s infinite;
  background-color: ${({ $level, theme }) => theme.colors[$level]};
`;

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level }) => {
  return (
    <Badge $level={level}>
      <LevelDot $level={level} />
      {levelKo(level)}
    </Badge>
  );
};

export default LevelBadge;
