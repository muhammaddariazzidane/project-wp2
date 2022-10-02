import Image from "next/image";
import React from "react";
import gb from "../img/foto2-removebg-preview.png";
import DataWhy from "./data/DataWhy";

const Why = () => {
  return (
    <div className="lg:container w-full bg-dark">
      <div className="w-[90%] h-full flex mx-auto bg-gray-800">
        <div className="px-4 flex flex-wrap">
          <div className="relative w-full self-center lg:px-20 px-4 lg:w-1/2 mt-20 ">
            <Image src={gb} alt="/" />
          </div>
          <div className="w-full self-center mt-12 lg:px-20 px-4 lg:w-1/2 mb-12 lg:mb-0">
            <ol type="A" className="text-white">
              {DataWhy.map((item) => {
                return (
                  <div key={item.id}>
                    <li className="text-md">{item.text}</li>
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <p className="text-center mx-auto bg-gray-800 w-[90%] lg:py-12 py-8 lg:text-lg text-secondary font-semibold">Jangan-jangan selama ini kamu salah cara belajarnya!</p>
    </div>
  );
};

export default Why;
