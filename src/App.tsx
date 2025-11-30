import { useState, useRef, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import RevealOverlay from "./features/reveal/RevealOverlay";
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
  const lenis = useLenis();

  // Deshabilitar scroll y Lenisss
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

  // Animación del landing page cuando el overlay termina
  useGSAP(
    () => {
      if (!isRevealed || !landingRef.current) return;

      landingRef.current.style.visibility = "visible";
      landingRef.current.style.pointerEvents = "auto";

      // Animar landing page desde abajo :p
      gsap.fromTo(
        landingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "back.out",
          delay: 0,
        }
      );
    },
    { scope: landingRef, dependencies: [isRevealed] }
  );

  const handleRevealComplete = () => {
    setIsRevealed(true);
  };

  return (
    <div className="relative">
      <div
        ref={landingRef}
        style={{
          opacity: 0,
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        <Navbar />
        <Hero />
        <Tour />
        <CountDownText />
        <CountDown />
        <Planes />
        <Sponsors />
        <Footer />
      </div>

      <RevealOverlay
        onComplete={handleRevealComplete}
        duration={3}
        isRevealed={isRevealed}
      />
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
