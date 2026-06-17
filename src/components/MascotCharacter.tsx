import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AirLevel } from '../types';

interface MascotCharacterProps {
  level: AirLevel;
}

const breathe = keyframes`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
`;

const MascotContainer = styled.div<{ $level: AirLevel }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.md} 0;
  animation: ${breathe} 3s infinite ease-in-out;
`;

const MascotImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(30, 100, 180, 0.12);
  background: white;
  border: 3px solid ${({ theme }) => theme.bg.primary};
`;

const MascotSpeech = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(30, 144, 214, 0.15);
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.card};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 6px 6px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.95) transparent;
    display: block;
    width: 0;
  }
`;

export const MascotCharacter: React.FC<MascotCharacterProps> = ({ level }) => {
  const getSpeechText = (lvl: AirLevel) => {
    switch (lvl) {
      case 'good':
        return '공기가 맑아 기분이 정말 좋아요! 🌿';
      case 'moderate':
        return '보통 수준이에요. 야외 활동은 적당히! 😊';
      case 'unhealthy':
        return '미세먼지가 나빠요! 꼭 마스크를 써주세요 😷';
      case 'hazardous':
        return '바깥 공기가 위험해요! 오늘은 실내에만 있어요 🚨';
      default:
        return '대기질 정보를 확인하는 중이에요...';
    }
  };

  return (
    <MascotContainer $level={level}>
      <MascotImage src={`/assets/bear_${level}.png`} alt={`Air Quality Bear - ${level}`} />
      <MascotSpeech>{getSpeechText(level)}</MascotSpeech>
    </MascotContainer>
  );
};

export default MascotCharacter;
