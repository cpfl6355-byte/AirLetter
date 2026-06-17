import { AirLevel } from '../types';

export function getAirLevel(pm10: number, pm25: number): AirLevel {
  const order: AirLevel[] = ['good', 'moderate', 'unhealthy', 'hazardous'];
  const l10: AirLevel = pm10 <= 30 ? 'good' : pm10 <= 80 ? 'moderate' : pm10 <= 150 ? 'unhealthy' : 'hazardous';
  const l25: AirLevel = pm25 <= 15 ? 'good' : pm25 <= 35 ? 'moderate' : pm25 <= 75 ? 'unhealthy' : 'hazardous';
  
  const idx10 = order.indexOf(l10);
  const idx25 = order.indexOf(l25);
  return order[Math.max(idx10, idx25)];
}

export function levelKo(level: AirLevel): string {
  const mapping: Record<AirLevel, string> = {
    good: '좋음',
    moderate: '보통',
    unhealthy: '나쁨',
    hazardous: '매우나쁨',
  };
  return mapping[level] || '--';
}

export function levelColor(level: AirLevel): string {
  const mapping: Record<AirLevel, string> = {
    good: '#16A97A',
    moderate: '#D4920A',
    unhealthy: '#E06A10',
    hazardous: '#C72828',
  };
  return mapping[level] || '#999';
}
