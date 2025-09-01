import { japaneseSugarcane_3, eventoText } from "../utils";

export default function Sponsors() {
  return (
    <>
      <section id="sponsors" className="relative w-full lg:h-[55rem] h-[70rem] overflow-hidden z-10">
        <img
          src={japaneseSugarcane_3}
          alt=""
          className="absolute bottom-0 right-0 lg:translate-x-[-10px] translate-x-[120px] object-contain w-80 lg:w-55 h-auto z-[-20] "
        />

        <div className="relative flex flex-col lg:px-20 px-5">
          <div className="flex flex-col mt-20">
            <p className="font-doto lg:text-[30px] text-[20px] text-left pl-3">
              スポンサー
            </p>
            <p className="font-main-title text-left lg:text-[30px] text-[20px] pl-3">
              PATROCINADORES
            </p>
            <img
              src={eventoText}
              alt=""
              className="w-[20rem] lg:w-[55rem] h-auto z-[-20] pl-2 lg:pl-0"
            />

            <div className="flex flex-row w-full items-center mt-2">
              <p className="font-main-title w-[70%] lg:w-[40%] text-[12px] lg:text-[20px] text-left pl-3">
                Conoce a nuestros patrocinadores que hacen posible
                <br className="hidden lg:block md:hidden" />
                este evento!
              </p>

              <div className="h-[1px] w-[20%] lg:w-[30%] bg-black lg:mx-10 flex items-center justify-center"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 my-10 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-[10rem] h-[10rem] bg-[#727272] flex items-center justify-center text-white 
                 transition-all duration-300 cursor-pointer 
                 hover:scale-103 active:scale-100"
              >
                {i + 1}
              </div>
            ))}
          </div>

          <div className="w-full max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center justify-between rounded-xl p-6 md:p-8 ">
              <div className="text-center md:text-left mb-4 md:mb-0 md:mr-6 flex-1">
                <h2 className="text-xl font-main-title md:text-2xl font-bold text-gray-800 mb-2">
                  ¿Quieres ser parte de nuestro evento?
                </h2>
                <p className="text-gray-600 font-main-title">
                  No te pierdas esta gran oportunidad
                </p>
              </div>

              <div className="w-full md:w-auto">
                <button className="font-main-title w-full md:w-auto bg-gradient-to-b from-[#ce4747] from-33% to-[#5c1e1d] to-100% text-white py-3 px-10 rounded-lg transition duration-200 cursor-pointer hover:scale-103">
                  Ser Sponsor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
