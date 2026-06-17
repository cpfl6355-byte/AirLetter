import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AirLevel } from '../types';
import Header from '../components/Header';
import { GUIDE_DATA } from '../data/guideData';

interface GuidePageProps {
  currentLevel: AirLevel;
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

const TabBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabBtn = styled.button<{ $active: boolean; $level: AirLevel }>`
  flex-shrink: 0;
  padding: 7px 16px;
  border: 1px solid rgba(30,144,214,0.18);
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(30,144,214,0.05);
  color: ${({ theme }) => theme.text.muted};
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.fast};
  outline: none;

  ${({ $active, $level, theme }) => {
    if (!$active) return '';
    switch ($level) {
      case 'good':
        return `
          background: rgba(78,205,164,0.2);
          border-color: ${theme.colors.good};
          color: ${theme.colors.good};
        `;
      case 'moderate':
        return `
          background: rgba(245,200,66,0.2);
          border-color: ${theme.colors.moderate};
          color: ${theme.colors.moderate};
        `;
      case 'unhealthy':
        return `
          background: rgba(255,140,66,0.2);
          border-color: ${theme.colors.unhealthy};
          color: ${theme.colors.unhealthy};
        `;
      case 'hazardous':
        return `
          background: rgba(232,64,64,0.2);
          border-color: ${theme.colors.hazardous};
          color: ${theme.colors.hazardous};
        `;
    }
  }}
`;

const GuideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GuideCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid rgba(30,144,214,0.08);
  margin: 0 ${({ theme }) => theme.spacing.lg} 8px;
  background: ${({ theme }) => theme.bg.card};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const GuideIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(30,144,214,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
`;

const GuideCardTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.text.primary};
`;

const GuideCardDesc = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text.secondary};
  line-height: 1.5;
`;

export const GuidePage: React.FC<GuidePageProps> = ({ currentLevel }) => {
  const [selectedLevel, setSelectedLevel] = useState<AirLevel>('good');

  useEffect(() => {
    if (currentLevel) {
      setSelectedLevel(currentLevel);
    }
  }, [currentLevel]);

  const guides = GUIDE_DATA[selectedLevel] || [];

  return (
    <div>
      <Header />
      <ScreenHeader>
        <h2>건강 가이드</h2>
        <p>미세먼지 단계별 행동 가이드</p>
      </ScreenHeader>

      <TabBar>
        <TabBtn
          $active={selectedLevel === 'good'}
          $level="good"
          onClick={() => setSelectedLevel('good')}
        >
          😊 좋음
        </TabBtn>
        <TabBtn
          $active={selectedLevel === 'moderate'}
          $level="moderate"
          onClick={() => setSelectedLevel('moderate')}
        >
          😐 보통
        </TabBtn>
        <TabBtn
          $active={selectedLevel === 'unhealthy'}
          $level="unhealthy"
          onClick={() => setSelectedLevel('unhealthy')}
        >
          😷 나쁨
        </TabBtn>
        <TabBtn
          $active={selectedLevel === 'hazardous'}
          $level="hazardous"
          onClick={() => setSelectedLevel('hazardous')}
        >
          🚨 매우나쁨
        </TabBtn>
      </TabBar>

      <GuideList>
        {guides.map((g, idx) => (
          <GuideCard key={idx}>
            <GuideIcon>{g.icon}</GuideIcon>
            <div>
              <GuideCardTitle>{g.title}</GuideCardTitle>
              <GuideCardDesc>{g.desc}</GuideCardDesc>
            </div>
          </GuideCard>
        ))}
      </GuideList>
    </div>
  );
};

export default GuidePage;
