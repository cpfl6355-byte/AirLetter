import React from 'react';
import styled from 'styled-components';
import { ScreenId } from '../types';

interface FooterProps {
  activeScreen: ScreenId;
  onNavigate: (id: ScreenId) => void;
}

const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  display: flex;
  background: rgba(240, 248, 255, 0.97);
  border-top: 1px solid rgba(30,144,214,0.15);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  z-index: 9999;
  pointer-events: all;
`;

const NavItem = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 12px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.fast};
  position: relative;
  border: none;
  background: none;
  color: ${({ $active, theme }) => ($active ? theme.accent : theme.text.muted)};
  font-family: inherit;

  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }

  ${({ $active, theme }) =>
    $active &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 32px;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${theme.accent}, transparent);
      border-radius: 0 0 ${theme.radius.full} ${theme.radius.full};
    }
  `}
`;

const NavIcon = styled.span`
  font-size: 22px;
  line-height: 1;
`;

const NavLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  margin-top: 3px;
  letter-spacing: 0.3px;
`;

interface NavConfig {
  id: ScreenId;
  icon: string;
  label: string;
}

const navItems: NavConfig[] = [
  { id: 'home', icon: '🏠', label: '홈' },
  { id: 'profile', icon: '👤', label: '프로필' },
  { id: 'risk', icon: '📊', label: '위험도' },
  { id: 'guide', icon: '📖', label: '가이드' },
  { id: 'record', icon: '📝', label: '기록' },
  { id: 'settings', icon: '⚙️', label: '설정' },
];

export const Footer: React.FC<FooterProps> = ({ activeScreen, onNavigate }) => {
  return (
    <BottomNav>
      {navItems.map(item => (
        <NavItem
          key={item.id}
          $active={activeScreen === item.id}
          onClick={() => onNavigate(item.id)}
        >
          <NavIcon>{item.icon}</NavIcon>
          <NavLabel>{item.label}</NavLabel>
        </NavItem>
      ))}
    </BottomNav>
  );
};

export default Footer;
