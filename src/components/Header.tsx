import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  showRegionButton?: boolean;
  region?: string;
  onRegionClick?: () => void;
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
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, ${({ theme }) => theme.accent}, #0A6EBD);
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 0 12px ${({ theme }) => theme.accentGlow};
`;

const LogoText = styled.span`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.text.primary};

  span {
    color: ${({ theme }) => theme.accent};
  }
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

  &:hover {
    background: rgba(30,144,214,0.18);
  }
`;

export const Header: React.FC<HeaderProps> = ({
  showRegionButton = false,
  region = '',
  onRegionClick,
}) => {
  return (
    <AppHeader>
      <AppLogo>
        <LogoIcon>✈️</LogoIcon>
        <LogoText>Air <span>Letter</span></LogoText>
      </AppLogo>
      {showRegionButton && (
        <HeaderRegion onClick={onRegionClick}>
          <span>📍</span>
          <span>{region}</span>
          <span>›</span>
        </HeaderRegion>
      )}
    </AppHeader>
  );
};

export default Header;
