import {
  mountainsBg_1,
  mountainsBg_2,
  mountainsBg_3,
  imagen20,
  mainKtLogo,
  kodoTakaiMd,
  kodoTakaiSm,
} from "../utils";

export default function Hero() {
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
        <img
          src={kodoTakaiMd}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 h-auto z-15 opacity-100
          hidden md:block w-[80%] md:top-[20px] lg:w-[85%] lg:top-2 xl:w-[90%]"
        />

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
      xl:w-[30%] xl:bottom-[10px] 
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
          <h1 className="text-[2.3rem] leading-[35px] font-main-title mt-[-50px] font-medium text-center lg:text-left lg:text-4xl">
            Competencia Multi-Ciudad
          </h1>
          <h1 className="md:text-lg text-[0.9rem] font-main-title text-center lg:text-left mt-2">
            Conectando desarrolladores y profesionales de <br />
            tecnología en Colombia
          </h1>
        </div>

        <div className="flex items-center gap-3 pt-10">
          <img src={imagen20} alt="20" className="w-[80px] h-auto" />
          <div className="h-[60px] w-[1px] bg-black"></div>
          <div className="flex flex-col ml-1 leading-tight text-left">
            <span className="text-sm md:text-lg font-main-title tracking-wide">
              DE
            </span>
            <span className="text-sm md:text-2xl font-main-title tracking-wide">
              OCTUBRE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
