import React from "react";
// import SideContent from "../../sideContent/SideContent";
import SideContent from "./sideContent/SideContetn";

import style from "./Container.module.css";

const Container = () => {
  return (
    <div className={style.container}>
      <section className={style.main}>MAIN ARTICLES</section>
      <section className={style.side}>
        <SideContent />
      </section>
    </div>
  );
};

export default Container;
