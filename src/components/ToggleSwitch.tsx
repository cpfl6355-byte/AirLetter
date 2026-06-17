import React from 'react';
import styled from 'styled-components';

interface ToggleSwitchProps {
  isOn: boolean;
  onClick: () => void;
}

const ToggleWrap = styled.div<{ $isOn: boolean }>`
  position: relative;
  width: 48px;
  height: 28px;
  background: ${({ $isOn, theme }) => ($isOn ? theme.accent : 'rgba(30,144,214,0.12)')};
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transition.fast};
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #fff;
    transition: transform ${({ theme }) => theme.transition.fast};
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    transform: ${({ $isOn }) => ($isOn ? 'translateX(20px)' : 'translateX(0)')};
  }
`;

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onClick }) => {
  return <ToggleWrap $isOn={isOn} onClick={onClick} />;
};

export default ToggleSwitch;
