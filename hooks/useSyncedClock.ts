import { useEffect } from 'react';

const MILLIS_PER_SECOND = 1000;

const useSyncedClock = (callback: () => void): void => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      callback();
      timeoutId = setInterval(callback, MILLIS_PER_SECOND);
    }, MILLIS_PER_SECOND - new Date().getMilliseconds());

    return () => clearInterval(timeoutId);
  }, [callback]);
};

export default useSyncedClock;
