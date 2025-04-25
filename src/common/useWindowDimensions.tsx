import { useState, useEffect } from 'react';

const defaultCustomBreakpoints = [
  {id: "sm", minWidth: 640},
  {id: "md", minWidth: 768},
  {id: "lg", minWidth: 1024},
  {id: "xl", minWidth: 1280},
  {id: "2xl", minWidth: 1536},
]

interface WindowDimentions {
    width: number;
    height: number;
}

function getWindowDimensions(): WindowDimentions {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

export function useWindowDimensions(): WindowDimentions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function getCurrentBreakpoint(customBreakpoints) {
  const {width, height} = getWindowDimensions();
  let currentBreakPoint = null;
  customBreakpoints.forEach((breakpoint) => {
    if(width >= breakpoint.minWidth) {
      currentBreakPoint = breakpoint.id;
    }
  });
  return currentBreakPoint;
}

export function useMediaQuery(customBreakpoints = defaultCustomBreakpoints) {
  const [breakpoints] = useState(customBreakpoints);
  const [currentBreakpoint, setCurrentBreakpoint] = useState(getCurrentBreakpoint(breakpoints));
  useEffect(() => {
    function handleResize(): void {
      setCurrentBreakpoint(getCurrentBreakpoint(breakpoints));
    }
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);
  return currentBreakpoint;
}
