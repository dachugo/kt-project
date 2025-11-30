import { useState, useRef, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import RevealOverlay from "./features/reveal/RevealOverlay";
import { LandingOverlay } from "./features/landing";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tour from "./components/Tour";
import CountDownText from "./components/CountDownText";
import CountDown from "./components/CountDown";
import Planes from "./components/Planes";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function AppContent() {
  const [isRevealed, setIsRevealed] = useState(false);
  const landingRef = useRef<HTMLDivElement>(null);
  const landingOverlayRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Deshabilitar scroll y Lenis mientras el overlay está visible
  useEffect(() => {
    document.body.style.overflow = isRevealed ? "" : "hidden";

    if (lenis) {
      isRevealed ? lenis.start() : lenis.stop();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isRevealed, lenis]);

  // Animación de revelación con clipPath (adaptada de JS vanilla)
  useGSAP(
    () => {
      if (!isRevealed || !landingRef.current || !landingOverlayRef.current)
        return;

      landingRef.current.style.visibility = "visible";
      landingRef.current.style.pointerEvents = "auto";

      // Estado inicial del landing (oculto desde abajo)
      gsap.set(landingRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        transform: "translate(-50%, -50%) scale(0.7)",
      });

      // Animar landing: clipPath se abre desde abajo
      gsap.to(landingRef.current, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "expo.inOut",
        onStart: () => {
          // Animar landing: scale
          gsap.to(landingRef.current, {
            transform: "translate(-50%, -50%) scale(1)",
            duration: 2.5,
            ease: "expo.out",
            delay: 0.25,
          });

          // Animar overlay: clipPath se cierra desde arriba
          gsap.to(landingOverlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.5,
            delay: 0.5,
            ease: "expo.inOut",
          });
        },
      });
    },
    { scope: landingRef, dependencies: [isRevealed] }
  );

  const handleRevealComplete = () => {
    setIsRevealed(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Landing Page - siempre renderizado pero oculto inicialmente con clipPath */}
      <div
        ref={landingRef}
        className="absolute top-1/2 left-1/2 w-screen h-screen"
        style={{
          transform: "translate(-50%, -50%)",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          visibility: "hidden",
          pointerEvents: "none",
          willChange: "transform, clip-path",
          zIndex: 1,
        }}
      >
        {/* Overlay negro dentro del landing (se anima con clipPath) */}
        <LandingOverlay overlayRef={landingOverlayRef} />

        {/* Contenido del landing */}
        <Navbar />
        <Hero />
        <Tour />
        <CountDownText />
        <CountDown />
        <Planes />
        <Sponsors />
        <Footer />
      </div>

      {/* Reveal Overlay - solo visible si no está revelado */}
      {!isRevealed && (
        <RevealOverlay onComplete={handleRevealComplete} duration={3} />
      )}
    </div>
  );
}

function App() {
  return (
    <ReactLenis root>
      <AppContent />
    </ReactLenis>
  );
}

export default App;
