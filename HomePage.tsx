import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AirData, UserProfile, AirLevel, ScreenId } from '../types';
import { REGION_MAP } from '../data/guideData';

interface HomePageProps {
  region: string;
  airData: AirData;
  profile: UserProfile | null;
  records?: any;
  onNavigate: (id: ScreenId) => void;
  onRegionChange?: (region: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px 80px;
  gap: 18px;
  animation: fadeInUp 0.35s ease;
  background: transparent;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.accent};
  
  svg {
    width: 26px;
    height: 26px;
  }
`;

const LogoText = styled.h1`
  font-size: 19px;
  font-weight: 800;
  color: ${({ theme }) => theme.accent};
  letter-spacing: -0.5px;
`;

const DateSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.secondary};

  span.day {
    color: ${({ theme }) => theme.accent};
    margin-left: 4px;
    font-weight: 800;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  align-self: flex-start;
`;

const LocationSelector = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #FFFFFF;
  border: 1.5px solid #F3ECE9;
  border-radius: 12px;
  padding: 8px 14px;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.02);
  transition: all 0.2s ease;

  &:hover {
    background: #FAF8F6;
    border-color: #EBE5E2;
  }

  .pin-icon {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text.secondary};
  }

  .arrow-icon {
    font-size: 11px;
    color: ${({ theme }) => theme.text.muted};
    margin-left: 2px;
  }
`;

const DropdownOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 9999;
  background: transparent;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  background: #FFFFFF;
  border: 1.5px solid #F3ECE9;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(92, 61, 53, 0.08);
  z-index: 10000;
  width: 140px;
  max-height: 240px;
  overflow-y: auto;
  padding: 6px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text.muted};
    border-radius: 2px;
  }
`;

const DropdownItem = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: ${({ $active, theme }) => ($active ? theme.accentGlow : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.accent : theme.text.primary)};
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  font-size: 13px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  font-family: inherit;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(196, 81, 49, 0.05);
    color: ${({ theme }) => theme.accent};
  }
`;

// Main Card
const MainCard = styled.div`
  background: #FFFFFF;
  border: 1.5px solid #F3ECE9;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 6px 20px rgba(92, 61, 53, 0.02);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.accent};
  font-size: 15px;
  font-weight: 800;

  .warning-icon {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.accent};
  }
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  white-space: pre-line;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.04);
`;

// Action buttons
const ActionRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const OuterButtonWrapper = styled.div<{ $color: string }>`
  flex: 1;
  border: 2px dashed ${({ $color }) => $color}40;
  border-radius: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionButton = styled.button<{ $color: string }>`
  width: 100%;
  background: #FFFFFF;
  border: 2.5px solid ${({ $color }) => $color};
  border-radius: 15px;
  padding: 16px 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #FAF8F6;
    transform: translateY(-2px);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ $color }) => $color};
  }

  .text {
    font-size: 13px;
    font-weight: 800;
    color: ${({ $color }) => $color};
  }
`;

// Medical Info Banner
const BannerButton = styled.button`
  width: 100%;
  background: #EBE5E2;
  border: none;
  border-radius: 18px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    background: #E3DDD9;
  }

  .med-icon {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.accent};
    flex-shrink: 0;
  }

  .text {
    flex: 1;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};
  }

  .arrow {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text.secondary};
    font-weight: bold;
    font-size: 14px;
  }
`;

const FooterNote = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
  transition: color 0.15s ease;
  align-self: center;
  font-family: inherit;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const ProfileBanner = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #FFF4F0 0%, #FCDAD0 100%);
  border: 1.5px solid #F0C4B8;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    border-color: #C45131;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(196, 81, 49, 0.12);
  }

  .icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #C45131;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .title {
    font-size: 13px;
    font-weight: 800;
    color: #5C3D35;
  }

  .subtitle {
    font-size: 11px;
    color: #A38F8A;
  }

  .arrow {
    font-size: 16px;
    color: #C45131;
    font-weight: 800;
  }
`;

const Toast = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 85px;
  left: 50%;
  transform: translateX(-50%) translateY(${({ $visible }) => ($visible ? '0' : '20px')});
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  pointer-events: none;
  background: rgba(92, 61, 53, 0.9);
  color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  z-index: 10000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  white-space: nowrap;
`;

const ConnectSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ConnectSectionLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #B0A09C;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding: 0 2px;
`;

const GuardianCard = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
  border: 1.5px solid #BFDBFE;
  border-radius: 18px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    border-color: #93C5FD;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.12);
  }
`;

const ElderCard = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #FFF8F2 0%, #FFF0E6 100%);
  border: 1.5px solid #FCDAD0;
  border-radius: 18px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    border-color: #F0A88F;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(139, 58, 43, 0.10);
  }
`;

const CardIconCircle = styled.div<{ $blue?: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ $blue }) => ($blue ? '#2563EB' : '#8B3A2B')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  flex-shrink: 0;
  font-size: 20px;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.div<{ $blue?: boolean }>`
  font-size: 14px;
  font-weight: 800;
  color: ${({ $blue }) => ($blue ? '#1E3A8A' : '#5C2D1E')};
  margin-bottom: 3px;
`;

const CardSub = styled.div`
  font-size: 11px;
  color: #9CA3AF;
  line-height: 1.5;
`;

const CardArrow = styled.div<{ $blue?: boolean }>`
  font-size: 18px;
  color: ${({ $blue }) => ($blue ? '#2563EB' : '#8B3A2B')};
  font-weight: 800;
`;

export const HomePage: React.FC<HomePageProps> = ({
  region,
  airData,
  profile,
  records,
  onNavigate,
  onRegionChange,
}) => {
  const { level } = airData;
  const [isOpen, setIsOpen] = useState(false);
  const [toastText, setToastText] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const regionList = Object.keys(REGION_MAP);

  // Dynamic Date Formatting
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const dateVal = now.getDate();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayOfWeek = dayNames[now.getDay()];


  const handleSelectRegion = (reg: string) => {
    setIsOpen(false);
    if (onRegionChange) onRegionChange(reg);
  };

  const triggerToast = (text: string) => {
    setToastText(text);
    setToastVisible(true);
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  // Level mapping for warning style & content
  const getLevelInfo = (lvl: AirLevel) => {
    switch (lvl) {
      case 'good':
        return {
          title: "대기질 '좋음'",
          text: "오늘 대기 상태는 좋음이에요.\n마음 놓고 실외 활동을 즐기세요.",
          color: "#70A386",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          )
        };
      case 'moderate':
        return {
          title: "미세먼지 '보통'",
          text: "오늘 미세먼지는 보통이에요.\n가벼운 일상적인 야외활동은 괜찮습니다.",
          color: "#D69E6B",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          )
        };
      case 'hazardous':
        return {
          title: "미세먼지 '매우 나쁨'",
          text: "오늘 미세먼지는 매우 나쁨이에요.\n실외 활동을 피하고 창문을 닫으세요.",
          color: "#9E321E",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          )
        };
      case 'unhealthy':
      default:
        return {
          title: "미세먼지 '나쁨'",
          text: "오늘 미세먼지는 나쁨이에요.\n외출하실 때 마스크를 꼭 챙기세요.",
          color: "#C45131",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          )
        };
    }
  };

  const levelInfo = getLevelInfo(level);

  return (
    <Container>
      {/* Top Header Section */}
      <HeaderRow>
        <LogoSection>
          <LogoIcon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </LogoIcon>
          <LogoText>맑은숨</LogoText>
        </LogoSection>
        <DateSection>
          {year}년 {month}월 {dateVal}일
          <span className="day">{dayOfWeek}</span>
        </DateSection>
      </HeaderRow>

      {/* Location Dropdown selector */}
      <DropdownWrapper>
        <LocationSelector onClick={() => setIsOpen(prev => !prev)}>
          <span className="pin-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span>{region}</span>
          <span className="arrow-icon">{isOpen ? '▴' : '▾'}</span>
        </LocationSelector>

        {isOpen && (
          <>
            <DropdownOverlay onClick={() => setIsOpen(false)} />
            <DropdownMenu>
              {regionList.map(reg => (
                <DropdownItem
                  key={reg}
                  $active={reg === region}
                  onClick={() => handleSelectRegion(reg)}
                >
                  {reg}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </>
        )}
      </DropdownWrapper>

      {/* Profile Registration Banner - shown when profile is not set */}
      {!profile && (
        <ProfileBanner onClick={() => onNavigate('profile')}>
          <span className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <span className="content">
            <span className="title">건강 프로필을 등록해주세요</span>
            <span className="subtitle">맞춤형 건강 정보를 받아볼 수 있어요</span>
          </span>
          <span className="arrow">›</span>
        </ProfileBanner>
      )}

      {/* Main Alert Card */}
      <MainCard>
        <CardHeader>
          <span className="warning-icon">{levelInfo.icon}</span>
          <span>{levelInfo.title}</span>
        </CardHeader>
        <CardText>{levelInfo.text}</CardText>
        <CardImage src="/assets/road_trees.png" alt="전통 돌담길 가로수길 전경" />
      </MainCard>

      {/* Activity Buttons */}
      <ActionRow>
        <OuterButtonWrapper $color="#C45131">
          <ActionButton $color="#C45131" onClick={() => triggerToast('😷 미세먼지 마스크를 꼭 착용하시고 안전하게 다녀오세요!')}>
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <circle cx="12" cy="4" r="1.5" />
                <path d="M9 22l3-6v-5l-2-2.5V11" />
                <path d="M14 9.5L12 7.5l-2.5.5" />
                <path d="M15 22l-1.5-4.5-2.5-1.5" />
              </svg>
            </span>
            <span className="text">다녀올게요</span>
          </ActionButton>
        </OuterButtonWrapper>

        <OuterButtonWrapper $color="#8C7B78">
          <ActionButton $color="#8C7B78" onClick={() => triggerToast('🏡 실내 공기청정기를 가동하여 공기질을 쾌적하게 유지하세요!')}>
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            <span className="text">집에 있을게요</span>
          </ActionButton>
        </OuterButtonWrapper>
      </ActionRow>

      {/* Hospital Banner */}
      <BannerButton onClick={() => onNavigate('facilities')}>
        <span className="med-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="12" y1="10" x2="12" y2="16" />
            <line x1="9" y1="13" x2="15" y2="13" />
          </svg>
        </span>
        <span className="text">숨쉬기 불편하시면 근처 호흡기내과를 찾아보세요</span>
        <span className="arrow">&gt;</span>
      </BannerButton>

      {/* Guardian / Elder Entry Cards */}
      <ConnectSection>
        <ConnectSectionLabel>보호자 · 어르신 연결</ConnectSectionLabel>

        <GuardianCard onClick={() => onNavigate('guardian-login')}>
          <CardIconCircle $blue>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardIconCircle>
          <CardContent>
            <CardTitle $blue>보호자로 시작하기</CardTitle>
            <CardSub>카카오/구글 로그인 · 어르신 건강 데이터 실시간 모니터링</CardSub>
          </CardContent>
          <CardArrow $blue>›</CardArrow>
        </GuardianCard>

        <ElderCard onClick={() => onNavigate('elder-welcome')}>
          <CardIconCircle>
            👴
          </CardIconCircle>
          <CardContent>
            <CardTitle>어르신 연결 화면 보기</CardTitle>
            <CardSub>초대 링크를 받으셨나요? 도장 하나로 바로 연결돼요</CardSub>
          </CardContent>
          <CardArrow>›</CardArrow>
        </ElderCard>
      </ConnectSection>

      {/* Footer Ask Note */}
      <FooterNote onClick={() => onNavigate('record')}>
        오늘의 건강 일지 기록을 마쳤나요?
      </FooterNote>

      {/* Toast popup */}
      <Toast $visible={toastVisible}>{toastText}</Toast>
    </Container>
  );
};

export default HomePage;