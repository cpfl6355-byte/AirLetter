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
  hideHeader?: boolean;
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

const AgeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #EFE6E2;
  outline: none;
  margin: 10px 0;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #C45131;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(196, 81, 49, 0.3);
    transition: transform 0.15s ease;
    
    &:hover {
      transform: scale(1.15);
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #C45131;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(196, 81, 49, 0.3);
    transition: transform 0.15s ease;
    
    &:hover {
      transform: scale(1.15);
    }
  }
`;

const conditionOptions = [
  { value: 'respiratory', label: '🫁 호흡기 질환' },
  { value: 'allergy', label: '🌸 알레르기' },
  { value: 'elderly', label: '👴 노약자' },
  { value: 'child', label: '🧒 어린이' },
  { value: 'pregnant', label: '🤰 임산부' },
  { value: 'healthy', label: '✅ 건강함' },
];

const TextInput = styled.input`
  background: rgba(30,144,214,0.06);
  border: 1px solid rgba(30,144,214,0.2);
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.text.primary};
  font-family: inherit;
  font-size: 15px;
  padding: 12px 16px;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accentGlow};
  }
`;

const respiratoryOptions = [
  { value: 'asthma', label: '천식 (Asthma)' },
  { value: 'copd', label: 'COPD (만성폐쇄성폐질환)' },
  { value: 'other', label: '기타 호흡기 질환' },
  { value: 'none', label: '해당 없음' },
];

const medicationOptions = [
  { value: 'inhaler', label: '흡입기 (Inhaler)' },
  { value: 'oral', label: '경구약 (Pills)' },
  { value: 'patch', label: '호흡기 패치' },
];

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  onSaveProfile,
  onNavigate,
  hideHeader = false,
}) => {
  const [age, setAge] = useState(30);
  const [region, setRegion] = useState('서울');
  const [conditions, setConditions] = useState<HealthCondition[]>([]);
  const [respiratoryType, setRespiratoryType] = useState<'asthma' | 'copd' | 'other' | 'none'>('none');
  const [medications, setMedications] = useState<string[]>([]);
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [parentsRegion, setParentsRegion] = useState('강원');
  const [saveStatus, setSaveStatus] = useState('💾 프로필 저장하기');

  useEffect(() => {
    if (profile) {
      setAge(profile.age);
      setRegion(profile.region);
      setConditions(profile.conditions || []);
      setRespiratoryType(profile.respiratoryType || 'none');
      setMedications(profile.medications || []);
      setGuardianName(profile.guardianName || '');
      setGuardianPhone(profile.guardianPhone || '');
      setParentsRegion(profile.parentsRegion || '강원');
    }
  }, [profile]);

  const handleSave = () => {
    onSaveProfile({
      age,
      region,
      conditions,
      respiratoryType,
      medications,
      guardianName,
      guardianPhone,
      parentsRegion,
    });
    setSaveStatus('✅ 저장 완료!');
    setTimeout(() => {
      setSaveStatus('💾 프로필 저장하기');
      onNavigate('home');
    }, 800);
  };

  return (
    <div>
      {!hideHeader && <Header />}
      <ScreenPad style={{ paddingBottom: '40px' }}>
        <ScreenHeader>
          <h2>건강 프로필 등록</h2>
          <p>나에게 맞는 위험도 및 맞춤 가이드를 제공합니다</p>
        </ScreenHeader>

        {/* 나이 */}
        <FormGroup>
          <FormLabel>나이</FormLabel>
          <RangeWrap>
            <RangeVal>{age}</RangeVal>
            <AgeSlider
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
          <FormLabel>내 지역 선택</FormLabel>
          <FormSelect value={region} onChange={e => setRegion(e.target.value)}>
            <option value="">시/도 선택</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="세종">세종</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충북">충북</option>
            <option value="충남">충남</option>
            <option value="전북">전북</option>
            <option value="전남">전남</option>
            <option value="경북">경북</option>
            <option value="경남">경남</option>
            <option value="제주">제주</option>
          </FormSelect>
        </FormGroup>

        {/* 건강 상태 */}
        <FormGroup>
          <FormLabel>기본 건강 상태 (중복 선택 가능)</FormLabel>
          <ChipGroup
            options={conditionOptions}
            selectedValues={conditions}
            onChange={vals => setConditions(vals as HealthCondition[])}
          />
        </FormGroup>

        {/* 호흡기 질환 세부 유형 */}
        <FormGroup>
          <FormLabel>🫁 호흡기 질환 세부 진단</FormLabel>
          <ChipGroup
            options={respiratoryOptions}
            selectedValues={[respiratoryType]}
            onChange={vals => {
              if (vals.length > 0) {
                setRespiratoryType(vals[vals.length - 1] as any);
              }
            }}
          />
        </FormGroup>

        {/* 복용 중인 약품 */}
        <FormGroup>
          <FormLabel>💊 현재 복용/사용 중인 약품</FormLabel>
          <ChipGroup
            options={medicationOptions}
            selectedValues={medications}
            onChange={setMedications}
          />
        </FormGroup>

        {/* 부모님 댁 지역 */}
        <FormGroup>
          <FormLabel>🏡 부모님 댁 지역 설정 (가족 안심 모니터링)</FormLabel>
          <FormSelect value={parentsRegion} onChange={e => setParentsRegion(e.target.value)}>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="세종">세종</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충북">충북</option>
            <option value="충남">충남</option>
            <option value="전북">전북</option>
            <option value="전남">전남</option>
            <option value="경북">경북</option>
            <option value="경남">경남</option>
            <option value="제주">제주</option>
          </FormSelect>
        </FormGroup>

        {/* 보호자 연락망 */}
        <FormGroup>
          <FormLabel>👨‍👩‍👧 보호자/비상 연락처 등록</FormLabel>
          <div style={{ display: 'flex', gap: '10px' }}>
            <TextInput
              type="text"
              placeholder="보호자 성명 (예: 아들)"
              value={guardianName}
              onChange={e => setGuardianName(e.target.value)}
              style={{ flex: 1 }}
            />
            <TextInput
              type="tel"
              placeholder="연락처 (예: 010-1234-5678)"
              value={guardianPhone}
              onChange={e => setGuardianPhone(e.target.value)}
              style={{ flex: 1.5 }}
            />
          </div>
        </FormGroup>

        <Button onClick={handleSave} style={{ marginTop: '24px' }}>
          {saveStatus}
        </Button>
      </ScreenPad>
    </div>
  );
};

export default ProfilePage;
