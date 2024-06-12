import { useRef } from 'react';

export function useThrottle(cb, limit) {
  const lastRun = useRef(Date.now());

  // eslint-disable-next-line func-names
  return function () {
    if (Date.now() - lastRun.current >= limit) {
      cb();
      lastRun.current = Date.now();
    }
  };
}
