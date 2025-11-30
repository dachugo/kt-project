"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { mainBlackLogo } from "../../utils";

interface RevealOverlayProps {
  onComplete: () => void;
  duration?: number;
  isRevealed?: boolean;
}

export default function RevealOverlay({
  onComplete,
  duration = 3,
  isRevealed = false,
}: RevealOverlayProps) {
  const [countdown, setCountdown] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let currentValue = 0;
    const updateInterval = 300;
    const maxDuration = duration * 1000;
    const endValue = 100;
    const startTime = Date.now();

    function updateCounter() {
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime < maxDuration) {
        currentValue = Math.min(
          currentValue + Math.floor(Math.random() * 30) + 10,
          endValue
        );
        setCountdown(currentValue);
        setTimeout(updateCounter, updateInterval);
      } else {
        setCountdown(100);
      }
    }

    updateCounter();
  }, [duration]);

  // Cuando el contador llega a 10 anima el logo
  useEffect(() => {
    if (countdown !== 100 || !countdownRef.current || !logoRef.current) return;

    //Sincroniza las animaciones
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
        if (overlayRef.current) {
          overlayRef.current.style.display = "none";
        }
      },
    });

    // Anima contador y logo hacia arriba en un 10
    tl.to(countdownRef.current, {
      y: -10,
      opacity: 0,
      duration: 0.1,
      ease: "power2.out",
    }).to(
      logoRef.current,
      {
        y: -20,
        opacity: 0,
        duration: 0.1,
        ease: "power2.out",
      },
      "<"
    );
  }, [countdown, onComplete]);

  if (isRevealed && countdown >= 100) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F3EFEC]"
      style={{
        pointerEvents: countdown >= 100 ? "none" : "auto",
      }}
    >
      <div ref={imageRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
      </div>

      <img
        ref={logoRef}
        src={mainBlackLogo}
        alt="Kodo Takai Logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[70px] h-[70px] object-contain"
      />

      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 z-10 w-[200px] h-[50px] overflow-hidden">
        <div
          ref={countdownRef}
          className="flex items-baseline gap-1 justify-center"
        >
          <span
            id="counter"
            className="text-[20px] font-main-title text-[#0E0E0E] tracking-tighter"
          >
            {countdown}
          </span>
          <span className="text-[20px] font-main-title text-[#0E0E0E]">%</span>
        </div>
      </div>
    </div>
  );
}
