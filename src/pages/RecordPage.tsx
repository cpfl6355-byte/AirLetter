import React, { useState } from 'react';
import styled from 'styled-components';
import { HealthRecord } from '../types';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import ChipGroup from '../components/ChipGroup';

interface RecordPageProps {
  records: HealthRecord[];
  onSaveRecord: (symptoms: string[], severity: number) => void;
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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondary};
`;

const RangeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const RangeVal = styled.span`
  min-width: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.accent};
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.text.muted};
  gap: ${({ theme }) => theme.spacing.md};
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  opacity: 0.4;
`;

const EmptyStateText = styled.div`
  font-size: 14px;
  text-align: center;
  line-height: 1.6;
`;

const RecordItem = styled(Card)`
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: none;

  &:hover {
    transform: none;
    box-shadow: none;
  }
`;

const RecordTag = styled.span`
  font-size: 11px;
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(30,100,180,0.1);
  color: ${({ theme }) => theme.accent};
`;

const SeverityBar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(30,144,214,0.1);
  overflow: hidden;
  margin-top: 8px;
`;

const SeverityFill = styled.div<{ $width: number; $color: string }>`
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: width 0.5s ease;
  width: ${({ $width }) => $width}%;
  background: ${({ $color }) => $color};
`;

const symptomOptions = [
  { value: '기침', label: '기침' },
  { value: '콧물', label: '콧물' },
  { value: '눈충혈', label: '눈충혈' },
  { value: '두통', label: '두통' },
  { value: '목아픔', label: '목아픔' },
  { value: '숨가쁨', label: '숨가쁨' },
  { value: '피부자극', label: '피부자극' },
  { value: '없음', label: '없음' },
];

export const RecordPage: React.FC<RecordPageProps> = ({
  records,
  onSaveRecord,
}) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState(1);
  const [saveStatus, setSaveStatus] = useState('📝 기록 저장');

  const handleSave = () => {
    if (selectedSymptoms.length === 0) {
      alert('증상을 하나 이상 선택해 주세요.');
      return;
    }
    onSaveRecord(selectedSymptoms, severity);
    setSaveStatus('✅ 저장 완료!');
    setTimeout(() => {
      setSelectedSymptoms([]);
      setSeverity(1);
      setSaveStatus('📝 기록 저장');
    }, 700);
  };

  const getSeverityColor = (sev: number) => {
    if (sev <= 2) return '#16A97A';
    if (sev <= 3) return '#D4920A';
    return '#C72828';
  };

  return (
    <div>
      <Header />
      <ScreenHeader>
        <h2>건강 기록</h2>
        <p>오늘의 증상을 기록해두세요</p>
      </ScreenHeader>

      {/* 증상 입력 */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <Card>
          <SectionTitle>증상 선택</SectionTitle>
          <div style={{ marginBottom: '16px' }}>
            <ChipGroup
              options={symptomOptions}
              selectedValues={selectedSymptoms}
              onChange={setSelectedSymptoms}
            />
          </div>

          <FormGroup style={{ marginBottom: '16px' }}>
            <FormLabel>심각도</FormLabel>
            <RangeWrap>
              <RangeVal>{severity}</RangeVal>
              <input
                type="range"
                min="1"
                max="5"
                value={severity}
                onChange={e => setSeverity(Number(e.target.value))}
              />
              <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>/ 5</span>
            </RangeWrap>
          </FormGroup>

          <Button onClick={handleSave}>
            {saveStatus}
          </Button>
        </Card>
      </div>

      {/* 기록 목록 */}
      <div style={{ padding: '0 24px' }}>
        <SectionTitle>기록 내역</SectionTitle>
        {records.length === 0 ? (
          <EmptyState>
            <EmptyStateIcon>📋</EmptyStateIcon>
            <EmptyStateText>
              아직 기록이 없어요.
              <br />
              증상을 선택하고 저장해 보세요.
            </EmptyStateText>
          </EmptyState>
        ) : (
          [...records].reverse().map(record => {
            const pct = (record.severity / 5) * 100;
            const color = getSeverityColor(record.severity);
            return (
              <RecordItem key={record.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{record.date}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color }}>
                    심각도 {record.severity}/5
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
                  {record.symptoms.map((s, i) => (
                    <RecordTag key={i}>{s}</RecordTag>
                  ))}
                </div>
                <SeverityBar>
                  <SeverityFill $width={pct} $color={color} />
                </SeverityBar>
              </RecordItem>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RecordPage;
