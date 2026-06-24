import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ScreenId } from '../types';

/* ── Window type augmentation ── */
declare global {
  interface Window {
    Kakao: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Auth: {
        login: (options: {
          success: (authObj: { access_token: string }) => void;
          fail: (err: unknown) => void;
        }) => void;
      };
      API: {
        request: (options: {
          url: string;
          success: (res: { id: number; kakao_account?: { profile?: { nickname?: string } } }) => void;
          fail: (err: unknown) => void;
        }) => void;
      };
    };
    google: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token?: string; error?: string }) => void;
          }) => { requestAccessToken: () => void };
        };
      };
    };
  }
}

interface GuardianLoginPageProps {
  onNavigate: (id: ScreenId) => void;
}

const KAKAO_KEY = import.meta.env.VITE_KAKAO_JS_KEY as string | undefined;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined;

/* ══════════════════════════ ANIMATIONS ══════════════════════════ */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/* ══════════════════════════ LAYOUT ══════════════════════════ */
const Page = styled.div`
  min-height: 100%;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 0 28px 48px;
  font-family: 'Gowun Batang', 'Nanum Myeongjo', Georgia, serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #2563EB 0%, #60A5FA 50%, #2563EB 100%);
    background-size: 200% auto;
    animation: ${shimmer} 3s linear infinite;
  }
`;

const TopArea = styled.div`
  padding-top: 64px;
  padding-bottom: 48px;
  animation: ${fadeUp} 0.5s ease both;
`;

const WordMark = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const LogoRing = styled.div`
  width: 40px; height: 40px;
  border-radius: 50%;
  background: #EFF6FF;
  display: flex; align-items: center; justify-content: center;
  border: 1.5px solid #BFDBFE;
`;

const WordMarkText = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: #2563EB;
  letter-spacing: -0.5px;
`;

const Tagline = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #2563EB;
  font-weight: 700;
`;

const Divider = styled.div`
  height: 1px;
  background: #F3F4F6;
  margin-bottom: 32px;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  animation: ${fadeUp} 0.5s 0.1s ease both;
`;

const SectionLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #9CA3AF;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin: 0 0 4px 0;
`;

/* ── Social buttons ── */
const KakaoBtn = styled.button<{ $loading?: boolean }>`
  width: 100%;
  height: 54px;
  background: ${({ $loading }) => ($loading ? '#FDF5A0' : '#FEE500')};
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
  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  box-shadow: 0 2px 12px rgba(254, 229, 0, 0.45);
  position: relative;

  &:hover:not(:disabled) {
    background: #F5DB00;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(254, 229, 0, 0.55);
  }
  &:active:not(:disabled) { transform: translateY(0); }
`;

const GoogleBtn = styled.button<{ $loading?: boolean }>`
  width: 100%;
  height: 54px;
  background: #FFFFFF;
  border: 1.5px solid #E5E7EB;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Gowun Batang', serif;
  font-size: 15px;
  font-weight: 700;
  color: #374151;
  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};

  &:hover:not(:disabled) {
    border-color: #D1D5DB;
    background: #F9FAFB;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.07);
  }
  &:active:not(:disabled) { transform: translateY(0); }
`;

const Spinner = styled.div`
  width: 18px; height: 18px;
  border: 2px solid rgba(0,0,0,0.2);
  border-top-color: #191600;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const GoogleSpinner = styled(Spinner)`
  border-top-color: #2563EB;
`;

const OrRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 4px;
`;

const OrLine = styled.div`
  flex: 1;
  height: 1px;
  background: #F3F4F6;
`;

const OrText = styled.span`
  font-size: 12px;
  color: #D1D5DB;
  font-weight: 600;
`;

const EmailLink = styled.button`
  background: none;
  border: none;
  font-family: 'Gowun Batang', serif;
  font-size: 13px;
  color: #6B7280;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  padding: 8px 0;
  &:hover { color: #2563EB; }
`;

const DevGuideRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 4px;
`;

const DevGuideLink = styled.button`
  background: none;
  border: none;
  font-family: 'Gowun Batang', serif;
  font-size: 11px;
  color: #9CA3AF;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  &:hover { color: #4B5563; }
`;

const FeatureRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 36px;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.5s 0.2s ease both;
`;

const FeatureChip = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 700;
  color: #1D4ED8;
`;

const BottomCard = styled.div`
  margin-top: auto;
  background: #F9FAFB;
  border: 1px solid #F3F4F6;
  border-radius: 16px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${fadeUp} 0.5s 0.3s ease both;
`;

const BottomCardIcon = styled.div`
  width: 42px; height: 42px;
  border-radius: 12px;
  background: #FFF7ED;
  border: 1px solid #FED7AA;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  font-size: 20px;
`;

const BottomCardText = styled.div`flex: 1;`;
const BottomCardTitle = styled.div`
  font-size: 13px; font-weight: 700; color: #374151; margin-bottom: 3px;
`;
const BottomCardSub = styled.div`
  font-size: 11px; color: #9CA3AF; line-height: 1.5;
`;

/* ── Info modal (when key is missing) ── */
const ModalBackdrop = styled.div<{ $show: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  pointer-events: ${({ $show }) => ($show ? 'all' : 'none')};
  transition: opacity 0.25s ease;
`;

const ModalSheet = styled.div<{ $show: boolean }>`
  width: 100%;
  max-width: 430px;
  background: #FFFFFF;
  border-radius: 24px 24px 0 0;
  padding: 24px 28px 48px;
  transform: ${({ $show }) => ($show ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

const ModalHandle = styled.div`
  width: 36px; height: 4px;
  background: #E5E7EB;
  border-radius: 2px;
  margin: 0 auto 20px;
`;

const ModalTitle = styled.h3`
  font-size: 16px; font-weight: 700; color: #111827; margin: 0 0 8px 0;
`;

const ModalDesc = styled.p`
  font-size: 13px; color: #6B7280; line-height: 1.7; margin: 0 0 20px 0;
`;

const ModalCode = styled.div`
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 14px 16px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #334155;
  line-height: 1.8;
  margin-bottom: 20px;
  white-space: pre-wrap;
  word-break: break-all;
`;

const ModalCloseBtn = styled.button`
  width: 100%;
  height: 48px;
  background: #2563EB;
  border: none;
  border-radius: 12px;
  font-family: 'Gowun Batang', serif;
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;
  &:hover { background: #1D4ED8; }
`;

/* ── Email modal ── */
const InputField = styled.input`
  width: 100%;
  height: 48px;
  border: 1.5px solid #E5E7EB;
  border-radius: 12px;
  padding: 0 16px;
  font-family: 'Gowun Batang', serif;
  font-size: 14px;
  color: #111827;
  margin-bottom: 12px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
  &:focus { border-color: #2563EB; }
  &::placeholder { color: #D1D5DB; }
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #2563EB;
  border: none;
  border-radius: 14px;
  font-family: 'Gowun Batang', serif;
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.2s ease;
  &:hover { background: #1D4ED8; }
`;

/* ── Success toast ── */
const SuccessToast = styled.div<{ $show: boolean }>`
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%) translateY(${({ $show }) => ($show ? 0 : '20px')});
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  background: #16A34A;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 700;
  z-index: 20000;
  pointer-events: none;
  transition: all 0.3s ease;
  white-space: nowrap;
`;

/* ══════════════════════════ SVG ICONS ══════════════════════════ */
const KakaoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#191600">
    <path d="M12 3C6.477 3 2 6.477 2 10.75c0 2.71 1.56 5.1 3.91 6.51l-.98 3.6a.4.4 0 0 0 .6.45L9.9 18.7A12.3 12.3 0 0 0 12 18.5c5.523 0 10-3.477 10-7.75S17.523 3 12 3z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

/* ══════════════════════════ COMPONENT ══════════════════════════ */
export const GuardianLoginPage: React.FC<GuardianLoginPageProps> = ({ onNavigate }) => {
  const [kakaoLoading, setKakaoLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [missingKey, setMissingKey] = useState<'kakao' | 'google'>('kakao');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  /* Kakao SDK init */
  useEffect(() => {
    if (KAKAO_KEY && window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
    }
  }, []);

  /* Listen for mock login popup completion */
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'MOCK_LOGIN_SUCCESS') {
        const { provider, username } = event.data;
        showSuccessToast(`✓ ${username}님, ${provider === 'kakao' ? '카카오' : 'Google'} 로그인 완료!`);
        setTimeout(() => onNavigate('guardian-invite'), 1500);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate]);

  const showSuccessToast = (msg: string) => {
    setSuccessMsg(msg);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  /* ── Kakao Login ── */
  const handleKakaoLogin = () => {
    if (!KAKAO_KEY) {
      const width = 460;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      window.open(
        '/mock-kakao-login.html',
        'KakaoLoginPopup',
        `width=${width},height=${height},left=${left},top=${top},scrollbars=no,resizable=no`
      );
      return;
    }

    if (!window.Kakao?.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
    }

    setKakaoLoading(true);
    window.Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            const name = res.kakao_account?.profile?.nickname || '보호자';
            showSuccessToast(`✓ ${name}님, 카카오 로그인 완료!`);
            setTimeout(() => onNavigate('guardian-invite'), 1500);
          },
          fail: () => {
            showSuccessToast('✓ 카카오 로그인 완료!');
            setTimeout(() => onNavigate('guardian-invite'), 1500);
          },
        });
        setKakaoLoading(false);
      },
      fail: (err) => {
        console.error('Kakao login failed:', err);
        setKakaoLoading(false);
      },
    });
  };

  /* ── Google Login ── */
  const handleGoogleLogin = () => {
    if (!GOOGLE_CLIENT_ID) {
      const width = 480;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      window.open(
        '/mock-google-login.html',
        'GoogleLoginPopup',
        `width=${width},height=${height},left=${left},top=${top},scrollbars=no,resizable=no`
      );
      return;
    }

    if (!window.google?.accounts?.oauth2) {
      alert('Google 로그인 SDK가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    setGoogleLoading(true);

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'profile email',
      callback: (response) => {
        setGoogleLoading(false);
        if (response.error) {
          console.error('Google login error:', response.error);
          return;
        }
        showSuccessToast('✓ Google 로그인 완료!');
        setTimeout(() => onNavigate('guardian-invite'), 1500);
      },
    });

    client.requestAccessToken();
  };

  /* ── Email Login (demo) ── */
  const handleEmailLogin = () => {
    if (!email || !password) return;
    setShowEmailModal(false);
    showSuccessToast(`✓ ${email} 로그인 완료!`);
    setTimeout(() => onNavigate('guardian-invite'), 1500);
  };

  const openKeyGuide = (provider: 'kakao' | 'google') => {
    setMissingKey(provider);
    setShowKeyModal(true);
  };

  const keyInstructions = missingKey === 'kakao'
    ? `# .env 파일에 추가하세요:\nVITE_KAKAO_JS_KEY=여기에_JavaScript_키_입력\n\n# 발급 방법:\n1. https://developers.kakao.com 접속\n2. 내 애플리케이션 → 앱 선택\n3. 앱 키 → JavaScript 키 복사`
    : `# .env 파일에 추가하세요:\nVITE_GOOGLE_CLIENT_ID=여기에_클라이언트_ID_입력\n\n# 발급 방법:\n1. https://console.cloud.google.com 접속\n2. API 및 서비스 → 사용자 인증 정보\n3. OAuth 2.0 클라이언트 ID 생성\n4. 승인된 출처에 http://localhost:5173 추가`;

  return (
    <>
      <Page>
        {/* Wordmark */}
        <TopArea>
          <WordMark>
            <LogoRing>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
                <path d="M9 9h.01M15 9h.01"/>
              </svg>
            </LogoRing>
            <WordMarkText>맑은숨</WordMarkText>
          </WordMark>
          <Tagline>
            소중한 어르신의 호흡 건강을<br />
            <Highlight>보호자님과 함께</Highlight> 지킵니다.
          </Tagline>
        </TopArea>

        <Divider />

        {/* Social Login */}
        <SocialSection>
          <SectionLabel>간편 로그인 · 회원가입</SectionLabel>

          <KakaoBtn $loading={kakaoLoading} onClick={handleKakaoLogin} disabled={kakaoLoading || googleLoading}>
            {kakaoLoading ? <Spinner /> : <KakaoIcon />}
            {kakaoLoading ? '로그인 중...' : '카카오로 시작하기'}
          </KakaoBtn>

          <GoogleBtn $loading={googleLoading} onClick={handleGoogleLogin} disabled={kakaoLoading || googleLoading}>
            {googleLoading ? <GoogleSpinner /> : <GoogleIcon />}
            {googleLoading ? '로그인 중...' : 'Google로 시작하기'}
          </GoogleBtn>

          <OrRow>
            <OrLine /><OrText>또는</OrText><OrLine />
          </OrRow>

          <EmailLink onClick={() => setShowEmailModal(true)}>
            이메일로 가입 · 로그인
          </EmailLink>

          <DevGuideRow>
            <DevGuideLink onClick={() => openKeyGuide('kakao')}>
              카카오 API 가이드
            </DevGuideLink>
            <DevGuideLink onClick={() => openKeyGuide('google')}>
              구글 API 가이드
            </DevGuideLink>
          </DevGuideRow>
        </SocialSection>

        {/* Feature chips */}
        <FeatureRow>
          <FeatureChip>🔒 개인정보 보호</FeatureChip>
          <FeatureChip>🔔 실시간 알림</FeatureChip>
          <FeatureChip>🔗 간편 연결</FeatureChip>
        </FeatureRow>

        {/* Bottom tip card */}
        <BottomCard>
          <BottomCardIcon>📱</BottomCardIcon>
          <BottomCardText>
            <BottomCardTitle>어르신께 별도 앱 설치 불필요</BottomCardTitle>
            <BottomCardSub>
              카카오 링크 한 번으로 어르신과 연결됩니다.<br />
              어르신은 로그인 없이 바로 사용할 수 있어요.
            </BottomCardSub>
          </BottomCardText>
        </BottomCard>
      </Page>

      {/* ── Key missing modal ── */}
      <ModalBackdrop $show={showKeyModal} onClick={() => setShowKeyModal(false)}>
        <ModalSheet $show={showKeyModal} onClick={e => e.stopPropagation()}>
          <ModalHandle />
          <ModalTitle>
            {missingKey === 'kakao' ? '🔑 카카오 앱 키가 필요해요' : '🔑 Google 클라이언트 ID가 필요해요'}
          </ModalTitle>
          <ModalDesc>
            실제 로그인 창을 열려면 개발자 콘솔에서 발급한 키를<br />
            프로젝트 <code style={{ background: '#F3F4F6', padding: '1px 5px', borderRadius: '4px' }}>.env</code> 파일에 추가해야 합니다.
          </ModalDesc>
          <ModalCode>{keyInstructions}</ModalCode>
          <ModalCloseBtn onClick={() => setShowKeyModal(false)}>확인</ModalCloseBtn>
        </ModalSheet>
      </ModalBackdrop>

      {/* ── Email login modal ── */}
      <ModalBackdrop $show={showEmailModal} onClick={() => setShowEmailModal(false)}>
        <ModalSheet $show={showEmailModal} onClick={e => e.stopPropagation()}>
          <ModalHandle />
          <ModalTitle>이메일로 로그인</ModalTitle>
          <InputField
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleEmailLogin()}
          />
          <InputField
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleEmailLogin()}
          />
          <SubmitBtn onClick={handleEmailLogin}>로그인</SubmitBtn>
        </ModalSheet>
      </ModalBackdrop>

      {/* ── Success toast ── */}
      <SuccessToast $show={showSuccess}>{successMsg}</SuccessToast>
    </>
  );
};

export default GuardianLoginPage;
