export type AirLevel = 'good' | 'moderate' | 'unhealthy' | 'hazardous';

export type HealthCondition = 'respiratory' | 'allergy' | 'elderly' | 'child' | 'pregnant' | 'healthy';

export interface UserProfile {
  age: number;
  region: string;
  conditions: HealthCondition[];
}

export interface AlarmItem {
  districtName: string;
  issueGbn: string;    // '주의보' | '경보'
  issueVal: string;
  itemCode: string;    // 'PM10' | 'PM25'
  clearDate?: string;
  issueDate?: string;
}

export interface AirData {
  pm10: number;
  pm25: number;
  level: AirLevel;
  alarms: AlarmItem[];
  loading: boolean;
}

export interface RiskResult {
  score: number;
  label: string;
  cls: string;
}

export interface HealthRecord {
  id: number;
  date: string;
  symptoms: string[];
  severity: number;
}

export interface NotificationSettings {
  alert: boolean;
  report: boolean;
  reminder: boolean;
}

export interface GuideItem {
  icon: string;
  title: string;
  desc: string;
}

export type ScreenId = 'home' | 'profile' | 'risk' | 'guide' | 'record' | 'settings';
