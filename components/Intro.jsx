import Image from "next/image";
import React from "react";
import gmbr from "../img/foto1.webp";
import { ChatBubbleLeftIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

const Intro = () => {
  return (
    <div className="lg:container py-24 bg-dark">
      <div className="flex flex-wrap ">
        <div className="w-full slef-center lg:px-20 px-4 lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-white text-5xl font-semibold font-mono pt-12 pb-5">
            Jalan Lurus Jadi <span className="text-secondary">Front-end</span> Web Developer
          </h1>
          <p className="text-white text-lg mb-5">
            Kelas online belajar Fullstack web developer from A to Z. Cocok buat yang pengen punya karir bagus, skill dibutuhin industri, gaji tinggi dan bisa bikin web atau aplikasi buat ngembangin bisnis online sendiri.{" "}
          </p>
          <p className="text-white text-lg mb-5">Aman buat pemula walaupun belum ngerti coding dan nggak punya background IT. Diajarin dari 0 banget!</p>
          <div className="flex gap-4">
            <button className="rounded-md p-3 bg-secondary  w-1/2 hover:scale-90 transition-all text-primary duration-300">Gabung sekarang</button>
            <button className="rounded-md p-3 hover:bg-secondary ring-1 hover:scale-90 transition-all duration-300 ring-secondary hover:text-dark text-secondary  w-1/2">
              <ChatBubbleLeftIcon className="inline-flex h-5 w-5 mr-2" />
              Konsul 24/7 Gratis
            </button>
          </div>
        </div>
        <div className="relative w-full slef-end lg:px-20 px-4 lg:w-1/2 lg:mt-20 ">
          <Image src={gmbr} alt="/" className="rounded-lg " />
          <a href="https://youtube.com">
            <VideoCameraIcon className="absolute shadow-md shadow-secondary top-[40%] lg:top-[35%] animate-pulse p-2 rounded-lg bg-primary right-0 left-0 text-secondary w-16 h-16 mx-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
