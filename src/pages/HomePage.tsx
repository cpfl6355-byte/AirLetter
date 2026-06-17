import React from 'react';
import styled from 'styled-components';
import { AirData, UserProfile, ScreenId, AirLevel } from '../types';
import Header from '../components/Header';
import AlertBanner from '../components/AlertBanner';
import Card from '../components/Card';
import Button from '../components/Button';
import LevelBadge from '../components/LevelBadge';
import GaugeCircle from '../components/GaugeCircle';
import MascotCharacter from '../components/MascotCharacter';
import { levelKo, levelColor } from '../utils/airQuality';
import { calculateRisk } from '../utils/riskCalculator';

interface HomePageProps {
  region: string;
  airData: AirData;
  profile: UserProfile | null;
  onNavigate: (id: ScreenId) => void;
}

// PM10 수치를 등급으로 변환하는 보조 함수 (예보/지도 카드의 색상 표시용)
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

const RiskSummaryCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const GuideSummaryText = styled.div`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RiskLabel = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

/* ── 날씨 연계 정보 카드 ── */
const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const WeatherSummaryText = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.muted};
  text-align: right;
`;

const WeatherGrid = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px dashed rgba(30, 144, 214, 0.15);
`;

const WeatherItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WeatherIcon = styled.span`
  font-size: 20px;
`;

const WeatherVal = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
`;

const WeatherLbl = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.text.muted};
`;

/* ── 시간대별 예측 카드 ── */
const BadgeRecommend = styled.span`
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(30, 144, 214, 0.1);
  color: ${({ theme }) => theme.accent};
  white-space: nowrap;
`;

const ForecastChart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ForecastBarItem = styled.div<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  ${({ $highlight }) => $highlight && `font-weight: 800;`}
`;

const ForecastTime = styled.span`
  font-size: 12px;
  width: 56px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.text.muted};
`;

const BarContainer = styled.div`
  flex: 1;
  height: 8px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(30, 144, 214, 0.08);
  overflow: hidden;
`;

const BarFill = styled.div<{ $width: number; $color: string }>`
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.full};
  width: ${({ $width }) => $width}%;
  background: ${({ $color }) => $color};
  transition: width 0.5s ease;
`;

const ForecastVal = styled.span`
  font-size: 13px;
  font-weight: 700;
  width: 32px;
  text-align: right;
  color: ${({ theme }) => theme.text.primary};
`;

/* ── 지역 지도 뷰 카드 ── */
const MapViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, rgba(30, 144, 214, 0.06), rgba(30, 144, 214, 0.14));
  overflow: hidden;
`;

const MapNode = styled.div<{ $top: string; $left: string; $color: string; $active?: boolean }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
  font-size: 11px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $color }) => $color};
  color: #fff;
  white-space: nowrap;
  ${({ $active }) =>
    $active && `box-shadow: 0 0 0 3px rgba(255,255,255,0.7); z-index: 2;`}
`;

const MapLegend = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: 11px;
  color: ${({ theme }) => theme.text.muted};
`;

const LegendDot = styled.span<{ $color: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  margin-right: 4px;
`;

export const HomePage: React.FC<HomePageProps> = ({
  region,
  airData,
  profile,
  onNavigate,
}) => {
  const { pm10, pm25, level, alarms, loading } = airData;

  const now = new Date();
  const dateStr = now.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
  const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) + ' 기준';

  // Active alarms filtering
  const todayStr = now.toISOString().split('T')[0];
  const activeAlarms = alarms.filter(a => !a.clearDate || a.clearDate >= todayStr);
  const isAlarmActive = !loading && activeAlarms.length > 0;
  const alarmGbn = activeAlarms.some(a => a.issueGbn === '경보') ? '경보' : '주의보';
  const alertText = `${region} 미세먼지 ${alarmGbn} 발령 중 — 에어코리아 실시간 데이터`;

  const summaries = {
    good: '오늘 대기 상태가 좋습니다. 야외활동을 즐기고 창문을 열어 환기해 주세요. 😊',
    moderate: '보통 수준입니다. 민감군(어린이, 노약자)은 장시간 야외활동을 자제하세요.',
    unhealthy: '미세먼지 주의보 발령 지역입니다. KF94 마스크 착용 후 외출하세요. 😷',
    hazardous: '미세먼지 경보 발령! 외출을 절대 자제하고 창문을 밀폐하세요. 🚨',
  };

  const risk = profile ? calculateRisk(profile, level) : { label: '프로필을 등록해 주세요 →' };

  // ── 날씨 연계 정보 (현재 대기질 등급에 따른 모의 날씨) ──
  const weatherByLevel: Record<AirLevel, { temp: string; humidity: string; wind: string; summary: string }> = {
    good: { temp: '21.5°C', humidity: '48%', wind: '2.6 m/s', summary: '맑고 쾌적한 하늘, 환기하기 좋아요' },
    moderate: { temp: '22.0°C', humidity: '56%', wind: '1.8 m/s', summary: '구름 조금, 무난한 대기질이 이어져요' },
    unhealthy: { temp: '19.8°C', humidity: '68%', wind: '1.2 m/s', summary: '대기 정체로 답답해요, 외출 자제' },
    hazardous: { temp: '18.5°C', humidity: '74%', wind: '0.8 m/s', summary: '대기 정체 심각, 실내에 머무세요' },
  };
  const weather = weatherByLevel[level];

  // ── 시간대별 예측 (현재 PM2.5 기준 변동 시뮬레이션) ──
  const forecastPoints = [
    { time: '오전 9시', val: Math.max(0, Math.round(pm25 * 0.6)), highlight: false },
    { time: '오후 3시', val: pm25, highlight: true },
    { time: '오후 6시', val: Math.round(pm25 * 1.4), highlight: false },
    { time: '자정 12시', val: Math.max(0, Math.round(pm25 * 0.5)), highlight: false },
  ];
  const maxForecastVal = Math.max(...forecastPoints.map(f => f.val), 40);
  const bestForecast = [...forecastPoints].sort((a, b) => a.val - b.val)[0];

  // ── 주변 측정소 현황 (현재 PM10 기준 변동 시뮬레이션) ──
  const currentNodeLabel = region.length > 4 ? region.slice(-2) : region || '현재위치';
  const mapNodes = [
    { name: '북부', val: Math.max(0, Math.round(pm10 * 0.5)), top: '20%', left: '26%', active: false },
    { name: '동부', val: Math.round(pm10 * 1.25), top: '48%', left: '64%', active: false },
    { name: currentNodeLabel, val: pm10, top: '72%', left: '40%', active: true },
    { name: '동대문', val: Math.round(pm10 * 0.75), top: '14%', left: '78%', active: false },
  ];

  return (
    <div>
      <Header
        showRegionButton
        region={region}
        onRegionClick={() => onNavigate('profile')}
      />

      <AlertBanner
        type={alarmGbn === '경보' ? 'hazardous' : 'unhealthy'}
        text={alertText}
        visible={isAlarmActive}
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

      {/* 실시간 대기질 카드 (곰돌이 마스코트 포함) */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <SectionTitle>실시간 대기질</SectionTitle>
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

          {/* 실시간 수치에 기반한 마스코트 곰돌이 캐릭터 */}
          {!loading && <MascotCharacter level={level} />}

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

      {/* 건강 가이드 요약 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <SectionTitle>오늘의 건강 가이드</SectionTitle>
          <GuideSummaryText>{summaries[level]}</GuideSummaryText>
          <Button onClick={() => onNavigate('guide')}>
            📖 자세한 가이드 보기
          </Button>
        </Card>
      </div>

      {/* 날씨 연계 정보 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <CardTitleRow>
            <SectionTitle style={{ marginBottom: 0 }}>오늘의 날씨 연계 정보</SectionTitle>
            <WeatherSummaryText>{weather.summary}</WeatherSummaryText>
          </CardTitleRow>
          <WeatherGrid>
            <WeatherItem>
              <WeatherIcon>🌡️</WeatherIcon>
              <div>
                <WeatherVal>{weather.temp}</WeatherVal>
                <WeatherLbl>현재 기온</WeatherLbl>
              </div>
            </WeatherItem>
            <WeatherItem>
              <WeatherIcon>💧</WeatherIcon>
              <div>
                <WeatherVal>{weather.humidity}</WeatherVal>
                <WeatherLbl>현재 습도</WeatherLbl>
              </div>
            </WeatherItem>
            <WeatherItem>
              <WeatherIcon>💨</WeatherIcon>
              <div>
                <WeatherVal>{weather.wind}</WeatherVal>
                <WeatherLbl>현재 풍속</WeatherLbl>
              </div>
            </WeatherItem>
          </WeatherGrid>
        </Card>
      </div>

      {/* 시간대별 예측 그래프 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <CardTitleRow>
            <SectionTitle style={{ marginBottom: 0 }}>시간대별 예측 (PM2.5 흐름)</SectionTitle>
            <BadgeRecommend>{bestForecast.time} 외출 추천!</BadgeRecommend>
          </CardTitleRow>
          <ForecastChart>
            {forecastPoints.map((f, i) => {
              const fLevel = getLevelFromPM10(Math.round(f.val * 1.8));
              return (
                <ForecastBarItem key={i} $highlight={f.highlight}>
                  <ForecastTime>{f.time}</ForecastTime>
                  <BarContainer>
                    <BarFill
                      $width={Math.min(100, (f.val / maxForecastVal) * 100)}
                      $color={levelColor(fLevel)}
                    />
                  </BarContainer>
                  <ForecastVal>{f.val}</ForecastVal>
                </ForecastBarItem>
              );
            })}
          </ForecastChart>
        </Card>
      </div>

      {/* 주변 측정소 현황 (지역 지도 뷰) 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <SectionTitle>주변 측정소 현황 (지역 지도 뷰)</SectionTitle>
          <MapViewContainer>
            {mapNodes.map((node, i) => {
              const nLevel = getLevelFromPM10(node.val);
              return (
                <MapNode
                  key={i}
                  $top={node.top}
                  $left={node.left}
                  $color={levelColor(nLevel)}
                  $active={node.active}
                >
                  {node.name} ({node.val})
                </MapNode>
              );
            })}
          </MapViewContainer>
          <MapLegend>
            <span><LegendDot $color={levelColor('good')} />좋음</span>
            <span><LegendDot $color={levelColor('moderate')} />보통</span>
            <span><LegendDot $color={levelColor('unhealthy')} />나쁨</span>
            <span><LegendDot $color={levelColor('hazardous')} />매우나쁨</span>
          </MapLegend>
        </Card>
      </div>

      {/* 위험도 분석 요약 카드 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <RiskSummaryCard onClick={() => onNavigate('risk')}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>나의 건강 위험도</div>
            <RiskLabel style={{ color: levelColor(level) }}>{risk.label}</RiskLabel>
          </div>
          <Button $variant="ghost" $size="sm" style={{ width: 'auto' }}>
            분석 보기 →
          </Button>
        </RiskSummaryCard>
      </div>
    </div>
  );
};

export default HomePage;