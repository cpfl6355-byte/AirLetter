import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ScreenId } from '../types';

interface ElderWelcomePageProps {
  inviterName?: string;
  onNavigate: (id: ScreenId) => void;
}

/* ═══════════════════════════════
   ANIMATIONS
═══════════════════════════════ */
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const floatUp = keyframes`
  from { opacity: 0; transform: translateY(30px) rotate(-1.5deg); }
  to   { opacity: 1; transform: translateY(0)    rotate(-1.5deg); }
`;

const floatUp2 = keyframes`
  from { opacity: 0; transform: translateY(24px) rotate(1deg); }
  to   { opacity: 1; transform: translateY(0)    rotate(1deg); }
`;

const stampDrop = keyframes`
  0%   { transform: translateY(-60px) scale(1.4) rotate(-8deg); opacity: 0; }
  60%  { transform: translateY(4px)   scale(0.92) rotate(3deg); opacity: 1; }
  80%  { transform: translateY(-3px)  scale(1.02) rotate(-1deg); }
  100% { transform: translateY(0)    scale(1)    rotate(-2deg); opacity: 1; }
`;

const stampGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0   0   rgba(139, 58, 43, 0); }
  50%       { box-shadow: 0 0 28px 6px rgba(139, 58, 43, 0.35); }
`;

const inkBleed = keyframes`
  from { opacity: 0; transform: scale(0.7); filter: blur(4px); }
  to   { opacity: 1; transform: scale(1);   filter: blur(0); }
`;

const waveHand = keyframes`
  0%,100% { transform: rotate(0deg); }
  25%     { transform: rotate(-15deg); }
  75%     { transform: rotate(15deg); }
`;

const grain = keyframes`
  0%,100% { transform: translate(0, 0); }
  10%     { transform: translate(-1%, -1%); }
  30%     { transform: translate(1%, 1%); }
  50%     { transform: translate(-0.5%, 0.5%); }
  70%     { transform: translate(0.5%, -0.5%); }
  90%     { transform: translate(-1%, 1%); }
`;

/* ═══════════════════════════════
   PAGE
═══════════════════════════════ */
const Page = styled.div`
  min-height: 100%;
  background: #F5F0E8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 24px 56px;
  font-family: 'Gowun Batang', 'Nanum Myeongjo', Georgia, serif;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease;
`;

/* Grain texture overlay */
const GrainOverlay = styled.div`
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
  opacity: 0.55;
  pointer-events: none;
  animation: ${grain} 8s steps(2) infinite;
  z-index: 0;
`;

/* Warm ruled lines */
const RuledLines = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: repeating-linear-gradient(
    180deg,
    transparent 0px,
    transparent 31px,
    rgba(139, 58, 43, 0.07) 32px
  );
`;

/* ── top wordmark ── */
const TopBar = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  animation: ${fadeIn} 0.5s 0.1s ease both;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #2563EB;
  letter-spacing: -0.3px;
`;

const LogoBadge = styled.div`
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 10px;
  font-weight: 700;
  color: #2563EB;
`;

/* ── tilted invite card ── */
const InviteCard = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 320px;
  background: #FFFDF7;
  border: 1px solid #E8DCC8;
  border-radius: 4px;
  padding: 28px 24px 24px;
  box-shadow:
    4px 6px 16px rgba(92, 61, 53, 0.12),
    inset 0 1px 0 rgba(255,255,255,0.8);
  transform: rotate(-1.5deg);
  animation: ${floatUp} 0.6s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  margin-bottom: 20px;

  /* tape strip top */
  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 22px;
    background: rgba(37, 99, 235, 0.12);
    border: 1px solid rgba(37, 99, 235, 0.18);
    border-radius: 2px;
  }
`;

const CardDate = styled.div`
  font-size: 11px;
  color: #A38F8A;
  font-weight: 600;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
`;

const CardGreeting = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1.5;
  margin-bottom: 8px;

  em {
    font-style: normal;
    color: #2563EB;
  }
`;

const CardBody = styled.p`
  font-size: 14px;
  color: #6B7280;
  line-height: 1.8;
  margin: 0 0 20px 0;
`;

const CardAppName = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #EFF6FF;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: 700;
  color: #1D4ED8;
`;

/* ── secondary tilted note ── */
const NoteCard = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 300px;
  background: #FFFBF0;
  border: 1px solid #FDE68A;
  border-radius: 3px;
  padding: 14px 16px;
  box-shadow: 3px 4px 10px rgba(92, 61, 53, 0.08);
  transform: rotate(1deg);
  animation: ${floatUp2} 0.6s 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  margin-bottom: 32px;
  align-self: flex-end;
  margin-right: 8px;
`;

const NoteText = styled.p`
  font-size: 13px;
  color: #78716C;
  line-height: 1.7;
  margin: 0;
`;

/* ── stamp ── */
const StampWrapper = styled.div<{ $stamped: boolean }>`
  position: relative;
  z-index: 2;
  width: 108px;
  height: 108px;
  cursor: ${({ $stamped }) => ($stamped ? 'default' : 'pointer')};
  margin-bottom: 20px;
  user-select: none;

  ${({ $stamped }) =>
    $stamped &&
    css`
      animation: ${stampGlow} 1.5s ease infinite;
    `}
`;

const StampCircle = styled.div<{ $stamped: boolean }>`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  border: 4px solid #8B3A2B;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transform: rotate(-2deg);
  position: relative;

  background: ${({ $stamped }) =>
    $stamped
      ? 'rgba(139, 58, 43, 0.08)'
      : 'rgba(139, 58, 43, 0.04)'};

  transition: background 0.3s ease;

  ${({ $stamped }) =>
    $stamped &&
    css`
      animation: ${stampDrop} 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    `}

  /* inner dashed ring */
  &::before {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1.5px dashed rgba(139, 58, 43, 0.35);
  }
`;

const StampKorean = styled.div<{ $stamped: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: #8B3A2B;
  letter-spacing: 4px;

  ${({ $stamped }) =>
    $stamped &&
    css`
      animation: ${inkBleed} 0.4s 0.2s ease both;
    `}
`;

const StampSub = styled.div<{ $stamped: boolean }>`
  font-size: 9px;
  font-weight: 700;
  color: #8B3A2B;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${({ $stamped }) =>
    $stamped &&
    css`
      animation: ${inkBleed} 0.4s 0.3s ease both;
    `}
`;

const StampHint = styled.div`
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: #A38F8A;
  white-space: nowrap;
`;

const WaveEmoji = styled.span`
  display: inline-block;
  animation: ${waveHand} 1.2s ease-in-out infinite;
  transform-origin: bottom center;
`;

/* ── start button ── */
const StartBtn = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 320px;
  height: 60px;
  border: none;
  border-radius: 14px;
  font-family: 'Gowun Batang', serif;
  font-size: 18px;
  font-weight: 700;
  cursor: ${({ $active }) => ($active ? 'pointer' : 'not-allowed')};
  transition: all 0.3s ease;
  margin-top: 8px;

  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)'
      : '#E5E7EB'};
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#9CA3AF')};

  box-shadow: ${({ $active }) =>
    $active
      ? '0 6px 24px rgba(37, 99, 235, 0.4)'
      : 'none'};

  &:hover {
    ${({ $active }) =>
      $active &&
      css`
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(37, 99, 235, 0.5);
      `}
  }
  &:active {
    ${({ $active }) => $active && css`transform: translateY(0);`}
  }
`;

const BtnHintText = styled.p`
  position: relative;
  z-index: 2;
  font-size: 12px;
  color: #A38F8A;
  margin-top: 10px;
  text-align: center;
`;

/* ═══════════════════════════════
   COMPONENT
═══════════════════════════════ */
export const ElderWelcomePage: React.FC<ElderWelcomePageProps> = ({
  inviterName = '영희',
  onNavigate,
}) => {
  const [stamped, setStamped] = useState(false);

  const today = new Date();
  const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <Page>
      <GrainOverlay />
      <RuledLines />

      {/* Wordmark */}
      <TopBar>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
          <path d="M9 9h.01M15 9h.01"/>
        </svg>
        <LogoText>맑은숨</LogoText>
        <LogoBadge>어르신 전용</LogoBadge>
      </TopBar>

      {/* Main invite card */}
      <InviteCard>
        <CardDate>{dateStr} · 맑은숨 초대장</CardDate>
        <CardGreeting>
          <WaveEmoji>👋</WaveEmoji> 어르신,<br />
          <em>{inviterName}님</em>이<br />
          맑은숨으로 초대했어요
        </CardGreeting>
        <CardBody>
          바깥 공기가 좋은 날, 나쁜 날을<br />
          함께 확인하며 건강하게 지내봐요.
        </CardBody>
        <CardAppName>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          </svg>
          맑은숨 — 호흡 건강 도우미
        </CardAppName>
      </InviteCard>

      {/* Note card */}
      <NoteCard>
        <NoteText>
          ✏️ 로그인이나 비밀번호는<br />
          필요 없어요. 도장 하나면 돼요!
        </NoteText>
      </NoteCard>

      {/* Stamp */}
      <StampWrapper
        $stamped={stamped}
        onClick={() => !stamped && setStamped(true)}
      >
        <StampCircle $stamped={stamped}>
          <StampKorean $stamped={stamped}>연결</StampKorean>
          <StampSub $stamped={stamped}>완료</StampSub>
        </StampCircle>
        {!stamped && (
          <StampHint>← 도장을 눌러주세요</StampHint>
        )}
      </StampWrapper>

      {/* Start button */}
      <StartBtn $active={stamped} onClick={() => stamped && onNavigate('home')}>
        {stamped ? '🌿 시작하기' : '도장을 먼저 눌러주세요'}
      </StartBtn>

      {stamped && (
        <BtnHintText>
          {inviterName}님과 연결되었어요 — 함께 건강을 지켜드릴게요 💙
        </BtnHintText>
      )}
    </Page>
  );
};

export default ElderWelcomePage;
