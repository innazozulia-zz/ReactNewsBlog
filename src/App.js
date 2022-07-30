import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
