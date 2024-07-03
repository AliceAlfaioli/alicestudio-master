import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../src/components/Home/Home.jsx";
import PhotoStudioSection from "./components/PhotoStudioSection/PhotoStudioSection.jsx";
import Photostory from "./components/PhotoStory/Photostory.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import PhotoGearShowcase from "./components/PhotoGearShowcase/PhotoGearShowcase.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Home />
      <PhotoStudioSection />
      <Photostory />
      <Portfolio />
      <PhotoGearShowcase />

      <Footer />
    </>
  );
};

export default App;
