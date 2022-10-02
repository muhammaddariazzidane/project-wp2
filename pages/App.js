import React from "react";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Step from "../components/Step";
import Teams from "../components/Teams";
import Why from "../components/Why";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Why />
      <Main />
      <Step />
      <Teams />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
