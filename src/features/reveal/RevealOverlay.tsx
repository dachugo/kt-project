"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { mainBlackLogo } from "../../utils";

interface RevealOverlayProps {
  onComplete: () => void;
  duration?: number; // Duración en segundos (default: 3s para llegar a 100)
}

export default function RevealOverlay({
  onComplete,
  duration = 3,
}: RevealOverlayProps) {
  const [countdown, setCountdown] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  // Contador animado con incremento aleatorio (adaptado de JS vanilla a React)
  useEffect(() => {
    let currentValue = 0;
    const updateInterval = 300; // Actualiza cada 300ms
    const maxDuration = duration * 1000; // Convierte segundos a milisegundos
    const endValue = 100;
    const startTime = Date.now();

    function updateCounter() {
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime < maxDuration) {
        // Incremento aleatorio mientras no haya pasado el tiempo máximo
        currentValue = Math.min(
          currentValue + Math.floor(Math.random() * 30) + 10,
          endValue
        );
        setCountdown(currentValue);
        setTimeout(updateCounter, updateInterval);
      } else {
        // Cuando termina el tiempo, asegurar que llegue a 100
        setCountdown(100);
      }
    }

    updateCounter();
  }, [duration]);

  // Cuando el contador llega a 100, animar hacia arriba y revelar landing
  useEffect(() => {
    if (countdown !== 100 || !countdownRef.current || !logoRef.current) return;

    // Animar contador hacia arriba para que desaparezca por los límites del contenedor
    gsap.to(countdownRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    // Animar logo hacia arriba también
    gsap.to(logoRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onStart: () => {
        // Después de que el contador desaparezca, revelar landing
        setTimeout(() => {
          onComplete();
          // Ocultar overlay después de un pequeño delay
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
          }
        }, 100);
      },
    });
  }, [countdown, onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F3EFEC]"
      style={{ pointerEvents: countdown >= 100 ? "none" : "auto" }}
    >
      {/* Imagen de fondo */}
      <div ref={imageRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]" />
      </div>

      {/* Logo centrado independiente (invisible inicialmente, aparece con animación) */}
      <img
        ref={logoRef}
        src={mainBlackLogo}
        alt="Kodo Takai Logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[70px] h-[70px] object-contain"
      />

      {/* Contador posicionado independiente con overflow hidden para clip effect */}
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
