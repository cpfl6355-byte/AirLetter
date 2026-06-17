import { UserProfile, AirLevel, RiskResult } from '../types';

export function calculateRisk(profile: UserProfile | null, level: AirLevel): RiskResult {
  const baseScore = { good: 1, moderate: 2, unhealthy: 3, hazardous: 5 }[level] || 1;
  let bonus = 0;
  
  if (profile) {
    const c = profile.conditions || [];
    if (c.includes('respiratory')) bonus += 2;
    if (c.includes('allergy'))     bonus += 1;
    if (c.includes('elderly'))     bonus += 1;
    if (c.includes('child'))       bonus += 1;
    if (c.includes('pregnant'))    bonus += 1;
    
    const age = profile.age || 30;
    if (age >= 65 || age <= 12) bonus += 1;
  }
  
  const score = Math.min(baseScore + bonus, 5);
  let label = '안전';
  let cls = 'risk-safe';
  
  if (score <= 2) {
    label = '✅ 안전';
    cls = 'risk-safe';
  } else if (score <= 3) {
    label = '⚠️ 주의';
    cls = 'risk-caution';
  } else if (score <= 4) {
    label = '🚨 위험';
    cls = 'risk-danger';
  } else {
    label = '🔴 매우위험';
    cls = 'risk-critical';
  }
  
  return { score, label, cls };
}
