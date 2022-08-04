import React from "react";
import { Route, Routes } from "react-router-dom";
import Culture from "./components/culture/Culture";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Technology from "./components/technology/Technology";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
