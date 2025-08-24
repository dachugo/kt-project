import React from "react";
import { giraText, japaneseCherryTree } from "../utils";

export default function Tour() {
  return (
    <section className="relative w-full top-0 h-80% overflow-hidden lg:px-32 px-10 mb-20 lg:mb-30">
      <img
        src={japaneseCherryTree}
        alt="Japanese Cherry Tree"
        className="absolute top-1/2 right-0 -translate-y-1/2  w-[1000px] h-auto z-0 lg:scale-x-[-1] opacity-30"
      />

      <img
        src={japaneseCherryTree}
        alt="Japanese Cherry Tree"
        className="absolute top-1/2 left-0 lg:-translate-y-20 -translate-y-85 -translate-x-40 lg:-translate-x-50
lg:w-[500px] w-[300px] h-auto z-20 scale-x-[-1] lg:scale-x-[1] lg:-rotate-0 -rotate-[-110deg]"
      />

      <img
        src={japaneseCherryTree}
        alt="Japanese Cherry Tree"
        className="absolute top-1/2 right-0 -translate-y-1/2 lg:translate-x-[330px] translate-x-[170px] 
             lg:w-[700px] w-[700px] h-auto z-20 
             lg:-rotate-[115deg] -rotate-[105deg]"
      />

      <div className="relative flex flex-col items-center justify-start lg:justify-center h-full gap-5 z-10">
        <div className=" lg:gap-34 gap-5 flex flex-col lg:flex-row w-full items-start lg:items-center justify-between">
          <img
            src={giraText}
            alt="Gira Text"
            className="lg:w-[500px] w-[250px] mb-5"
          />

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="bg-[#777474] flex items-center justify-center w-full lg:p-10 p-5 overflow-hidden">
              Contenido 1
            </div>

            <div className="bg-[#777474] flex items-center justify-center w-full lg:p-10 p-5 overflow-hidden">
              Contenido 2
            </div>
          </div>
        </div>

        <div className="relative flex w-full h-auto z-10">
          <div className="flex lg:flex-row flex-col items-center gap-5 w-full">
            <div className="bg-[#434343] flex items-center justify-center w-full lg:py-25 py-15 overflow-hidden">
              Contenido 3
            </div>

            <div className="bg-[#434343] flex items-center justify-center w-full lg:py-25 py-15 overflow-hidden">
              Contenido 4
            </div>
          </div>
        </div>

        <div className="relative flex w-full h-auto z-10">
          <div className="flex lg:flex-row flex-col items-center gap-5 w-full">
            <div className="bg-[#434343] flex items-center justify-center w-full lg:py-15 py-5 overflow-hidden">
              Contenido 5
            </div>

            <div className="bg-[#434343] flex items-center justify-center w-full lg:py-15 py-5 overflow-hidden">
              Contenido 6
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
