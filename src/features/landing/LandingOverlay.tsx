"use client";

import { useRef } from "react";

interface LandingOverlayProps {
  overlayRef: React.RefObject<HTMLDivElement | null>;
}

export default function LandingOverlay({ overlayRef }: LandingOverlayProps) {
  return (
    <div
      ref={overlayRef}
      className="absolute top-0 left-0 w-full h-full bg-[#0c0000] z-[9998]"
      style={{
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      }}
    />
  );
}
