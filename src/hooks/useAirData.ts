import { useState, useEffect, useCallback } from 'react';
import { AirData } from '../types';
import { REGION_MAP } from '../data/guideData';
import { fetchAlarmData, alarmsToAirData } from '../utils/api';

export function useAirData(region: string) {
  const [airData, setAirData] = useState<AirData>({
    pm10: 0,
    pm25: 0,
    level: 'good',
    alarms: [],
    loading: true,
  });

  const refresh = useCallback(async () => {
    setAirData(prev => ({ ...prev, loading: true }));
    const sidoName = REGION_MAP[region] || '서울';
    const alarms = await fetchAlarmData(sidoName);
    const resolved = alarmsToAirData(alarms, region);
    setAirData({
      ...resolved,
      loading: false,
    });
  }, [region]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { airData, refresh };
}
export default useAirData;
