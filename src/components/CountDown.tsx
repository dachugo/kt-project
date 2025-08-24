import React from "react";
import { japaneseSugarcane_1, japaneseSugarcane_2 } from "../utils";

export default function CountDown() {
  return (
    <>
      <section className="relative w-full top-25 h-screen justify-center overflow-hidden mb-20 z-10">
        <img
          src={japaneseSugarcane_2}
          alt=""
          className="absolute bottom-0 left-0 translate-x-[-20px] object-contain w-40 h-auto z-20"
        />
        <img
          src={japaneseSugarcane_1}
          alt=""
          className="absolute bottom-0 right-0 translate-x-[10px] object-contain w-50 h-auto z-20"
        />

        <div className="relative flex flex-col items-center justify-center px-10">
          <div className="flex flex-row">
            <div className="h-[1px] lg:w-[200px] w-[60px] mt-5 bg-black"></div>
            <p className="font-doto lg:text-[30px] text-[20px] lg:px-10 px-5">
              カウントダウン
            </p>
            <div className="h-[1px] lg:w-[200px] w-[60px] mt-5 bg-black"></div>
          </div>

          <div>
            <p className="font-main-text font-black lg:text-[260px] text-[90px] my-5 leading-none">
              00:00:00
            </p>
          </div>

          <div>LINEA</div>

          <div className="flex flex-row lg:gap-15 gap-10 my-5 w-full justify-center">
            <button className="bg-amber-400 lg:w-60 w-full h-20 rounded-xl">
              Boton 1
            </button>
            <button className="bg-[#777474] lg:w-60 w-full h-20 rounded-xl">
              Boton 2
            </button>
          </div>

          <div className="flex lg:flex-row flex-col w-full lg:gap-15 gap-5 my-4 justify-center">
            <button className="bg-[#505050] lg:w-60 w-full h-20 rounded-xl">
              Boton 1
            </button>
            <button className="bg-[#505050] lg:w-60 w-full h-20 rounded-xl">
              Boton 2
            </button>
            <button className="bg-[#505050] lg:w-60 w-full h-20 rounded-xl">
              Boton 3
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
