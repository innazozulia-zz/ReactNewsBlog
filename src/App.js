import React from "react";
import { Route, Routes } from "react-router-dom";
import Culture from "./components/culture/Culture";

import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </>
  );
}

export default App;
