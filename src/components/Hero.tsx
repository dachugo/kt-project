"use client";

import {
  mountainsBg_1,
  mountainsBg_2,
  mountainsBg_3,
  imagen20,
  mainKtLogo,
  kodoTakaiMd,
  kodoTakaiSm,
  k_text,
  o_text,
  d_text,
  t_text,
  a_text,
  i_text,
} from "../utils";

import TextAnimation from "./TextAnimation";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const kodoTakaiSmRef = useRef(null);

  useEffect(() => {
    if (kodoTakaiSmRef.current) {
      const container = kodoTakaiSmRef.current as HTMLDivElement;
      const images = container.querySelectorAll("img");

      // Establecer estado inicial en cada imagen: invisible y más abajo
      gsap.set(images, {
        opacity: 0,
        y: 200,
      });

      // Animar cada imagen con stagger
      gsap.to(images, {
        delay: 0.5,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1)",
        stagger: {
          amount: 0.2,
        },
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={mountainsBg_3}
          className="absolute left-1/2 -translate-x-1/2 w-full h-auto z-0 
          top-[-140px] sm:top-[-220px] md:top-[-300px] lg:top-[-380px] xl:top-[-570px] opacity-90"
          alt=""
        />

        <img
          src={mountainsBg_2}
          className="absolute left-1/2 -translate-x-1/2 w-full h-auto z-10 
          top-[-60px] sm:top-[-120px] md:top-[-200px] lg:top-[-350px] xl:top-[-620px]"
          alt=""
        />

        <img
          src={kodoTakaiSm}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 w-[55%] h-auto z-15 
          top-[30px] md:hidden"
        />
        {/* <img
          ref={kodoTakaiSmRef}
          src={kodoTakaiMd}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 h-auto z-15 opacity-0
          hidden md:block w-[80%] md:top-[20px] lg:w-[85%] lg:top-3 xl:w-[90%]"
        /> */}

        <div
          ref={kodoTakaiSmRef}
          className="absolute left-1/2 -translate-x-1/2 h-auto z-15 gap-3
          hidden md:flex md:items-center md:justify-center
          md:top-[20px] lg:top-[20px]"
        >
          {/* KODO */}
          <img
            src={k_text}
            alt="K"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />
          <img
            src={o_text}
            alt="O"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />
          <img
            src={d_text}
            alt="D"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[240px] w-auto object-contain"
          />
          <img
            src={o_text}
            alt="O"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />

          {/* Espacio entre palabras */}
          <div className="w-[20px] md:w-[30px] lg:w-[40px] xl:w-[1150px]"></div>

          {/* TAKAI */}
          <img
            src={t_text}
            alt="T"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />
          <img
            src={a_text}
            alt="A"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />
          <img
            src={k_text}
            alt="K"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />
          <img
            src={a_text}
            alt="A"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />
          <img
            src={i_text}
            alt="I"
            className="h-[80px] md:h-[100px] lg:h-[120px] xl:h-[250px] w-auto object-contain"
          />
        </div>

        <img
          src={mountainsBg_1}
          className="absolute left-1/2 blur-xs -translate-x-1/2 w-full h-auto z-20 
          top-[125px] sm:top-[80px] md:top-0 lg:top-[-120px] xl:top-[-240px]"
          alt=""
        />
      </div>

      <div className="absolute inset-0 z-30 flex justify-center items-center">
        <img
          src={mainKtLogo}
          alt="Logo Kodo Takai"
          className="
      relative h-auto mx-auto
      w-[55%] translate-y-[-120px]   /* centrado en móviles pero bajado un poco */
      sm:w-[50%] sm:translate-y-0 sm:bottom-[100px] 
      md:w-[40%] md:bottom-[90px] 
      lg:w-[35%] lg:bottom-[40px]
      xl:w-[30%] xl:bottom-[15px] 
    "
        />
      </div>

      <div
        className="
          absolute inset-x-0 lg:bottom-[170px] bottom-[90px] -translate-y-1/2
          flex flex-col lg:flex-row items-center justify-between
          px-7 sm:px-10 lg:px-15
          z-50 text-black text-center lg:text-left
        "
      >
        <div>
          <TextAnimation delay={0.5}>
            <h1 className="text-[2.3rem] leading-[35px] font-main-title mt-[-50px] font-medium text-center lg:text-left lg:text-4xl">
              Competencia Multi-Ciudad
            </h1>
          </TextAnimation>
          <TextAnimation delay={0.5}>
            <h1 className="md:text-lg text-[0.9rem] font-main-title text-center lg:text-left mt-2">
              Conectando desarrolladores y profesionales de <br />
              tecnología en Colombia
            </h1>
          </TextAnimation>
        </div>

        <div className="flex items-center gap-3 pt-10">
          <img src={imagen20} alt="20" className="w-[80px] h-auto" />
          <div className="h-[60px] w-[1px] bg-black"></div>
          <div className="flex flex-col ml-1 leading-tight text-left">
            <TextAnimation>
              <span className="text-sm md:text-lg font-main-title tracking-wide">
                DE
              </span>
            </TextAnimation>
            <TextAnimation>
              <span className="text-sm md:text-2xl font-main-title tracking-wide">
                OCTUBRE
              </span>
            </TextAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
