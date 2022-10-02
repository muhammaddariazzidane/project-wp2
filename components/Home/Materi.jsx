import React from "react";
import DataMateri from "../data/DataMateri";

const Materi = () => {
  return (
    <>
      <div className="w-full duration-300  pb-8  pt-12" id="home">
        <div className="container mx-auto px-4">
          <h4 className="text-3xl text-center mb-12 text-white">RoadMap Front-end web developer</h4>
          <div className="w-full px-4 grid sm:grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 ">
            {DataMateri.map((item) => {
              return (
                <>
                  <div className="grid grid-cols-2 gap-4 justify-center items-center" key={item.id}>
                    <iframe title="hih" src={item.url} className=" w-64"></iframe>
                  </div>
                  {/* <div className="p-6 shadow-xl shadow-primary/20 w-30 h-[6rem] bg-white dark:bg-secondary dark:shadow-primary/50 rounded-xl hover:scale-105 ease-in-out duration-300" >
                  </div> */}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Materi;
