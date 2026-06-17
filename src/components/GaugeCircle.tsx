import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AirLevel } from '../types';
import { levelColor } from '../utils/airQuality';

interface GaugeCircleProps {
  value: number;
  max: number;
  level: AirLevel;
  name: string;
  unit: string;
}

const GaugeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const GaugeSvg = styled.svg`
  transform: rotate(-90deg);
`;

const GaugeTrack = styled.circle`
  fill: none;
  stroke: rgba(30, 100, 180, 0.12);
  stroke-linecap: round;
`;

const GaugeFill = styled.circle<{ $color: string }>`
  fill: none;
  stroke-linecap: round;
  stroke: ${({ $color }) => $color};
  filter: drop-shadow(0 0 6px ${({ $color }) => $color}66);
  transition: stroke-dashoffset 0.1s ease, stroke 0.5s ease;
`;

const GaugeLabel = styled.text`
  text-anchor: middle;
  dominant-baseline: middle;
`;

const GaugeNum = styled.tspan`
  font-size: 22px;
  font-weight: 800;
  fill: ${({ theme }) => theme.text.primary};
`;

const GaugeUnitText = styled.text`
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 10px;
  fill: ${({ theme }) => theme.text.muted};
`;

const GaugeName = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 600;
`;

export const GaugeCircle: React.FC<GaugeCircleProps> = ({
  value,
  max,
  level,
  name,
  unit,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const color = levelColor(level);
  
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const ratio = Math.min(value / max, 1);
  const [dashOffset, setDashOffset] = useState(circumference);

  useEffect(() => {
    let start: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 1200, 1); // 1.2 seconds ease-out
      const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out

      setDisplayValue(Math.round(value * ease));
      setDashOffset(circumference - circumference * ratio * ease);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, max, ratio, circumference]);

  return (
    <GaugeItem>
      <GaugeSvg width="110" height="110" viewBox="0 0 110 110">
        <GaugeTrack cx="55" cy="55" r={r} strokeWidth="8" />
        <GaugeFill
          $color={color}
          cx="55"
          cy="55"
          r={r}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <GaugeLabel x="55" y="50">
          <GaugeNum x="55" dy="0">{displayValue}</GaugeNum>
        </GaugeLabel>
        <GaugeUnitText x="55" y="68">{unit}</GaugeUnitText>
      </GaugeSvg>
      <GaugeName>{name}</GaugeName>
    </GaugeItem>
  );
};

export default GaugeCircle;
