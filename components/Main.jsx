import React from "react";
import DataWhy from "./data/DataWhy";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import gbr from "../img/1.png";
import Image from "next/image";

const Main = () => {
  return (
    <div className="lg:container bg-dark py-24">
      <div className="flex justify-center text-center mb-12">
        <h1 className="text-white text-4xl font-bold">
          Yuk Gabung di <span className="text-secondary">FrontendClass.id</span>{" "}
        </h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full slef-center lg:px-20 px-4 lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-white text-lg font-bold mb-5 mt-16">Belajar sepuasnya, tidak ada batas waktu. Beli sekali akses seumur hidup. Materi update terus mengikuti perkembangan zaman dan tren industri, tanpa tambahan biaya.</h1>
          {DataWhy.slice(0, 4).map((item) => {
            return (
              <div key={item.id}>
                <ol>
                  <li className="ml-12 text-white text-md">{item.textMain}</li>
                </ol>
              </div>
            );
          })}
          <button className="rounded-sm p-3 mt-5 hover:bg-secondary ring-1 hover:scale-90 transition-all duration-300 ring-secondary hover:text-dark text-secondary  w-1/2">
            {" "}
            <PlayCircleIcon className="inline-flex h-5 mb-1 w-5 mr-2" /> Lihat demo materi
          </button>
        </div>
        <div className="relative w-full slef-center lg:px-20 px-4 lg:w-1/2 lg:mt-20">
          <Image src={gbr} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Main;
