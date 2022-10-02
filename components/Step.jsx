import Image from "next/image";
import React from "react";
import Example from "./Example";
import gbr from "../img/2.png";

const Step = () => {
  return (
    <>
      <div className="lg:container bg-dark py-24">
        <div className="flex justify-center text-center mb-12">
          <h1 className="text-white text-4xl font-bold">
            Materi <span className="text-secondary">Belajar</span>{" "}
          </h1>
        </div>
          <p className="text-white my-4 text-center text-lg">rangkaian materi belajar yang akan kamu pelajari di program ini</p>
        <div className="flex flex-wrap">
          <div className="relative w-full slef-center lg:px-20 px-4 lg:w-1/2 lg:mt-20">
            <Image src={gbr} alt="/" />
          </div>
          <div className="w-full slef-center lg:px-20 px-4 lg:w-1/2 mb-12 lg:mb-0">
            <Example />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step;
