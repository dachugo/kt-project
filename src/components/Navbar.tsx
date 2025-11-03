import { logoKodoTakai } from "../utils";
import { useState, useEffect } from "react";

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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
              Gira
            </button>
            <button
              onClick={() => scrollToSection("planes")}
              className="font-main-title hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              Plans
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="font-main-title hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              Sponsors
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
