import React from "react";
import Life from "../life/Life";
import Music from "../music/Music";
import Popular from "../popular/Popular";
import Posts from "../posts/Posts";
// import SideContent from "../sideContent/SideContent";
import Sport from "../sport/Sport";
import SideContent from "../sideContent/SideContent";

import style from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={style.container}>
      <section className={style.main}>
        <Popular />
        <Posts />
        <Life />
        <Music />
        <Sport />
      </section>
      <section className={style.side}>
        <SideContent />
      </section>
    </div>
  );
};

export default MainContent;
