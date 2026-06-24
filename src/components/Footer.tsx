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
  background: #FFFFFF;
  border-top: 1px solid #F3ECE9;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  z-index: 9999;
  pointer-events: all;
  height: 68px;
  box-shadow: 0 -4px 16px rgba(92, 61, 53, 0.03);
`;

const NavItem = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  color: ${({ $active, theme }) => ($active ? theme.accent : theme.text.secondary)};
  font-family: inherit;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 15%;
    right: 15%;
    height: 3px;
    background: ${({ $active, theme }) => ($active ? theme.accent : 'transparent')};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: background-color 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease;
  }
`;

const NavLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  margin-top: 4px;
  letter-spacing: 0.3px;
`;

interface NavConfig {
  id: ScreenId;
  icon: (active: boolean) => React.ReactNode;
  label: string;
}

const navItems: NavConfig[] = [
  {
    id: 'home',
    label: '오늘',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'record',
    label: '기록',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
  },
  {
    id: 'facilities',
    label: '병원',
    icon: (active) => (
      <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="10" x2="12" y2="16" />
        <line x1="9" y1="13" x2="15" y2="13" />
      </svg>
    ),
  },
  {
    id: 'guardian-login' as ScreenId,
    label: '보호자',
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const isTabActive = (tabId: ScreenId, activeScreen: ScreenId): boolean => {
  if (tabId === 'home') return activeScreen === 'home';
  if (tabId === 'record') return ['health', 'profile', 'risk', 'record', 'settings'].includes(activeScreen);
  if (tabId === 'facilities') return activeScreen === 'facilities';
  if ((tabId as string) === 'guardian-login') return ['guardian-login', 'guardian-invite', 'elder-welcome', 'status'].includes(activeScreen);
  return false;
};

export const Footer: React.FC<FooterProps> = ({ activeScreen, onNavigate }) => {
  return (
    <BottomNav>
      {navItems.map(item => {
        const active = isTabActive(item.id, activeScreen);
        return (
          <NavItem
            key={item.id}
            $active={active}
            onClick={() => onNavigate(item.id)}
          >
            <NavIcon>{item.icon(active)}</NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavItem>
        );
      })}
    </BottomNav>
  );
};

export default Footer;
