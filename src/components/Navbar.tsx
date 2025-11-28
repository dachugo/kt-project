import { logoKodoTakai } from "../utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header");
    if (element && header) {
      const headerHeight = header.offsetHeight;
      const offset = 30;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const DURATION = 0.2;
  const STAGGER = 0.025;

  const FlipLink = ({ children }: { children: string }) => {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap"
      >
        <div>
          {children.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </div>
      </motion.a>
    );
  };

  return (
    <header
      className={`w-full sticky top-0 z-100 transition-all duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl md:px-13 px-5">
        <div className="flex h-15 items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <img
              src={logoKodoTakai}
              alt="logo"
              className="h-5 w-auto md:h-10"
            />
          </button>

          <nav
            className="flex items-center gap-6 md:gap-20 text-sm md:text-base"
            aria-label="Main"
          >
            <button
              onClick={() => scrollToSection("tour")}
              className="font-main-title hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <FlipLink>Gira</FlipLink>
            </button>
            <button
              onClick={() => scrollToSection("planes")}
              className="font-main-title hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <FlipLink>Planes</FlipLink>
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="font-main-title hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <FlipLink>Sponsors</FlipLink>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
