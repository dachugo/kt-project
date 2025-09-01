import React from "react";
import { japaneseSugarcane_1, japaneseSugarcane_2 } from "../utils";

export default function CountDown() {
  return (
    <>
      <section className="relative w-full top-25 h-screen justify-center overflow-hidden mb-20 z-10">
        <img
          src={japaneseSugarcane_2}
          alt=""
          className="absolute bottom-0 left-0 translate-x-[-20px] object-contain w-25 lg:w-40 h-auto z-20"
        />
        <img
          src={japaneseSugarcane_1}
          alt=""
          className="absolute bottom-0 right-0 translate-x-[10px] object-contain w-20 lg:w-50 h-auto z-20 "
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
            <p
              className="font-main-text font-black lg:text-[260px] text-[90px] mt-5 leading-none 
     bg-[linear-gradient(to_bottom,#f67979_13%,#541918_100%)] bg-clip-text text-transparent"
            >
              00:00:00
            </p>
          </div>

          <div className="w-[100%] lg:w-[70%] h-4 rounded-full bg-[linear-gradient(to_left,#FF7372_33%,#B14D4C_100%)] mb-3"></div>

          <div className="flex flex-row lg:gap-15 gap-10 my-5 mt-8 w-full justify-center">
            <button className="bg-gradient-to-b from-[#ff6d6d] from-33% to-[#7a2a29] to-100% lg:w-60 w-full h-20 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103">
              Boton 1
            </button>
            <button className="bg-[#777474] lg:w-60 w-full h-20 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103">
              Boton 2
            </button>
          </div>

          <div className="flex lg:flex-row flex-col w-full lg:gap-15 gap-5 my-4 justify-center">
            <button className="bg-[#505050] lg:w-60 w-full h-20 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103">
              Boton 1
            </button>
            <button className="bg-[#505050] lg:w-60 w-full h-20 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103">
              Boton 2
            </button>
            <button className="bg-[#505050] lg:w-60 w-full h-20 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103">
              Boton 3
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
