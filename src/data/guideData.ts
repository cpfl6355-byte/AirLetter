import { AirLevel, GuideItem } from '../types';

export const REGION_MAP: Record<string, string> = {
  '서울시 강남구': '서울',
  '서울시 종로구': '서울',
  '서울시 마포구': '서울',
  '경기도 수원시': '경기',
  '경기도 성남시': '경기',
  '부산시 해운대구': '부산',
  '인천시 연수구': '인천',
  '대전시 서구': '대전',
  '대구시 중구': '대구',
  '광주시 북구': '광주',
};

export const PM_DEFAULT: Record<AirLevel, { pm10: number; pm25: number }> = {
  good:      { pm10: 20,  pm25: 10 },
  moderate:  { pm10: 55,  pm25: 25 },
  unhealthy: { pm10: 110, pm25: 55 },
  hazardous: { pm10: 200, pm25: 100 },
};

export const GUIDE_DATA: Record<AirLevel, GuideItem[]> = {
  good: [
    { icon: '🌿', title: '야외활동 자유롭게', desc: '대기 상태가 좋습니다. 야외활동을 즐기세요.' },
    { icon: '🪟', title: '환기 권장', desc: '창문을 열어 실내 공기를 교환해 주세요.' },
    { icon: '🚶', title: '운동하기 좋은 날', desc: '조깅, 자전거 등 야외 운동을 즐길 수 있습니다.' },
    { icon: '😊', title: '마스크 착용 불필요', desc: '일반 건강인은 마스크 없이 활동해도 무방합니다.' },
  ],
  moderate: [
    { icon: '😐', title: '민감군은 주의 필요', desc: '호흡기 질환자, 노약자, 어린이는 장시간 야외활동을 자제하세요.' },
    { icon: '💧', title: '수분 충분히 섭취', desc: '물을 자주 마셔 기도 점막을 촉촉하게 유지하세요.' },
    { icon: '🏠', title: '격렬한 운동 자제', desc: '심한 야외 운동보다는 실내 활동을 권장합니다.' },
    { icon: '😷', title: '민감군은 마스크 착용', desc: '호흡기 민감군은 KF80 이상 마스크 착용을 권장합니다.' },
  ],
  unhealthy: [
    { icon: '😷', title: '마스크 착용 필수', desc: '외출 시 KF94 마스크를 꼭 착용하세요.' },
    { icon: '🏠', title: '야외활동 자제', desc: '외출을 최소화하고 실내에 머무르세요.' },
    { icon: '🚗', title: '창문 닫기', desc: '실내 환기를 줄이고 공기청정기를 가동하세요.' },
    { icon: '🧼', title: '귀가 후 세안·샤워', desc: '외출 후 손, 얼굴, 머리카락을 꼭 씻으세요.' },
    { icon: '👶', title: '어린이·노약자 외출 금지', desc: '민감 계층은 야외 활동을 삼가세요.' },
  ],
  hazardous: [
    { icon: '🚨', title: '외출 절대 자제', desc: '가능한 한 외출하지 마세요.' },
    { icon: '😷', title: 'KF99 마스크 착용', desc: '외출 시 KF99 등급의 마스크를 착용하세요.' },
    { icon: '🏥', title: '의료기관 방문 권장', desc: '호흡기 증상이 있다면 즉시 의사와 상담하세요.' },
    { icon: '🪟', title: '모든 창문 밀폐', desc: '공기청정기를 최고 강도로 운전하세요.' },
    { icon: '📞', title: '이상 증상 시 즉시 신고', desc: '119 또는 가까운 의료기관에 연락하세요.' },
  ],
};
