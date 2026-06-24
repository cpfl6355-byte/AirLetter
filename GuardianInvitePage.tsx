import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ScreenId } from '../types';

interface ConnectedElder {
  id: number;
  nickname: string;
  relation: string;
  status: 'connected' | 'pending';
  sentAt: string;
}

interface GuardianInvitePageProps {
  onNavigate: (id: ScreenId) => void;
}

/* ── animations ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

const checkIn = keyframes`
  0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
  70%  { transform: scale(1.1) rotate(2deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

/* ── layout ── */
const Page = styled.div`
  min-height: 100%;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 0 24px 60px;
  font-family: 'Gowun Batang', 'Nanum Myeongjo', Georgia, serif;
`;

const Header = styled.div`
  padding: 28px 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #F3F4F6;
  margin-bottom: 24px;
  animation: ${fadeUp} 0.4s ease both;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B7280;
  cursor: pointer;
  padding: 4px;
  &:hover { color: #2563EB; }
`;

const HeaderTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: #111827;
`;

const HeaderSub = styled.span`
  font-size: 12px;
  color: #9CA3AF;
  margin-left: auto;
`;

/* ── connected list ── */
const Section = styled.div<{ $delay?: number }>`
  margin-bottom: 28px;
  animation: ${fadeUp} 0.4s ${({ $delay }) => ($delay || 0)}ms ease both;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #9CA3AF;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const ElderCard = styled.div<{ $status: 'connected' | 'pending' }>`
  background: ${({ $status }) => ($status === 'connected' ? '#F0FDF4' : '#FAFAFA')};
  border: 1.5px solid ${({ $status }) => ($status === 'connected' ? '#86EFAC' : '#E5E7EB')};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ElderAvatar = styled.div<{ $status: 'connected' | 'pending' }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: ${({ $status }) => ($status === 'connected'
    ? 'linear-gradient(135deg, #2563EB, #60A5FA)'
    : '#E5E7EB')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

const ElderInfo = styled.div`
  flex: 1;
`;

const ElderName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 3px;
`;

const ElderMeta = styled.div`
  font-size: 12px;
  color: #6B7280;
`;

const StatusBadge = styled.div<{ $status: 'connected' | 'pending' }>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ $status }) => ($status === 'connected' ? '#DCFCE7' : '#FEF9C3')};
  color: ${({ $status }) => ($status === 'connected' ? '#16A34A' : '#CA8A04')};
`;

const PendingDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #CA8A04;
  animation: ${pulse} 1.5s ease infinite;
`;

/* ── invite form ── */
const InviteFormCard = styled.div`
  background: #FFFFFF;
  border: 1.5px solid #E0EAFF;
  border-radius: 20px;
  padding: 22px 20px;
  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.07);
`;

const InviteFormTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #1E3A8A;
  margin: 0 0 6px 0;
`;

const InviteFormSub = styled.p`
  font-size: 13px;
  color: #6B7280;
  margin: 0 0 18px 0;
  line-height: 1.6;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
`;

const InputField = styled.input`
  flex: 1;
  height: 48px;
  border: 1.5px solid #E5E7EB;
  border-radius: 12px;
  padding: 0 14px;
  font-family: 'Gowun Batang', serif;
  font-size: 14px;
  color: #111827;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
  &:focus { border-color: #2563EB; }
  &::placeholder { color: #D1D5DB; }
`;

const RelationSelect = styled.select`
  height: 48px;
  border: 1.5px solid #E5E7EB;
  border-radius: 12px;
  padding: 0 12px;
  font-family: 'Gowun Batang', serif;
  font-size: 14px;
  color: #374151;
  background: #FFFFFF;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
  &:focus { border-color: #2563EB; }
`;

const KakaoSendBtn = styled.button`
  width: 100%;
  height: 54px;
  background: #FEE500;
  border: none;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Gowun Batang', serif;
  font-size: 15px;
  font-weight: 700;
  color: #191600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 12px rgba(254, 229, 0, 0.4);

  &:hover {
    background: #F5DB00;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(254, 229, 0, 0.55);
  }
  &:active { transform: translateY(0); }
  &:disabled {
    background: #F3F4F6;
    color: #D1D5DB;
    box-shadow: none;
    transform: none;
    cursor: not-allowed;
  }
`;

/* ── sent state card ── */
const SentCard = styled.div`
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
  border: 1.5px solid #BFDBFE;
  border-radius: 16px;
  padding: 20px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: ${checkIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

const SentTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1D4ED8;
`;

const SentDesc = styled.div`
  font-size: 12px;
  color: #3B82F6;
  text-align: center;
  line-height: 1.5;
`;

const SentIcon = styled.div`
  font-size: 28px;
  animation: ${checkIn} 0.5s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
`;

const ConnectedPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #DCFCE7;
  border: 1px solid #86EFAC;
  color: #16A34A;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-top: 4px;
`;

/* ── how-it-works ── */
const StepsCard = styled.div`
  background: #FAFAFA;
  border: 1px solid #F3F4F6;
  border-radius: 16px;
  padding: 18px 20px;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  &:last-child { margin-bottom: 0; }
`;

const StepNum = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2563EB;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
`;

const StepText = styled.div``;
const StepTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #374151;
  margin-bottom: 2px;
`;
const StepSub = styled.div`
  font-size: 11px;
  color: #9CA3AF;
  line-height: 1.5;
`;

/* ── mock data ── */
const MOCK_ELDERS: ConnectedElder[] = [
  {
    id: 1,
    nickname: '어머니',
    relation: '부모',
    status: 'connected',
    sentAt: '2024-05-15',
  },
];

export const GuardianInvitePage: React.FC<GuardianInvitePageProps> = ({ onNavigate }) => {
  const [elders, setElders] = useState<ConnectedElder[]>(MOCK_ELDERS);
  const [nickname, setNickname] = useState('');
  const [relation, setRelation] = useState('부모');
  const [sent, setSent] = useState(false);
  const [autoConnected, setAutoConnected] = useState(false);

  const handleSend = () => {
    if (!nickname.trim()) return;
    setSent(true);
    // Simulate elder tapping link after 3 seconds
    setTimeout(() => {
      setAutoConnected(true);
      const newElder: ConnectedElder = {
        id: Date.now(),
        nickname,
        relation,
        status: 'connected',
        sentAt: new Date().toISOString().slice(0, 10),
      };
      setElders(prev => [newElder, ...prev]);
    }, 3000);
  };

  return (
    <Page>
      <Header>
        <BackBtn onClick={() => onNavigate('guardian-login')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </BackBtn>
        <HeaderTitle>어르신 연결</HeaderTitle>
        <HeaderSub>맑은숨</HeaderSub>
      </Header>

      {/* Connected list */}
      {elders.length > 0 && (
        <Section $delay={0}>
          <SectionTitle>연결된 어르신 ({elders.length}명)</SectionTitle>
          {elders.map(elder => (
            <ElderCard key={elder.id} $status={elder.status}>
              <ElderAvatar $status={elder.status}>
                {elder.status === 'connected' ? '👴' : '⏳'}
              </ElderAvatar>
              <ElderInfo>
                <ElderName>{elder.nickname}님</ElderName>
                <ElderMeta>{elder.relation} · {elder.sentAt}</ElderMeta>
              </ElderInfo>
              <StatusBadge $status={elder.status}>
                {elder.status === 'connected' ? (
                  <>✓ 연결완료</>
                ) : (
                  <><PendingDot /> 대기중</>
                )}
              </StatusBadge>
            </ElderCard>
          ))}
        </Section>
      )}

      {/* Invite form */}
      <Section $delay={100}>
        <SectionTitle>새로운 어르신 초대</SectionTitle>
        <InviteFormCard>
          <InviteFormTitle>
            {nickname ? `${nickname}님을 연결해주세요` : 'OO님을 연결해주세요'}
          </InviteFormTitle>
          <InviteFormSub>
            카카오톡으로 초대 링크를 보내면 어르신이<br/>
            링크를 탭하는 것만으로 연결됩니다.
          </InviteFormSub>

          {!sent ? (
            <>
              <InputRow>
                <InputField
                  placeholder="호칭 입력 (예: 어머니)"
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                />
                <RelationSelect
                  value={relation}
                  onChange={e => setRelation(e.target.value)}
                >
                  <option>부모</option>
                  <option>조부모</option>
                  <option>배우자</option>
                  <option>기타</option>
                </RelationSelect>
              </InputRow>

              <KakaoSendBtn onClick={handleSend} disabled={!nickname.trim()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#191600">
                  <path d="M12 3C6.477 3 2 6.477 2 10.75c0 2.71 1.56 5.1 3.91 6.51l-.98 3.6a.4.4 0 0 0 .6.45L9.9 18.7A12.3 12.3 0 0 0 12 18.5c5.523 0 10-3.477 10-7.75S17.523 3 12 3z" />
                </svg>
                카카오톡으로 초대 링크 보내기
              </KakaoSendBtn>
            </>
          ) : (
            <SentCard>
              <SentIcon>{autoConnected ? '✅' : '📨'}</SentIcon>
              <SentTitle>
                {autoConnected ? '연결 완료!' : '링크 전송됨'}
              </SentTitle>
              <SentDesc>
                {autoConnected
                  ? `${nickname}님이 링크를 탭해 연결되었어요!`
                  : `${nickname}님에게 초대 링크를 보냈어요.\n링크를 탭하면 자동으로 연결됩니다.`}
              </SentDesc>
              {autoConnected && (
                <ConnectedPill>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  연결완료
                </ConnectedPill>
              )}
            </SentCard>
          )}
        </InviteFormCard>
      </Section>

      {/* How it works */}
      <Section $delay={200}>
        <SectionTitle>이렇게 연결돼요</SectionTitle>
        <StepsCard>
          <Step>
            <StepNum>1</StepNum>
            <StepText>
              <StepTitle>초대 링크 전송</StepTitle>
              <StepSub>카카오톡으로 어르신에게 맞춤 링크를 보냅니다.</StepSub>
            </StepText>
          </Step>
          <Step>
            <StepNum>2</StepNum>
            <StepText>
              <StepTitle>어르신이 링크 탭</StepTitle>
              <StepSub>어르신은 로그인 없이 링크만 열면 됩니다.</StepSub>
            </StepText>
          </Step>
          <Step>
            <StepNum>3</StepNum>
            <StepText>
              <StepTitle>자동 연결 완료</StepTitle>
              <StepSub>연결 즉시 건강 데이터를 실시간으로 공유받습니다.</StepSub>
            </StepText>
          </Step>
        </StepsCard>
      </Section>
    </Page>
  );
};

export default GuardianInvitePage;
