import React from "react";
import TeamsImg from "./data/TeamsImg";
import Image from "next/image";

const Teams = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen py-32">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-white text-4xl font-bold mb-8">
                    Belajar dari Para <span className="text-secondary">Expert</span>
                  </h1>

                  <p className="text-white text-lg ">Dalam program ini kamu akan dibimbing oleh para mentor expert.</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center">
                {TeamsImg.map((item) => {
                  return (
                    <>
                      <div className="w-full md:w-6/12 mt-2 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 hover:scale-105 duration-300 group" key={item.id}>
                        <div className="flex flex-col">
                          <div className="mx-auto ">
                            <Image className="rounded-2xl drop-shadow-md  transition-all duration-300 grayscale group-hover:grayscale-0" src={item.img} alt="/" width="250px" height="300px" />
                          </div>
                          <div className="text-center mt-6">
                            <h1 className="text-white text-xl font-bold mb-1">{item.name}</h1>
                            <div className="text-secondary mb-2">{item.title}</div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
