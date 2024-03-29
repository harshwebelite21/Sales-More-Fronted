import React from "react";
import "./App.css";
import { Home } from "./modules/Home";
import Header from "./components/Header";
import { AboutSection } from "./modules/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutSection />} />
      </Routes>
    </>
  );
};

export default App;
