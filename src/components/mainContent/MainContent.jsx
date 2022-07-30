import React from "react";
import Life from "../life/Life";
import Popular from "../popular/Popular";
import Posts from "../posts/Posts";

import style from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={style.container}>
      <section className={style.main__content}>
        <Popular />
        <Posts />
        <Posts />
        {/* <Life /> */}
      </section>
      <section className={style.side__content}></section>
    </div>
  );
};

export default MainContent;
