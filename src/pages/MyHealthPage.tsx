import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ScreenId, UserProfile, HealthRecord, NotificationSettings, AirData } from '../types';
import Header from '../components/Header';
import ProfilePage from './ProfilePage';
import RiskPage from './RiskPage';
import RecordPage from './RecordPage';
import SettingsPage from './SettingsPage';

interface MyHealthPageProps {
  region: string;
  airData: AirData;
  profile: UserProfile | null;
  records: HealthRecord[];
  settings: NotificationSettings;
  onSaveProfile: (profile: UserProfile) => void;
  onSaveRecord: (symptoms: string[], severity: number, inhalerCount?: number) => void;
  onUpdateSettings: (settings: NotificationSettings) => void;
  onResetData: () => void;
  onNavigate: (id: ScreenId) => void;
  initialSubTab?: 'risk' | 'record' | 'profile' | 'settings';
  hideTabs?: ('risk' | 'record' | 'profile' | 'settings')[];
}

const HealthContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const SubTabBar = styled.div`
  display: flex;
  background: rgba(30, 144, 214, 0.06);
  padding: 4px;
  margin: 16px 24px 8px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(30, 144, 214, 0.1);
  backdrop-filter: blur(10px);
`;

const SubTabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 8px 4px;
  border: none;
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.accent : theme.text.muted)};
  font-weight: 700;
  font-size: 13px;
  border-radius: calc(${({ theme }) => theme.radius.md} - 2px);
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${({ $active }) => ($active ? '0 2px 8px rgba(30, 144, 214, 0.15)' : 'none')};
  font-family: inherit;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

type SubTab = 'risk' | 'record' | 'profile' | 'settings';

export const MyHealthPage: React.FC<MyHealthPageProps> = ({
  region,
  airData,
  profile,
  records,
  settings,
  onSaveProfile,
  onSaveRecord,
  onUpdateSettings,
  onResetData,
  onNavigate,
  initialSubTab,
  hideTabs,
}) => {
  const [activeTab, setActiveTab] = useState<SubTab>('profile');

  // Sync with initialSubTab or force 'profile' if profile doesn't exist
  useEffect(() => {
    if (!profile) {
      setActiveTab('profile');
    } else if (initialSubTab) {
      setActiveTab(initialSubTab);
    } else {
      setActiveTab('risk');
    }
  }, [profile, initialSubTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'risk':
        return (
          <RiskPage
            region={region}
            airData={airData}
            profile={profile}
            records={records}
            onNavigate={onNavigate}
            hideHeader
          />
        );
      case 'record':
        return (
          <RecordPage
            records={records}
            onSaveRecord={onSaveRecord}
            hideHeader
          />
        );
      case 'profile':
        return (
          <ProfilePage
            profile={profile}
            onSaveProfile={onSaveProfile}
            onNavigate={(id) => {
              // If saved, switch to risk tab instead of navigating away
              if (id === 'home') {
                setActiveTab('risk');
              } else {
                onNavigate(id);
              }
            }}
            hideHeader
          />
        );
      case 'settings':
        return (
          <SettingsPage
            settings={settings}
            profile={profile}
            onUpdateSettings={onUpdateSettings}
            onNavigate={(id) => {
              if (id === 'profile') {
                setActiveTab('profile');
              } else {
                onNavigate(id);
              }
            }}
            onResetData={onResetData}
            hideHeader
          />
        );
      default:
        return null;
    }
  };

  return (
    <HealthContainer>
      <Header />
      
      {profile && (
        <SubTabBar>
          {(!hideTabs || !hideTabs.includes('risk')) && (
            <SubTabButton $active={activeTab === 'risk'} onClick={() => setActiveTab('risk')}>
              위험 분석
            </SubTabButton>
          )}
          {(!hideTabs || !hideTabs.includes('record')) && (
            <SubTabButton $active={activeTab === 'record'} onClick={() => setActiveTab('record')}>
              증상 기록
            </SubTabButton>
          )}
          {(!hideTabs || !hideTabs.includes('profile')) && (
            <SubTabButton $active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>
              프로필 설정
            </SubTabButton>
          )}
          {(!hideTabs || !hideTabs.includes('settings')) && (
            <SubTabButton $active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
              앱 설정
            </SubTabButton>
          )}
        </SubTabBar>
      )}

      {renderContent()}
    </HealthContainer>
  );
};

export default MyHealthPage;
