import React, { useState } from 'react';
import styled from 'styled-components';
import { REGION_MAP } from '../data/guideData';

interface HeaderProps {
  showRegionButton?: boolean;
  showSearchButton?: boolean;
  region?: string;
  onRegionClick?: () => void;
  onRegionChange?: (region: string) => void;
  onAlarmClick?: () => void;
  onSettingsClick?: () => void;
}

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  padding-top: calc(${({ theme }) => theme.spacing.md} + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid rgba(30,144,214,0.12);
  background: ${({ theme }) => theme.bg.secondary};
`;

const AppLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.accent};
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const LogoText = styled.span`
  font-size: 19px;
  font-weight: 800;
  color: ${({ theme }) => theme.accent};
  letter-spacing: -0.5px;
`;

const HeaderRegion = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: ${({ theme }) => theme.text.secondary};
  background: rgba(30,144,214,0.1);
  border: 1px solid rgba(30,144,214,0.2);
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transition.fast};
  font-family: inherit;

  &:hover {
    background: rgba(30,144,214,0.18);
  }
`;

/* ── 드롭다운 메뉴 (원본 스타일 시스템과 일치) ── */
const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 9999;
  background: transparent;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid rgba(30,144,214,0.15);
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 8px 24px rgba(30,100,180,0.12);
  z-index: 10000;
  width: 130px;
  max-height: 260px;
  overflow-y: auto;
  padding: 4px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(30,144,214,0.2);
    border-radius: 2px;
  }
`;

const DropdownItem = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: ${({ $active }) => ($active ? 'rgba(30,144,214,0.08)' : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.accent : theme.text.primary)};
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-family: inherit;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(30,144,214,0.06);
    color: ${({ theme }) => theme.accent};
  }
`;

const SearchIconBtn = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(92, 61, 53, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Header: React.FC<HeaderProps> = ({
  showRegionButton = false,
  showSearchButton = false,
  region = '',
  onRegionClick,
  onRegionChange,
  onAlarmClick,
  onSettingsClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const regionList = Object.keys(REGION_MAP);

  const handleSelect = (reg: string) => {
    setIsOpen(false);
    if (onRegionChange) onRegionChange(reg);
    else if (onRegionClick) onRegionClick();
  };

  return (
    <AppHeader>
      <AppLogo>
        <LogoIcon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </LogoIcon>
        <LogoText>맑은숨</LogoText>
      </AppLogo>
      {showRegionButton && (
        <DropdownWrapper>
          <HeaderRegion onClick={() => setIsOpen(prev => !prev)}>
            <span>📍</span>
            <span>{region}</span>
            <span>{isOpen ? '▴' : '▾'}</span>
          </HeaderRegion>

          {isOpen && (
            <>
              <DropdownOverlay onClick={() => setIsOpen(false)} />
              <DropdownMenu>
                {regionList.map(reg => (
                  <DropdownItem
                    key={reg}
                    $active={reg === region}
                    onClick={() => handleSelect(reg)}
                  >
                    {reg}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </>
          )}
        </DropdownWrapper>
      )}
      {showSearchButton && (
        <SearchIconBtn>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </SearchIconBtn>
      )}
    </AppHeader>
  );
};

export default Header;
