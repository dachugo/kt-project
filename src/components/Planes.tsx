import React from "react";
import { planesText } from "../utils";

export default function Planes() {
  return (
    <>
      <section id="planes" className="relative w-full lg:h-[70rem] h-[115rem] justify-center overflow-hidden p-5 z-10 bg-[#060606]">
        <div className="relative flex flex-col items-center justify-center px-10">
          <div className="items-center mt-30 flex flex-col gap-2">
            <img src={planesText} alt="" className="w-auto lg:h-35 h-20" />
            <div className="flex flex-row items-center">
              <div className="h-[1px] lg:w-[120px] w-[60px] bg-white"></div>
              <p className="font-main-title lg:text-[30px] text-[15px] px-git 2 lg:px-5 text-white">
                DE PATROCINIO
              </p>
              <div className="h-[1px] lg:w-[120px] w-[60px] bg-white"></div>
            </div>

            <p className="font-main-title lg:text-[13px] text-[12px] text-center opacity-50 text-white max-w-2xl lg:px-20 lg:leading-5">
              Conecta con desarrolladores, estudiantes y profesionales
              tech. Elige el plan que mejor se adapte a tus objetivos.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-15 gap-10 my-5 mt-8 w-full justify-center">
            <button className="bg-[#FFFFFF] lg:w-80 w-full lg:h-130 h-90 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Boton 1
            </button>
            <button className="bg-[#FFFFFF] lg:w-80 w-full lg:h-130 h-90 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Boton 2
            </button>
            <button className="bg-[#FFFFFF] lg:w-80 w-full lg:h-130 h-90 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Boton 3
            </button>
          </div>

          <div className="w-full items-center flex flex-col">
            <button className="bg-gradient-to-b from-[#ff7878] from-13% cursor-pointer to-[#ffeaea] to-100% w-[95%] lg:w-[25%] h-15 rounded-xl mt-5 transition-all duration-300 ease-in-out hover:scale-103">
              Boton 4
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
