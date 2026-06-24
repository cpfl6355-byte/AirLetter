import { AlarmItem, AirData, AirLevel } from '../types';
import { getAirLevel } from './airQuality';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE = import.meta.env.VITE_API_BASE;

export async function fetchAlarmData(sidoName: string): Promise<AlarmItem[]> {
  const year = new Date().getFullYear();
  const url = `${API_BASE}?serviceKey=${API_KEY}&returnType=JSON&numOfRows=100&pageNo=1&year=${year}`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    const items = data?.response?.body?.items || [];
    
    // 오늘 날짜 기준 해당 지역 현재 발령 중인 경보만 필터
    const today = new Date().toISOString().split('T')[0];
    return items.filter((item: any) => {
      const matchSido = item.districtName === sidoName;
      // clearDate가 없거나 오늘 이후면 현재 발령 중으로 판단
      const isActive = !item.clearDate || item.clearDate >= today;
      return matchSido && isActive;
    }).map((item: any) => ({
      districtName: item.districtName,
      issueGbn: item.issueGbn,
      issueVal: item.issueVal,
      itemCode: item.itemCode,
      clearDate: item.clearDate,
      issueDate: item.issueDate
    }));
  } catch (e) {
    console.warn('API 호출 실패, Mock 데이터 사용:', e);
    return [];
  }
}

const getMockDataForRegion = (region: string): { pm10: number; pm25: number; level: AirLevel } => {
  const baseMap: Record<string, { pm10: number; pm25: number; level: AirLevel }> = {
    '서울': { pm10: 48, pm25: 24, level: 'moderate' },
    '경기': { pm10: 92, pm25: 46, level: 'unhealthy' },
    '인천': { pm10: 85, pm25: 42, level: 'unhealthy' },
    '강원': { pm10: 18, pm25: 9, level: 'good' },
    '충북': { pm10: 52, pm25: 26, level: 'moderate' },
    '충남': { pm10: 61, pm25: 31, level: 'moderate' },
    '대전': { pm10: 25, pm25: 12, level: 'good' },
    '경북': { pm10: 28, pm25: 14, level: 'good' },
    '경남': { pm10: 22, pm25: 11, level: 'good' },
    '대구': { pm10: 58, pm25: 29, level: 'moderate' },
    '울산': { pm10: 50, pm25: 25, level: 'moderate' },
    '부산': { pm10: 24, pm25: 12, level: 'good' },
    '광주': { pm10: 27, pm25: 13, level: 'good' },
    '전북': { pm10: 65, pm25: 33, level: 'moderate' },
    '전남': { pm10: 19, pm25: 9, level: 'good' },
    '제주': { pm10: 15, pm25: 7, level: 'good' },
    '세종': { pm10: 45, pm25: 22, level: 'moderate' },
  };

  const base = baseMap[region] || { pm10: 55, pm25: 25, level: 'moderate' as AirLevel };
  
  // Add a small deterministic shift based on the current hour of the day
  const hour = new Date().getHours();
  const delta = (hour % 5) - 2; // -2 to +2
  const pm10 = Math.max(5, base.pm10 + delta);
  const pm25 = Math.max(3, base.pm25 + Math.round(delta / 2));

  let level: AirLevel = 'moderate';
  if (pm10 <= 30) level = 'good';
  else if (pm10 <= 80) level = 'moderate';
  else if (pm10 <= 150) level = 'unhealthy';
  else level = 'hazardous';

  return { pm10, pm25, level };
};

export function alarmsToAirData(alarms: AlarmItem[], region: string): Omit<AirData, 'loading'> {
  let pm10 = 0;
  let pm25 = 0;
  let hasHazardous = false;
  let hasUnhealthy = false;

  alarms.forEach(a => {
    const val = parseInt(a.issueVal) || 0;
    if (a.itemCode === 'PM10') pm10 = Math.max(pm10, val);
    if (a.itemCode === 'PM25') pm25 = Math.max(pm25, val);
    if (a.issueGbn === '경보') hasHazardous = true;
    else if (a.issueGbn === '주의보') hasUnhealthy = true;
  });

  let level: AirLevel;
  if (pm10 === 0 && pm25 === 0) {
    const mock = getMockDataForRegion(region);
    pm10 = mock.pm10;
    pm25 = mock.pm25;
    level = mock.level;
  } else {
    if (hasHazardous) level = 'hazardous';
    else if (hasUnhealthy) level = 'unhealthy';
    else level = getAirLevel(pm10, pm25);
  }

  return { pm10, pm25, level, alarms };
}
