import React, { useCallback } from 'react';
import useSyncedClock from './useSyncedClock';

const useClock = (): Date => {
  const [now, setNow] = React.useState(new Date());
  const updateClock = useCallback(() => {
    setNow(new Date());
  }, []);
  useSyncedClock(updateClock);
  return now;
};

export default useClock;
