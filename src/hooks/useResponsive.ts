import { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentBreakpoint = () => {
    const { width } = windowSize;
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
  };

  return {
    isSm: windowSize.width >= breakpoints.sm,
    isMd: windowSize.width >= breakpoints.md,
    isLg: windowSize.width >= breakpoints.lg,
    isXl: windowSize.width >= breakpoints.xl,
    is2Xl: windowSize.width >= breakpoints["2xl"],
    currentBreakpoint: getCurrentBreakpoint(),
    width: windowSize.width,
    height: windowSize.height,
  };
};

export default useResponsive;
