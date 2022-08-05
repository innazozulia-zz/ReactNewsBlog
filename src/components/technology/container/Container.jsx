import React from "react";

import SideContent from "./sideContent/sideContent/SideContetn";

import style from "./Container.module.css";
import MainContainer from "./mainContainer/MainContainer";

const Container = () => {
  return (
    <div className={style.container}>
      <section className={style.main}>
        <MainContainer />
      </section>
      <section className={style.side}>
        <SideContent />
      </section>
    </div>
  );
};

export default Container;
