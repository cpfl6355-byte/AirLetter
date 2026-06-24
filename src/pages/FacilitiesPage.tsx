import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ScreenId } from '../types';
import Header from '../components/Header';

interface FacilitiesPageProps {
  region: string;
  onNavigate: (id: ScreenId) => void;
}

const Container = styled.div`
  background: ${({ theme }) => theme.bg.primary};
  min-height: 100vh;
  padding-bottom: 90px;
  animation: fadeInUp 0.35s ease;
`;

const AlertCard = styled.div`
  background: #FEF5F5;
  border: 1.5px solid rgba(196, 81, 49, 0.12);
  border-radius: 12px;
  margin: 16px 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AlertTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #C45131;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AlertContent = styled.div`
  font-size: 17px;
  font-weight: 800;
  color: #5C3D35;
  line-height: 1.4;
`;

const AlertSubtext = styled.div`
  font-size: 13px;
  color: #7D6560;
`;

const SectionHeader = styled.div`
  margin: 24px 20px 12px;
  
  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 800;
    color: #5C3D35;
    margin: 0;
  }

  .sort-text {
    font-size: 13px;
    color: #7D6560;
    font-weight: 600;
  }

  .divider-line {
    height: 2px;
    background: #C45131;
    width: 100%;
  }
`;

const HospitalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
`;

const HospitalCard = styled.div`
  background: #FFFFFF;
  border: 1.5px solid #F3ECE9;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(92, 61, 53, 0.05);
  }
`;

const CardHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  padding-right: 12px;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SpecialtyBadge = styled.span`
  background: #C45131;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
`;

const DistanceText = styled.span<{ $highlight?: boolean }>`
  font-size: 13px;
  font-weight: 700;
  color: ${({ $highlight }) => ($highlight ? '#C45131' : '#7D6560')};
`;

const HospitalName = styled.h4`
  font-size: 18px;
  font-weight: 800;
  color: #5C3D35;
  margin: 0;
`;

const HospitalMeta = styled.div`
  font-size: 14px;
  color: #7D6560;
  font-weight: 600;
  margin-top: 4px;
`;

const HospitalImg = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #EFE6E2;
  flex-shrink: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 14px;
`;

const CallBtn = styled.button<{ $active?: boolean }>`
  flex: 1;
  background: ${({ $active }) => ($active ? '#C45131' : '#8A7B78')};
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s ease, transform 0.1s ease;

  &:active {
    transform: scale(0.98);
  }
`;

const RunnerBtn = styled.button<{ $active?: boolean }>`
  width: 44px;
  height: 44px;
  background: #FFFFFF;
  border: 1.5px solid #F3ECE9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#C45131' : '#8A7B78')};
  transition: background 0.2s ease, border-color 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:active {
    background: #FAF8F6;
  }
`;

const MapSectionCard = styled.div`
  margin: 20px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 160px;
  border: 1.5px solid #F3ECE9;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.02);
`;

const MapBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MapOverlayText = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 800;
  color: #5C3D35;
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #EFE6E2;
  padding: 4px 10px;
  border-radius: 6px;
  pointer-events: none;
`;

const MapButton = styled.button`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: #FFFFFF;
  border: 1px solid #F3ECE9;
  border-radius: 12px;
  padding: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #5C3D35;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.1);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s ease;

  &:hover {
    background: #FAF8F6;
  }

  .arrow {
    color: #C45131;
    font-weight: 800;
    margin-left: 2px;
  }
`;

const Toast = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%) translateY(${({ $visible }) => ($visible ? '0' : '20px')});
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  pointer-events: none;
  background: rgba(92, 61, 53, 0.9);
  color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  z-index: 10000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  white-space: nowrap;
`;

const RunnerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="15" cy="4" r="1.5" fill="currentColor" stroke="none" />
    <path d="M8 14l2-4 4-1.5 2 2.5" />
    <path d="M10 10l-2-3" />
    <path d="M14 8v5l-4 4-2 3" />
    <path d="M12 13l3 2 1 4" />
  </svg>
);

const sidoCdMap: Record<string, string> = {
  '서울': '110000',
  '부산': '210000',
  '대구': '220000',
  '인천': '230000',
  '광주': '240000',
  '대전': '250000',
  '울산': '260000',
  '세종': '290000',
  '경기': '310000',
  '강원': '320000',
  '충북': '330000',
  '충남': '340000',
  '전북': '350000',
  '전남': '360000',
  '경북': '370000',
  '경남': '380000',
  '제주': '390000',
};

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  color: #7D6560;
  font-weight: 700;
  gap: 12px;
  
  .spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(196, 81, 49, 0.2);
    border-top: 3px solid #C45131;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ region }) => {
  const [toastText, setToastText] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const currentRegion = region || '서울';

  const getRegionSuffix = (reg: string) => {
    if (['부산', '대구', '인천', '광주', '대전', '울산'].includes(reg)) {
      return '광역시';
    } else if (reg === '세종') {
      return '특별자치시';
    } else if (reg === '제주') {
      return '특별자치도';
    } else if (['경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남'].includes(reg)) {
      return '도';
    }
    return '특별시';
  };

  const regionSuffix = getRegionSuffix(currentRegion);
  const regionFullName = `${currentRegion}${regionSuffix}`;

  const regionDetails: Record<string, { gu: string; street: string }> = {
    '서울': { gu: '종로구', street: '삼청로' },
    '부산': { gu: '해운대구', street: '해운대해변로' },
    '대구': { gu: '중구', street: '달구벌대로' },
    '인천': { gu: '남동구', street: '예술로' },
    '광주': { gu: '서구', street: '상무중앙로' },
    '대전': { gu: '서구', street: '둔산서로' },
    '울산': { gu: '남구', street: '삼산로' },
    '세종': { gu: '보람동', street: '한누리대로' },
    '경기': { gu: '수원시 팔달구', street: '효원로' },
    '강원': { gu: '춘천시', street: '중앙로' },
    '충북': { gu: '청주시 상당구', street: '상당로' },
    '충남': { gu: '홍성군', street: '충남대로' },
    '전북': { gu: '전주시 완산구', street: '전북도청로' },
    '전남': { gu: '무안군', street: '오룡길' },
    '경북': { gu: '안동시', street: '도청대로' },
    '경남': { gu: '창원시 의창구', street: '중앙대로' },
    '제주': { gu: '제주시', street: '문송길' },
  };

  const details = regionDetails[currentRegion] || { gu: '중심가', street: '중앙로' };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const sidoCd = sidoCdMap[currentRegion] || '110000';
    const serviceKey = '804b950705a2d14cf60e184c682b473e6159d281fbd2d91a1bf38ba43bffc2b0';
    
    // Request internal medicine clinics (dgsbjtCd=01)
    const url = `/api/hira/B551182/hospInfoServicev2/getHospBasisList?serviceKey=${encodeURIComponent(serviceKey)}&pageNo=1&numOfRows=3&_type=json&sidoCd=${sidoCd}&dgsbjtCd=01`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('API network response not ok');
        return res.json();
      })
      .then(data => {
        if (!isMounted) return;
        
        let items: any[] = [];
        if (data?.response?.body?.items?.item) {
          const itemVal = data.response.body.items.item;
          if (Array.isArray(itemVal)) {
            items = itemVal;
          } else {
            items = [itemVal];
          }
        }

        if (items.length === 0) {
          throw new Error('No items returned');
        }

        const mapped = items.map((item, index) => {
          const distanceMap = ['500m', '850m', '1.2km'];
          const activeMap = [true, true, false];
          const highlightMap = [undefined, undefined, '점심시간'];
          const specialtyMap = ['내과 · 진료 중', '이비인후과 · 진료 중', '가정의학과 · 14:00 진료시작'];
          const imageMap = [
            '/assets/hospital_interior.png',
            '/assets/stethoscope.png',
            '/assets/waiting_room.png'
          ];

          return {
            id: index + 1,
            name: item.yadmNm || `${currentRegion}호흡기내과`,
            specialty: item.clCdNm ? `${item.clCdNm} · 진료 중` : specialtyMap[index % 3],
            badge: index === 0 ? '호흡기 특화' : undefined,
            distance: distanceMap[index % 3],
            highlightDistance: highlightMap[index % 3],
            phone: item.telno || '02-123-4567',
            address: item.addr || `${regionFullName} ${details.gu} ${details.street} 10`,
            img: imageMap[index % 3],
            active: activeMap[index % 3],
          };
        });

        setHospitals(mapped);
        setLoading(false);
      })
      .catch(err => {
        console.warn('HIRA API failed, using fallback mock data:', err);
        if (!isMounted) return;
        
        // Fallback to local mock data
        const fallback = [
          {
            id: 1,
            name: `${currentRegion}호흡기내과`,
            specialty: '내과 · 진료 중',
            badge: '호흡기 특화',
            distance: '500m',
            phone: '02-123-4567',
            address: `${regionFullName} ${details.gu} ${details.street} 10`,
            img: '/assets/hospital_interior.png',
            active: true,
          },
          {
            id: 2,
            name: `${currentRegion === '세종' || currentRegion === '제주' ? '' : '바른이비인후과 ('}${currentRegion}${currentRegion === '세종' || currentRegion === '제주' ? ' 바른이비인후과' : ')'}`,
            specialty: '이비인후과 · 진료 중',
            distance: '850m',
            phone: '02-777-9999',
            address: `${regionFullName} ${details.gu} ${details.street} 26`,
            img: '/assets/stethoscope.png',
            active: true,
          },
          {
            id: 3,
            name: `연세가정의학과의원 (${currentRegion})`,
            specialty: '가정의학과 · 14:00 진료시작',
            distance: '1.2km',
            highlightDistance: '점심시간',
            phone: '02-234-5678',
            address: `${regionFullName} ${details.gu} ${details.street} 161`,
            img: '/assets/waiting_room.png',
            active: false,
          }
        ];
        setHospitals(fallback);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [currentRegion]);

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  const showToast = (text: string) => {
    setToastText(text);
    setToastVisible(true);
  };

  const handleCall = (name: string, phone: string) => {
    showToast(`${name} (${phone}) 번호로 연결합니다.`);
    setTimeout(() => {
      window.location.href = `tel:${phone}`;
    }, 1000);
  };

  const handleCopyAddress = (name: string, address: string) => {
    navigator.clipboard.writeText(address);
    showToast(`${name} 주소가 복사되었습니다.`);
  };

  const handleOpenMap = () => {
    showToast(`${currentRegion} 주변 지도를 불러옵니다.`);
  };

  return (
    <Container>
      <Header showSearchButton />

      {/* Alert Card */}
      <AlertCard>
        <AlertTitle>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          오늘의 알림
        </AlertTitle>
        <AlertContent>
          미세먼지가 심할 때는 호흡기 건강에 유의하세요.
        </AlertContent>
        <AlertSubtext>
          가까운 호흡기 내과를 우선적으로 안내해 드립니다.
        </AlertSubtext>
      </AlertCard>

      {/* Section Header */}
      <SectionHeader>
        <div className="title-row">
          <h3>가까운 병원</h3>
          <span className="sort-text">거리순 정렬</span>
        </div>
        <div className="divider-line" />
      </SectionHeader>

      {/* Hospital list */}
      <HospitalList>
        {loading ? (
          <LoadingWrapper>
            <div className="spinner" />
            <span>주변 병원 정보를 불러오는 중...</span>
          </LoadingWrapper>
        ) : (
          hospitals.map(h => (
            <HospitalCard key={h.id}>
              <CardHeaderRow>
                <HeaderLeft>
                  <BadgeRow>
                    {h.badge && <SpecialtyBadge>{h.badge}</SpecialtyBadge>}
                    <DistanceText $highlight={!!h.highlightDistance}>
                      {h.distance} {h.highlightDistance && <span style={{ color: '#C45131', marginLeft: '4px' }}>{h.highlightDistance}</span>}
                    </DistanceText>
                  </BadgeRow>
                  <HospitalName>{h.name}</HospitalName>
                  <HospitalMeta>{h.specialty}</HospitalMeta>
                </HeaderLeft>
                <HospitalImg src={h.img} alt={h.name} />
              </CardHeaderRow>

              <ButtonRow>
                <CallBtn $active={h.active} onClick={() => handleCall(h.name, h.phone)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  전화하기
                </CallBtn>
                <RunnerBtn $active={h.active} onClick={() => handleCopyAddress(h.name, h.address)}>
                  <RunnerIcon />
                </RunnerBtn>
              </ButtonRow>
            </HospitalCard>
          ))
        )}
      </HospitalList>

      {/* Map Section Card */}
      <MapSectionCard>
        <MapBackground src="/assets/seoul_map.png" alt="Seoul Map" />
        <MapOverlayText>{currentRegion} {regionFullName}</MapOverlayText>
        <MapButton onClick={handleOpenMap}>
          현재 위치 주변 지도 보기
          <span className="arrow">&gt;</span>
        </MapButton>
      </MapSectionCard>

      {/* Toast Notification */}
      <Toast $visible={toastVisible}>
        {toastText}
      </Toast>
    </Container>
  );
};

export default FacilitiesPage;
