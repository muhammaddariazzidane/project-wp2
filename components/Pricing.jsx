import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  const data = [
    {
      id: 1,
      desc: "Sertifikat Digital",
    },
    {
      id: 2,
      desc: "Grup Member untuk Silaturahmi dan Informasi",
    },
    {
      id: 3,
      desc: "Forum Tanya Jawab",
    },
    {
      id: 4,
      desc: "Konsultasi Online Mingguan",
    },
    {
      id: 5,
      desc: "6 Project Studi Kasus",
    },
  ];

  return (
    <>
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-2xl text-secondary font-bold md:text-4xl">Investasi 1x Seumur Hidup</h2>
        </div>
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-xl bg-gray-700 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
            <div className="relative p-6 space-y-6 lg:p-8">
              <h3 className="text-3xl text-secondary font-semibold text-center">Promo terbatas!</h3>
              <div>
                <div className="relative flex justify-around">
                  <div className="flex items-end">
                    <span className="text-8xl text-white font-bold leading-0">35</span>
                    <div className="pb-2">
                      <span className="block text-2xl text-white font-bold">%</span>
                      <span className="block text-xl text-secondary font-bold">Off</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl line-through text-red-600 font-semibold text-center py-3">Rp 1.495.000</h3>
                <h3 className="text-4xl text-secondary animate-pulse font-semibold text-center pb-5">Rp 495.000</h3>
              </div>

              <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-sm hover:scale-90 transition duration-300 bg-secondary hover:bg-secondary/80 ">
                <span className="text-white font-semibold">Gabung sekarang</span>
              </button>
            </div>
          </div>

          <div className="relative group md:w-6/12 lg:w-7/12">
            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-gray-800 shadow-lg transition duration-500 group-hover:scale-105"></div>
            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
              <ul className="space-y-4 py-6 text-white">
                {data.map((item) => {
                  return (
                    <>
                      <li className="space-x-2 list" key={item.id}>
                        <span className="text-secondary font-semibold">
                          <CheckBadgeIcon className="h-5 w-5 inline-flex" />
                        </span>
                        <span>{item.desc}</span>
                      </li>
                    </>
                  );
                })}
              </ul>
              <p className="text-white text-sm">
                <span className="text-yellow-400">Catatan:</span> Harga akan naik ke depannya seiring bertambahnya materi belajar. Gabung sekarang untuk lebih hemat!
              </p>
              {/* gambar sponsor */}
              {/* <div className="mt-6 flex justify-between gap-6">
                <img className="w-16 lg:w-24" src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg" loading="lazy" alt="airbnb" />
                <img className="w-8 lg:w-16" src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg" loading="lazy" alt="bissell" />
                <img className="w-6 lg:w-12" src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg" loading="lazy" alt="ge" />
                <img className="w-20 lg:w-28" src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg" loading="lazy" alt="microsoft" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
