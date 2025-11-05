import { giraText, japaneseCherryTree } from "../utils";
import { HiInformationCircle, HiCalendar } from "react-icons/hi";

export default function Tour() {
  return (
    <section
      id="tour"
      className="relative w-full top-0 h-80% overflow-hidden lg:px-32 px-10 mb-20 lg:mb-30"
    >
      <img
        src={japaneseCherryTree}
        alt="Japanese Cherry Tree"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-auto z-0 lg:scale-x-[-1] opacity-20"
      />

      <img
        src={japaneseCherryTree}
        alt="Japanese Cherry Tree"
        className="absolute top-1/2 left-0 lg:-translate-y-20 -translate-y-85 -translate-x-45 lg:-translate-x-70
lg:w-[500px] w-[300px] h-auto z-20 scale-x-[-1] lg:scale-x-[1] lg:-rotate-0 -rotate-[-110deg]"
      />

      <img
        src={japaneseCherryTree}
        alt="Japanese Cherry Tree"
        className="absolute top-1/2 right-0 -translate-y-[40px] lg:translate-x-[390px] translate-x-[260px] sm:translate-x-[400px] md:translate-x-[400px] 

             lg:w-[700px] w-[700px] h-auto z-20 
             lg:-rotate-[115deg] -rotate-[105deg]"
      />

      <div className="relative flex flex-col items-center justify-start lg:justify-center h-full gap-5 z-10">
        <div className=" lg:gap-34 gap-5 flex flex-col lg:flex-row w-full items-start lg:items-center justify-between mb-5">
          <img
            src={giraText}
            alt="Gira Text"
            className="lg:w-[500px] w-[250px] mb-2"
          />

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex w-full font-main-title font-medium lg:text-xl text-lg lg:py-5 py-0 overflow-hidden">
              Mantente al tanto de nuestras próximas presentaciones y eventos en
              vivo. ¡No te pierdas la oportunidad de vivir la experiencia Kodo
              Takai en persona!
            </div>

            <div className="flex items-center gap-5 w-full mt-2">
              <button className="bg-[#a04545] lg:px-10 duration-400 font-medium font-main-title lg:py-3 px-3 py-3 text-sm lg:text-md text-amber-50 rounded-lg hover:bg-[#391515] cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <HiInformationCircle className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                Más Información
              </button>
              <button className="bg-[#dedede] lg:px-10 duration-400 font-medium font-main-title lg:py-3 px-3 py-3 text-sm lg:text-md rounded-md hover:bg-[#b7b3b3] cursor-pointer flex items-center gap-2 whitespace-nowrap">
                <HiCalendar className="w-4 h-4 lg:w-5 lg:h-5 text-black flex-shrink-0" />
                Agendar
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex w-full h-auto z-10">
          <div className="flex lg:flex-row flex-col items-center gap-5 w-full">
            <div className="bg-[#e1e1e1] w-full p-5 rounded-lg overflow-hidden min-h-[220px] flex flex-col gap-2">
              {/* Sección superior */}
              <div className="flex xl:h-[60%] xl:min-h-[100px]">
                {/* Bloque izquierdo alto naranja */}
                <div className="flex-[0.6] flex xl:text-9xl text-5xl bg-[linear-gradient(to_bottom,#f67979_13%,#541918_100%)] bg-clip-text text-transparent font-black items-center justify-center">
                  <p>1</p>
                </div>

                {/* Columna media */}
                <div className="flex-[2] flex flex-col">
                  <div className="flex-1 xl:text-5xl text-lg leading-none font-main-title font-medium flex items-center">
                    <p>SINCELEJO,</p>
                  </div>
                  {/* Bloque inferior naranja */}
                  <div className="xl:text-4xl text-lg font-main-title font-medium flex-1 flex items-center">
                    <p>Sucre</p>
                  </div>
                </div>

                {/* Columna derecha */}
                <div className="flex-[1] flex flex-col">
                  {/* Bloque superior azul */}
                  <div className="bg-[linear-gradient(to_bottom,#f67979_13%,#541918_100%)] bg-clip-text font-main-text text-transparent flex-1 xl:text-6xl text-4xl font-black flex items-center justify-center">
                    <p>04</p>
                  </div>
                  {/* Bloque inferior azul */}
                  <div className="xl:text-5xl text-3xl tracking-tight leading-tight font-main-text font-black bg-[linear-gradient(to_bottom,#f67979_13%,#541918_100%)] bg-clip-text text-transparent flex-[0.6] flex items-center justify-center">
                    <p>Días</p>
                  </div>
                </div>
              </div>

              <div className="flex h-[40%] min-h-[56px]">
                {" "}
                {/* Bloque izquierdo rojo */}
                <div className="flex-[2] xl:text-3xl text-2xl font-main-title flex items-center justify-start pl-10">
                  <p>20 al 23 de Octubre</p>
                </div>
                <div className="text-xl bg-[#cccccc] rounded-md flex-1 font-main-title flex items-center justify-center">
                  <p>1. Parada Principal</p>
                </div>
              </div>
            </div>

            <div className="bg-[#e1e1e1] w-full p-5 rounded-lg overflow-hidden min-h-[220px] flex flex-col gap-2">
              <div className="flex h-[60%] min-h-[100px]">
                <div className="flex-[1] flex text-9xl bg-[linear-gradient(to_bottom,#f67979_13%,#541918_100%)] bg-clip-text text-transparent font-black items-center justify-center">
                  <p>2</p>
                </div>

                <div className="flex-[2] flex flex-col">
                  <div className="flex-1 text-5xl leading-none font-main-title font-medium flex items-center">
                    <p>CARTAGENA,</p>
                  </div>
                  <div className="text-4xl font-main-title font-medium flex-1 flex items-center">
                    <p>Bolivar</p>
                  </div>
                </div>

                <div className="flex-[1] flex flex-col">
                  <div className="bg-[linear-gradient(to_bottom,#f67979_13%,#541918_100%)] bg-clip-text font-main-text text-transparent flex-1 text-6xl font-black flex items-center justify-center">
                    <p>03</p>
                  </div>
                  <div className="text-5xl tracking-tight leading-tight font-main-text font-black bg-[linear-gradient(to_bottom,#f67979_13%,#541918_100%)] bg-clip-text text-transparent flex-[0.6] flex items-center justify-center">
                    <p>Días</p>
                  </div>
                </div>
              </div>
              <div className="flex h-[40%] min-h-[56px]">
                <div className="flex-[2] text-3xl font-main-title flex items-center justify-start pl-10">
                  <p>24 al 26 de Octubre</p>
                </div>
                <div className="text-xl bg-[#cccccc] rounded-md flex-1 font-main-title flex items-center justify-center">
                  <p>2. Gran Final</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-full h-auto z-10">
          <div className="flex lg:flex-row flex-col items-center gap-5 w-full">
            <div className="bg-[#d5d5d5] flex items-center justify-center w-full lg:py-15 py-5 overflow-hidden">
              <div className="p-5">
                <p>Desarrolladores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
