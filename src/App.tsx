import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './style.css'; // 👈 맨 위로 옮겼습니다!
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAirData } from './hooks/useAirData';
import { ScreenId, UserProfile, HealthRecord, NotificationSettings } from './types';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import RiskPage from './pages/RiskPage';
import GuidePage from './pages/GuidePage';
import RecordPage from './pages/RecordPage';
import SettingsPage from './pages/SettingsPage';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  /* 스크롤 시 고정되는 도심 미세먼지 배경 이미지 */
  background: url('/assets/bg-fixed.jpg') no-repeat center center;
  background-size: cover;
  box-shadow: 0 0 60px rgba(30, 100, 180, 0.15), 0 0 0 1px rgba(30,144,214,0.08);
  isolation: isolate;

  /* 배경 이미지 오버레이 (대기 오염 느낌의 틴트와 대비 향상) */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, rgba(13, 45, 74, 0.2) 0%, rgba(13, 45, 74, 0.45) 100%);
    z-index: 0;
    pointer-events: none;
  }
`;

const ScreenContainer = styled.main`
  position: relative;
  z-index: 1;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 90px;
  animation: fadeInUp 0.35s ease;
  /* 뒤의 고정 배경이 보이도록 투명 처리 */
  background: transparent;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 2px;
  }
`;

export const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useLocalStorage<ScreenId>('currentScreen', 'home');
  const [region, setRegion] = useLocalStorage<string>('region', '서울시 강남구');
  const [profile, setProfile] = useLocalStorage<UserProfile | null>('profile', null);
  const [records, setRecords] = useLocalStorage<HealthRecord[]>('records', []);
  const [settings, setSettings] = useLocalStorage<NotificationSettings>('settings', {
    alert: false,
    report: false,
    reminder: false,
  });

  const { airData } = useAirData(region);

  // If profile is not registered yet, force redirect to profile setup
  useEffect(() => {
    if (!profile) {
      setActiveScreen('profile');
    }
  }, [profile, setActiveScreen]);

  const handleSaveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    setRegion(newProfile.region);
  };

  const handleSaveRecord = (symptoms: string[], severity: number) => {
    const newRecord: HealthRecord = {
      id: Date.now(),
      date: new Date().toLocaleString('ko-KR'),
      symptoms,
      severity,
    };
    setRecords([...records, newRecord]);
  };

  const handleResetData = () => {
    if (window.confirm('모든 데이터를 초기화하시겠습니까?')) {
      window.localStorage.removeItem('airletter_profile');
      window.localStorage.removeItem('airletter_region');
      window.localStorage.removeItem('airletter_records');
      window.localStorage.removeItem('airletter_settings');
      window.localStorage.removeItem('airletter_currentScreen');
      window.location.reload();
    }
  };

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'home':
        return (
          <HomePage
            region={region}
            airData={airData}
            profile={profile}
            onNavigate={setActiveScreen}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            profile={profile}
            onSaveProfile={handleSaveProfile}
            onNavigate={setActiveScreen}
          />
        );
      case 'risk':
        return (
          <RiskPage
            region={region}
            airData={airData}
            profile={profile}
            onNavigate={setActiveScreen}
          />
        );
      case 'guide':
        return <GuidePage currentLevel={airData.level} />;
      case 'record':
        return <RecordPage records={records} onSaveRecord={handleSaveRecord} />;
      case 'settings':
        return (
          <SettingsPage
            settings={settings}
            onUpdateSettings={setSettings}
            onNavigate={setActiveScreen}
            onResetData={handleResetData}
          />
        );
      default:
        return (
          <HomePage
            region={region}
            airData={airData}
            profile={profile}
            onNavigate={setActiveScreen}
          />
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <ScreenContainer key={activeScreen}>
          {renderActiveScreen()}
        </ScreenContainer>
        <Footer activeScreen={activeScreen} onNavigate={setActiveScreen} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;