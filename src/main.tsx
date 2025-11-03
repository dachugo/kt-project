import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import "./index.css";
import App from "./App.tsx";

function SmoothScrollWrapper() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 4,
      orientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScrollWrapper />
  </StrictMode>
);
