import React from "react";
import Materi from "../components/Home/Materi";
import NavbarHome from "../components/Home/NavbarHome";
import SideMenu from "../components/Home/SideMenu";

const Homes = () => {
  return (
    <>
      <NavbarHome />
      <Materi />
      {/* <SideMenu /> */}
    </>
  );
};

export default Homes;
