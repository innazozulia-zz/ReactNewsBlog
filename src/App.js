import React from "react";
import { Route, Routes } from "react-router-dom";
import Culture from "./components/culture/Culture";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Politics from "./components/politics/Politics";
import Sport from "./components/sportPage/Sport.jsx";
import Technology from "./components/technology/Technology";
import Fashion from "./components/fashionPage/Fashion";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/fashion" element={<Fashion />} />
      </Routes>
    </>
  );
}

export default App;
