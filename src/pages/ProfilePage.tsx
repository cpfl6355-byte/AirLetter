import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserProfile, HealthCondition, ScreenId } from '../types';
import Header from '../components/Header';
import Button from '../components/Button';
import ChipGroup from '../components/ChipGroup';

interface ProfilePageProps {
  profile: UserProfile | null;
  onSaveProfile: (profile: UserProfile) => void;
  onNavigate: (id: ScreenId) => void;
}

const ScreenPad = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ScreenHeader = styled.div`
  padding: 0 0 ${({ theme }) => theme.spacing.lg};

  h2 {
    font-size: 22px;
    font-weight: 800;
    color: ${({ theme }) => theme.text.primary};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text.muted};
    margin-top: 4px;
  }
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

const FormSelect = styled.select`
  background: rgba(30,144,214,0.06);
  border: 1px solid rgba(30,144,214,0.2);
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.text.primary};
  font-family: inherit;
  font-size: 15px;
  padding: 12px 16px;
  transition: border-color ${({ theme }) => theme.transition.fast}, box-shadow ${({ theme }) => theme.transition.fast};
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accentGlow};
  }

  option {
    background: #EFF7FF;
    color: ${({ theme }) => theme.text.primary};
  }
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

const conditionOptions = [
  { value: 'respiratory', label: '🫁 호흡기 질환' },
  { value: 'allergy', label: '🌸 알레르기' },
  { value: 'elderly', label: '👴 노약자' },
  { value: 'child', label: '🧒 어린이' },
  { value: 'pregnant', label: '🤰 임산부' },
  { value: 'healthy', label: '✅ 건강함' },
];

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  onSaveProfile,
  onNavigate,
}) => {
  const [age, setAge] = useState(30);
  const [region, setRegion] = useState('서울시 강남구');
  const [conditions, setConditions] = useState<HealthCondition[]>([]);
  const [saveStatus, setSaveStatus] = useState('💾 프로필 저장하기');

  useEffect(() => {
    if (profile) {
      setAge(profile.age);
      setRegion(profile.region);
      setConditions(profile.conditions);
    }
  }, [profile]);

  const handleSave = () => {
    onSaveProfile({ age, region, conditions });
    setSaveStatus('✅ 저장 완료!');
    setTimeout(() => {
      setSaveStatus('💾 프로필 저장하기');
      onNavigate('home');
    }, 800);
  };

  return (
    <div>
      <Header />
      <ScreenPad>
        <ScreenHeader>
          <h2>건강 프로필 등록</h2>
          <p>나에게 맞는 위험도를 분석해 드릴게요</p>
        </ScreenHeader>

        {/* 나이 */}
        <FormGroup>
          <FormLabel>나이</FormLabel>
          <RangeWrap>
            <RangeVal>{age}</RangeVal>
            <input
              type="range"
              min="1"
              max="100"
              value={age}
              onChange={e => setAge(Number(e.target.value))}
            />
          </RangeWrap>
        </FormGroup>

        {/* 지역 */}
        <FormGroup>
          <FormLabel>지역 선택</FormLabel>
          <FormSelect value={region} onChange={e => setRegion(e.target.value)}>
            <option value="">시/도 선택</option>
            <option value="서울시 강남구">서울시 강남구</option>
            <option value="서울시 종로구">서울시 종로구</option>
            <option value="서울시 마포구">서울시 마포구</option>
            <option value="경기도 수원시">경기도 수원시</option>
            <option value="경기도 성남시">경기도 성남시</option>
            <option value="부산시 해운대구">부산시 해운대구</option>
            <option value="인천시 연수구">인천시 연수구</option>
            <option value="대전시 서구">대전시 서구</option>
            <option value="대구시 중구">대구시 중구</option>
            <option value="광주시 북구">광주시 북구</option>
          </FormSelect>
        </FormGroup>

        {/* 건강 상태 */}
        <FormGroup>
          <FormLabel>건강 상태 (해당사항 모두 선택)</FormLabel>
          <ChipGroup
            options={conditionOptions}
            selectedValues={conditions}
            onChange={vals => setConditions(vals as HealthCondition[])}
          />
        </FormGroup>

        <Button onClick={handleSave} style={{ marginTop: '24px' }}>
          {saveStatus}
        </Button>
      </ScreenPad>
    </div>
  );
};

export default ProfilePage;
