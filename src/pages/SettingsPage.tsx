import React from 'react';
import styled from 'styled-components';
import { NotificationSettings, ScreenId } from '../types';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import Button from '../components/Button';

interface SettingsPageProps {
  settings: NotificationSettings;
  onUpdateSettings: (settings: NotificationSettings) => void;
  onNavigate: (id: ScreenId) => void;
  onResetData: () => void;
}

const ScreenHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};

  h2 {
    font-size: 22px;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text.muted};
    margin-top: 4px;
  }
`;

const SectionTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SettingsRow = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(30,144,214,0.08);
  cursor: pointer;
  transition: background ${({ theme }) => theme.transition.fast};

  &:hover {
    background: rgba(30,144,214,0.05);
  }
`;

const SettingsRowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SettingsRowIcon = styled.div`
  width: 38px;
  height: 38px;
  background: rgba(30,144,214,0.1);
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const SettingsRowTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;

const SettingsRowDesc = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text.muted};
  margin-top: 1px;
`;

const SettingsRowArrow = styled.div`
  color: ${({ theme }) => theme.text.muted};
  font-size: 18px;
`;

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
`;

const ToggleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToggleTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;

const ToggleDesc = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text.muted};
  margin-top: 2px;
`;

const ResetButton = styled(Button)`
  border-color: rgba(232, 64, 64, 0.3);
  color: ${({ theme }) => theme.colors.hazardous};

  &:hover {
    background: rgba(232, 64, 64, 0.08);
    color: ${({ theme }) => theme.colors.hazardous};
  }
`;

export const SettingsPage: React.FC<SettingsPageProps> = ({
  settings,
  onUpdateSettings,
  onNavigate,
  onResetData,
}) => {
  const handleToggle = (key: keyof NotificationSettings) => {
    onUpdateSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  return (
    <div>
      <Header />
      <ScreenHeader>
        <h2>설정</h2>
        <p>앱 환경을 설정하세요</p>
      </ScreenHeader>

      {/* 프로필 수정 바로가기 */}
      <SettingsRow onClick={() => onNavigate('profile')}>
        <SettingsRowLeft>
          <SettingsRowIcon>👤</SettingsRowIcon>
          <div>
            <SettingsRowTitle>건강 프로필 수정</SettingsRowTitle>
            <SettingsRowDesc>나이, 건강상태, 지역 변경</SettingsRowDesc>
          </div>
        </SettingsRowLeft>
        <SettingsRowArrow>›</SettingsRowArrow>
      </SettingsRow>

      {/* 알림 설정 */}
      <div style={{ padding: '0 24px', marginTop: '24px' }}>
        <SectionTitle>알림 설정</SectionTitle>
        
        <ToggleWrap>
          <ToggleInfo>
            <ToggleTitle>미세먼지 경보 알림</ToggleTitle>
            <ToggleDesc>나쁨 이상 시 알림</ToggleDesc>
          </ToggleInfo>
          <ToggleSwitch isOn={settings.alert} onClick={() => handleToggle('alert')} />
        </ToggleWrap>

        <ToggleWrap>
          <ToggleInfo>
            <ToggleTitle>매일 아침 리포트</ToggleTitle>
            <ToggleDesc>오전 7시 대기질 요약</ToggleDesc>
          </ToggleInfo>
          <ToggleSwitch isOn={settings.report} onClick={() => handleToggle('report')} />
        </ToggleWrap>

        <ToggleWrap style={{ borderBottom: 'none' }}>
          <ToggleInfo>
            <ToggleTitle>건강 기록 리마인더</ToggleTitle>
            <ToggleDesc>매일 저녁 증상 기록 알림</ToggleDesc>
          </ToggleInfo>
          <ToggleSwitch isOn={settings.reminder} onClick={() => handleToggle('reminder')} />
        </ToggleWrap>
      </div>

      {/* 데이터 초기화 */}
      <div style={{ padding: '0 24px', marginTop: '32px' }}>
        <ResetButton $variant="ghost" onClick={onResetData}>
          🗑️ 모든 데이터 초기화
        </ResetButton>
      </div>

      {/* 앱 정보 */}
      <div style={{ padding: '0 24px 24px', marginTop: '32px', textAlign: 'center' }}>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Air Letter v1.0.0</div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
          미세먼지 건강 가이드 앱
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
