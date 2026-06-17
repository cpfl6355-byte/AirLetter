import { AlarmItem, AirData, AirLevel } from '../types';
import { getAirLevel } from './airQuality';
import { PM_DEFAULT } from '../data/guideData';

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

export function alarmsToAirData(alarms: AlarmItem[]): Omit<AirData, 'loading'> {
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

  // 경보가 전혀 없으면 보통(moderate) 수준으로 기본값 임의 설정
  if (pm10 === 0 && pm25 === 0) {
    const defaults = PM_DEFAULT.moderate;
    pm10 = defaults.pm10;
    pm25 = defaults.pm25;
  }

  let level: AirLevel;
  if (hasHazardous) level = 'hazardous';
  else if (hasUnhealthy) level = 'unhealthy';
  else level = getAirLevel(pm10, pm25);

  return { pm10, pm25, level, alarms };
}
