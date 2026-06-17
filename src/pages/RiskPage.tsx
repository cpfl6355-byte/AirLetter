import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AirData, UserProfile, ScreenId } from '../types';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import { calculateRisk } from '../utils/riskCalculator';
import { levelKo, levelColor } from '../utils/airQuality';

interface RiskPageProps {
  region: string;
  airData: AirData;
  profile: UserProfile | null;
  onNavigate: (id: ScreenId) => void;
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

const breathe = keyframes`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.04); }
`;

const RiskMeter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const RiskCircle = styled.div<{ $cls: string }>`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid;
  position: relative;
  transition: all 0.6s ease;
  animation: ${breathe} 3s infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 2px solid;
    opacity: 0.3;
    animation: ${breathe} 3s infinite reverse;
  }

  /* Color mappings based on class */
  border-color: ${({ $cls, theme }) => {
    if ($cls === 'risk-safe') return theme.colors.good;
    if ($cls === 'risk-caution') return theme.colors.moderate;
    if ($cls === 'risk-danger') return theme.colors.unhealthy;
    return theme.colors.hazardous;
  }};
  
  color: ${({ $cls, theme }) => {
    if ($cls === 'risk-safe') return theme.colors.good;
    if ($cls === 'risk-caution') return theme.colors.moderate;
    if ($cls === 'risk-danger') return theme.colors.unhealthy;
    return theme.colors.hazardous;
  }};

  &::before {
    border-color: ${({ $cls, theme }) => {
      if ($cls === 'risk-safe') return theme.colors.good;
      if ($cls === 'risk-caution') return theme.colors.moderate;
      if ($cls === 'risk-danger') return theme.colors.unhealthy;
      return theme.colors.hazardous;
    }};
  }
`;

const RiskNum = styled.div`
  font-size: 42px;
  font-weight: 900;
  line-height: 1;
`;

const RiskOf5 = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text.muted};
`;

const RiskLabelText = styled.div<{ $color: string }>`
  font-size: 18px;
  font-weight: 700;
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ $color }) => $color};
`;

const FactorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(30,144,214,0.08);

  span:first-child {
    font-size: 20px;
  }

  span:last-child {
    font-size: 14px;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const CautionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;

  span:first-child {
    font-weight: bold;
  }

  span:last-child {
    font-size: 14px;
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

export const RiskPage: React.FC<RiskPageProps> = ({
  region,
  airData,
  profile,
  onNavigate,
}) => {
  const { level, pm10, pm25, alarms } = airData;
  const risk = calculateRisk(profile, level);
  const color = levelColor(level);

  const conditions = profile?.conditions || [];
  const factorList = [
    { cond: true, icon: '🌫️', text: `현재 미세먼지 ${levelKo(level)} (PM10: ${pm10}㎍/m³)` },
    { cond: alarms.length > 0, icon: '🚨', text: `에어코리아 ${alarms[0]?.issueGbn || ''} 발령 중` },
    { cond: conditions.includes('respiratory'), icon: '🫁', text: '호흡기 질환 보유자 (+2점)' },
    { cond: conditions.includes('allergy'), icon: '🌸', text: '알레르기 보유 (+1점)' },
    { cond: conditions.includes('elderly'), icon: '👴', text: '노약자 (+1점)' },
    { cond: conditions.includes('child'), icon: '🧒', text: '어린이 (+1점)' },
    { cond: conditions.includes('pregnant'), icon: '🤰', text: '임산부 (+1점)' },
  ].filter(f => f.cond);

  const cautionMap = {
    good: ['마스크 착용 불필요', '야외활동 자유롭게'],
    moderate: ['민감군은 장시간 야외활동 자제', '수분 충분히 섭취'],
    unhealthy: ['외출 시 KF94 마스크 필수', '귀가 후 세안·샤워', '공기청정기 가동'],
    hazardous: ['외출 절대 자제', '모든 창문 밀폐', '이상 증상 시 즉시 의사 상담'],
  };

  const cautions = cautionMap[level] || [];

  return (
    <div>
      <Header />
      <ScreenHeader>
        <h2>위험도 분석 결과</h2>
        <p>{`📍 ${region} · PM10: ${pm10} · PM2.5: ${pm25}`}</p>
      </ScreenHeader>

      {/* 위험도 원형 미터 */}
      <RiskMeter>
        <RiskCircle $cls={risk.cls}>
          <RiskNum>{risk.score}</RiskNum>
          <RiskOf5>/ 5</RiskOf5>
        </RiskCircle>
        <RiskLabelText $color={color}>{risk.label}</RiskLabelText>
      </RiskMeter>

      {/* 위험 요인 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <SectionTitle>위험 요인 분석</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {factorList.map((f, i) => (
              <FactorItem key={i}>
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </FactorItem>
            ))}
          </div>
        </Card>
      </div>

      {/* 주의사항 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <SectionTitle>주의사항</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {cautions.map((c, i) => (
              <CautionItem key={i}>
                <span style={{ color }}>•</span>
                <span>{c}</span>
              </CautionItem>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Button onClick={() => onNavigate('guide')}>
          📖 건강 가이드 보기
        </Button>
      </div>
    </div>
  );
};

export default RiskPage;
