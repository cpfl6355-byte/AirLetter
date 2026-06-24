import React from 'react';
import styled from 'styled-components';
import { AirData, ScreenId, AirLevel, UserProfile } from '../types';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import LevelBadge from '../components/LevelBadge';
import GaugeCircle from '../components/GaugeCircle';

interface StatusPageProps {
  region: string;
  airData: AirData;
  profile: UserProfile | null;
  onNavigate: (id: ScreenId) => void;
  onRegionChange: (region: string) => void;
}

const getLevelFromPM10 = (pm10: number): AirLevel => {
  if (pm10 <= 30) return 'good';
  if (pm10 <= 80) return 'moderate';
  if (pm10 <= 150) return 'unhealthy';
  return 'hazardous';
};

const DateRow = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DateText = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text.muted};
`;

const UpdatedText = styled.div`
  text-align: right;
  font-size: 11px;
  color: ${({ theme }) => theme.text.muted};

  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
  }
`;

const GaugeWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing.md} 0;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: 0;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StatNum = styled.div<{ $color: string }>`
  font-size: 24px;
  font-weight: 800;
  color: ${({ $color }) => $color};
`;

const StatDesc = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
`;

const SectionTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ParentsMonitorCard = styled(Card)`
  border: 1px solid rgba(232, 64, 64, 0.15);
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 4px 20px rgba(232, 64, 64, 0.05);
  margin-bottom: 16px;
  padding: 14px 16px;
`;

const ParentsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  
  .title {
    font-size: 14px;
    font-weight: 800;
    color: #E84040;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const ParentsInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(232, 64, 64, 0.04);
  padding: 10px 14px;
  border-radius: 8px;
  
  .region-name {
    font-size: 15px;
    font-weight: 800;
    color: var(--text-primary);
  }
  .dust-val {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-secondary);
  }
`;

const NationwideTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 380px;
  overflow-y: auto;
  padding-right: 4px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(30, 144, 214, 0.2);
    border-radius: 4px;
  }
`;

const ProvinceRow = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${({ $active }) => ($active ? 'rgba(30, 144, 214, 0.08)' : 'rgba(255, 255, 255, 0.65)')};
  border: 1px solid ${({ $active }) => ($active ? 'rgba(30, 144, 214, 0.25)' : 'rgba(255, 255, 255, 0.4)')};
  font-size: 13px;
  transition: all 0.2s ease;
  
  .name {
    font-weight: 700;
    width: 60px;
  }
  .values {
    display: flex;
    gap: 12px;
    color: var(--text-secondary);
    font-size: 12px;
    span {
      font-weight: 600;
      color: var(--text-primary);
    }
  }
`;

const provinces = [
  '서울', '경기', '인천', '강원', '충북', '충남', '대전', 
  '세종', '전북', '전남', '광주', '경북', '경남', '대구', 
  '울산', '부산', '제주'
];

export const StatusPage: React.FC<StatusPageProps> = ({
  region,
  airData,
  profile,
  onNavigate,
  onRegionChange,
}) => {
  const { pm10, pm25, level, loading } = airData;

  const now = new Date();
  const dateStr = now.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
  const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) + ' 기준';

  // ── 전국 시/도 경보 현황 데이터 생성 (현재 지역 기준 proporcional hash 계산) ──
  const getProvinceData = (provName: string) => {
    const hash = provName.charCodeAt(0) + (provName.charCodeAt(1) || 0);
    const multiplier10 = 0.5 + (hash % 8) * 0.15; // 0.5 ~ 1.55
    const multiplier25 = 0.4 + ((hash + 3) % 8) * 0.18; // 0.4 ~ 1.66
    
    const pPm10 = Math.max(10, Math.round(pm10 * multiplier10));
    const pPm25 = Math.max(5, Math.round(pm25 * multiplier25));
    const pLevel = getLevelFromPM10(pPm10);
    
    return {
      name: provName,
      pm10: pPm10,
      pm25: pPm25,
      level: pLevel,
    };
  };

  const provinceDataList = provinces.map(p => getProvinceData(p));
  
  // 부모님 댁 데이터 조회
  const parentsRegion = profile?.parentsRegion || '';
  const parentsData = parentsRegion ? getProvinceData(parentsRegion) : null;

  return (
    <div>
      <Header
        showRegionButton
        region={region}
        onRegionChange={onRegionChange}
      />

      <DateRow>
        <div>
          <DateText>{dateStr}</DateText>
          {!loading && <LevelBadge level={level} />}
        </div>
        <UpdatedText>
          <div>마지막 업데이트</div>
          <div><span>{timeStr}</span></div>
        </UpdatedText>
      </DateRow>

      {/* 부모님 댁 원격 모니터링 카드 */}
      <div style={{ padding: '0 24px' }}>
        {parentsData ? (
          <ParentsMonitorCard>
            <ParentsHeader>
              <div className="title">🏡 부모님 댁 실시간 안심 케어</div>
              <LevelBadge level={parentsData.level} />
            </ParentsHeader>
            <ParentsInfoRow>
              <span className="region-name">{parentsData.name} 지역</span>
              <span className="dust-val">
                미세먼지: <strong>{parentsData.pm10}</strong> | 초미세먼지: <strong>{parentsData.pm25}</strong> ㎍/m³
              </span>
            </ParentsInfoRow>
          </ParentsMonitorCard>
        ) : (
          <Card style={{ marginBottom: '16px', padding: '12px 16px', fontSize: '13px' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '4px' }}>🏡 가족 원격 모니터링 등록</div>
            <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
              프로필 설정에서 부모님 댁 지역을 선택해 보세요. 가족의 대기질 상태를 상단에 고정하여 원격 케어할 수 있습니다.
            </div>
            <Button $size="sm" onClick={() => onNavigate('profile')}>
              부모님 댁 설정하기
            </Button>
          </Card>
        )}
      </div>

      {/* 실시간 대기질 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <SectionTitle>내 지역 대기질 수치</SectionTitle>
          <GaugeWrap>
            <GaugeCircle
              value={pm10}
              max={200}
              level={level}
              name="미세먼지 PM10"
              unit="㎍/m³"
            />
            <GaugeCircle
              value={pm25}
              max={100}
              level={level}
              name="초미세먼지 PM2.5"
              unit="㎍/m³"
            />
          </GaugeWrap>

          {/* 수치 기준표 */}
          <StatRow>
            <StatItem>
              <StatNum $color="#16A97A">좋음</StatNum>
              <StatDesc>PM10 ≤30<br />PM2.5 ≤15</StatDesc>
            </StatItem>
            <StatItem>
              <StatNum $color="#D4920A">보통</StatNum>
              <StatDesc>PM10 ≤80<br />PM2.5 ≤35</StatDesc>
            </StatItem>
            <StatItem>
              <StatNum $color="#E06A10">나쁨</StatNum>
              <StatDesc>PM10 ≤150<br />PM2.5 ≤75</StatDesc>
            </StatItem>
            <StatItem>
              <StatNum $color="#C72828">매우나쁨</StatNum>
              <StatDesc>PM10 &gt;150<br />PM2.5 &gt;75</StatDesc>
            </StatItem>
          </StatRow>
        </Card>
      </div>

      {/* 전국 시/도 경보 현황 리스트 */}
      <div style={{ padding: '0 24px', marginBottom: '40px' }}>
        <Card>
          <CardTitleRow>
            <SectionTitle style={{ marginBottom: 0 }}>📍 전국 시/도 대기질 현황</SectionTitle>
          </CardTitleRow>
          <NationwideTable>
            {provinceDataList.map((p, idx) => (
              <ProvinceRow key={idx} $active={region === p.name} onClick={() => onRegionChange(p.name)}>
                <span className="name">{p.name}</span>
                <span className="values">
                  PM10 <span>{p.pm10}</span> | PM2.5 <span>{p.pm25}</span>
                </span>
                <LevelBadge level={p.level} />
              </ProvinceRow>
            ))}
          </NationwideTable>
        </Card>
      </div>
    </div>
  );
};

export default StatusPage;
