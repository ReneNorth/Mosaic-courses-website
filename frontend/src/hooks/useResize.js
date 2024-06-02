import { useState, useEffect } from 'react';
import { SCREEN_WIDTH } from '../utils/consts/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobileWidth = width <= SCREEN_WIDTH.mobileScreen;
  const isTabletWidth = width > SCREEN_WIDTH.mobileScreen && width < SCREEN_WIDTH.desktopScreen;
  const isDesktopWidth = width >= SCREEN_WIDTH.desktopScreen;

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isMobileWidth,
    isTabletWidth,
    isDesktopWidth,
  };
};
