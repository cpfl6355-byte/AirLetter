import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './style.css';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAirData } from './hooks/useAirData';
import { ScreenId, UserProfile, HealthRecord, NotificationSettings } from './types';
import { levelKo } from './utils/airQuality';

import HomePage from './pages/HomePage';
import StatusPage from './pages/StatusPage';
import MyHealthPage from './pages/MyHealthPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GuidePage from './pages/GuidePage';
import RecordPage from './pages/RecordPage';
import GuardianLoginPage from './pages/GuardianLoginPage';
import GuardianInvitePage from './pages/GuardianInvitePage';
import ElderWelcomePage from './pages/ElderWelcomePage';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  background: ${({ theme }) => theme.bg.primary};
  box-shadow: 0 0 40px rgba(92, 61, 53, 0.12), 0 0 0 1px rgba(196, 81, 49, 0.08);
  isolation: isolate;
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
  const [region, setRegion] = useLocalStorage<string>('region', '서울');
  const [profile, setProfile] = useLocalStorage<UserProfile | null>('profile', null);
  const [records, setRecords] = useLocalStorage<HealthRecord[]>('records', []);
  const [settings, setSettings] = useLocalStorage<NotificationSettings>('settings', {
    alert: false,
    report: false,
    reminder: false,
    accessibilityMode: false,
    ttsEnabled: false,
    medicationAlertTime: '08:00',
    medicationAlertOnWarning: false,
  });

  const { airData } = useAirData(region);




  // 🗣️ 오프라인 음성 안내 (TTS) 기능 구현
  useEffect(() => {
    if (settings.ttsEnabled && !airData.loading && activeScreen === 'home') {
      window.speechSynthesis?.cancel();

      const regionName = region;
      const dustLevel = levelKo(airData.level);
      const pm10Val = airData.pm10;
      
      let ttsText = `현재 ${regionName}의 미세먼지 상태는 ${dustLevel} 입니다. 미세먼지 농도는 ${pm10Val} 마이크로그램입니다. `;
      if (airData.level === 'unhealthy' || airData.level === 'hazardous') {
        ttsText += '공기질이 매우 나쁩니다. 외출을 삼가해 주시고, 외출 시 호흡기 흡입기를 반드시 휴대해 주세요.';
      } else {
        ttsText += '오늘 실외 운동 및 산책을 가볍게 하시기 좋은 대기 상태입니다.';
      }

      const utterance = new SpeechSynthesisUtterance(ttsText);
      utterance.lang = 'ko-KR';
      window.speechSynthesis?.speak(utterance);
    }

    return () => {
      window.speechSynthesis?.cancel();
    };
  }, [activeScreen, airData.loading, settings.ttsEnabled, region, airData.level, airData.pm10]);

  const handleSaveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    setRegion(newProfile.region);
  };

  const handleSaveRecord = (symptoms: string[], severity: number, inhalerCount?: number) => {
    const newRecord: HealthRecord = {
      id: Date.now(),
      date: new Date().toLocaleString('ko-KR'),
      symptoms,
      severity,
      inhalerCount,
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
            records={records}
            onNavigate={setActiveScreen}
            onRegionChange={setRegion}
          />
        );
      case 'status':
        return (
          <StatusPage
            region={region}
            airData={airData}
            profile={profile}
            onNavigate={setActiveScreen}
            onRegionChange={setRegion}
          />
        );
      case 'facilities':
        return (
          <FacilitiesPage
            region={region}
            onNavigate={setActiveScreen}
          />
        );
      case 'guide':
        return <GuidePage currentLevel={airData.level} />;
      
      // Health sub-tabs routing delegation
      case 'health':
        return (
          <MyHealthPage
            region={region}
            airData={airData}
            profile={profile}
            records={records}
            settings={settings}
            onSaveProfile={handleSaveProfile}
            onSaveRecord={handleSaveRecord}
            onUpdateSettings={setSettings}
            onResetData={handleResetData}
            onNavigate={setActiveScreen}
          />
        );
      case 'profile':
        return (
          <MyHealthPage
            region={region}
            airData={airData}
            profile={profile}
            records={records}
            settings={settings}
            onSaveProfile={handleSaveProfile}
            onSaveRecord={handleSaveRecord}
            onUpdateSettings={setSettings}
            onResetData={handleResetData}
            onNavigate={setActiveScreen}
            initialSubTab="profile"
            hideTabs={['record', 'settings']}
          />
        );
      case 'risk':
        return (
          <MyHealthPage
            region={region}
            airData={airData}
            profile={profile}
            records={records}
            settings={settings}
            onSaveProfile={handleSaveProfile}
            onSaveRecord={handleSaveRecord}
            onUpdateSettings={setSettings}
            onResetData={handleResetData}
            onNavigate={setActiveScreen}
            initialSubTab="risk"
          />
        );
      case 'record':
        return (
          <RecordPage
            records={records}
            profile={profile}
            onSaveRecord={handleSaveRecord}
            onNavigate={setActiveScreen}
          />
        );
      case 'settings':
        return (
          <MyHealthPage
            region={region}
            airData={airData}
            profile={profile}
            records={records}
            settings={settings}
            onSaveProfile={handleSaveProfile}
            onSaveRecord={handleSaveRecord}
            onUpdateSettings={setSettings}
            onResetData={handleResetData}
            onNavigate={setActiveScreen}
            initialSubTab="settings"
          />
        );
      case 'guardian-login':
        return <GuardianLoginPage onNavigate={setActiveScreen} />;
      case 'guardian-invite':
        return <GuardianInvitePage onNavigate={setActiveScreen} />;
      case 'elder-welcome':
        return <ElderWelcomePage inviterName="영희" onNavigate={setActiveScreen} />;
      default:
        return (
          <HomePage
            region={region}
            airData={airData}
            profile={profile}
            records={records}
            onNavigate={setActiveScreen}
            onRegionChange={setRegion}
          />
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* ♿ 큰 글씨 & 고대비 접근성 모드 스타일 태그 동적 주입 */}
      {settings.accessibilityMode && (
        <style dangerouslySetInnerHTML={{ __html: `
          body, html, #root {
            font-size: 16px !important;
          }
          /* Increase spacing and font sizes */
          h1, h2, h3, h4, h5, h6, span, div, p, button, label, input, select {
            font-size: calc(100% + 2px) !important;
            line-height: 1.6 !important;
          }
          /* High contrast: make backgrounds lighter/darker and text sharper */
          main, div, section, article {
            text-shadow: none !important;
          }
          button {
            border: 2.5px solid #000000 !important;
            font-weight: 800 !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
          /* Keep level badges readable */
          .badge, [class*="LevelBadge"] {
            border: 2px solid #000000 !important;
            font-weight: 900 !important;
            color: #000000 !important;
            background: #ffffff !important;
          }
        `}} />
      )}
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