import React from "react";
import Discover from "../discover/Discover";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import MainContent from "../mainContent/MainContent";

const HomePage = () => {
  return (
    <>
      <Main />
      <MainContent />
      <Discover />
      <Footer />
    </>
  );
};

export default HomePage;
