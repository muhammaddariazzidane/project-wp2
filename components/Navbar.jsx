import React from "react";
import Image from "next/image";
import gmbr from "../img/1.png";
import { UserPlusIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full fixed z-[9999] top-0 lg:px-16 bg-primary">
      <div className="flex justify-between lg:p-5 p-4 items-center  text-white">
        <div className="flex lg:ml-5">
          <Image src={gmbr} alt="/" width={40} height={40} />
          <div className="m-auto px-3 items-center lg:text-2xl text-lg font-bold">FrontEndCLass</div>
        </div>
        <div className="flex justify-between">
          <Link href="/Login">
            <button className=" text-sm font-semibold lg:mx-6 lg:block hidden ring-1 ring-secondary text-secondary hover:bg-secondary hover:text-primary p-2 px-4 hover:scale-90 transition-all duration-300">
              <ArrowRightOnRectangleIcon className="inline-flex h-5 w-5 mr-2" />
              Login Member
            </button>
          </Link>
         <Link href="/Checkout">
         <button className="text-sm font-semibold rounded-sm py-3 bg-secondary p-4 hover:scale-90 transition-all text-primary duration-300">
            <UserPlusIcon className="w-5 h-5 inline-flex mr-2" />
            Gabung sekarang
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
