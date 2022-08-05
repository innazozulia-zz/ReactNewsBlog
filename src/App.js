import React from "react";
import { Route, Routes } from "react-router-dom";
import Culture from "./components/culture/Culture";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Politics from "./components/politics/Politics";
import Technology from "./components/technology/Technology";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/politics" element={<Politics />} />
      </Routes>
    </>
  );
}

export default App;
