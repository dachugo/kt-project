import React from "react";
import { cuentaText, japaneseStork, mountainsFooter } from "../utils";

export default function CountDownText() {
  return (
    <>
      <section className="relative w-full h-65% top-0 flex flex-col justify-center overflow-hidden">
        <div className="w-full justify-center flex flex-row lg:px-32 px-10 z-10 lg:mb-40 mb-30">
          <img
            src={japaneseStork}
            alt=""
            className="w-[250px] mb-20 lg:block hidden mx-5 "
          />

          <div className="justify-center w-auto flex-col flex items-center h-full">
            <img
              src={japaneseStork}
              alt=""
              className="block mx-auto w-[150px] lg:hidden mb-5"
            />
            <img src={cuentaText} alt="" className="lg:w-[550px] w-[250px]" />
            <p className="font-main-title lg:text-[90px] text-[40px] mt-1 leading-none text-center">
              REGRESIVA
            </p>{" "}
            <div className="h-[1px] lg:w-[600px] w-[250px] mt-5 bg-black"></div>
            <p className="font-main-title lg:text-[40px] text-[30px] p-2 text-center">
              Para el gran evento
            </p>
            <p className="font-main-title lg:text-[17px] text-[13px] lg:px-0 px-4 text-center">
              Únete a la experiencia tech más esperada del año. ¡No te lo
              pierdas!
            </p>
          </div>

          <img
            src={japaneseStork}
            alt=""
            className="w-[250px] mb-20 lg:block hidden mx-5 scale-x-[-1]"
          />
        </div>

        <img
          src={mountainsFooter}
          alt=""
          className="absolute bottom-0 lg:bottom-[-40px] left-0 w-[200%] sm:w-[150%] md:w-full 
             object-cover object-bottom z-0"
        />
      </section>
    </>
  );
}
