import React from 'react';
import { useState, useEffect } from 'react';

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('resize', handleWidth);
  }, [screenWidth]);
  function handleWidth() {
    setScreenWidth(window.innerWidth);
  }

  return screenWidth;
}
