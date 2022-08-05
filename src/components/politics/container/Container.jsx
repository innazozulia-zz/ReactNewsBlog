import React from "react";
import MainContainer from "../mainContainer/MainContainer";
import SideContetn from "../sideContent/SideContent";

import style from "./Container.module.css";

const Container = () => {
  return (
    <div className={style.container}>
      <section className={style.main}>
        <MainContainer />
      </section>
      <section className={style.side}>
        <SideContetn />
      </section>
    </div>
  );
};

export default Container;
