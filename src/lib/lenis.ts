"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Set ready after a short delay to ensure Lenis is fully initialized
    setTimeout(() => {
      setIsReady(true);
    }, 100);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      setIsReady(false);
    };
  }, []);

  return isReady ? lenisRef.current : null;
}
