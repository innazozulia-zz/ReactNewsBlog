import React from "react";

import style from "./MainContainer.module.css";
import Heading from "../../../heading/Heading";
import Articles from "./articles/Articles";
import Activities from "./activities/Activities";

const MainContainer = () => {
  return (
    <div className={style.main}>
      <Heading title="Articles" />
      <Articles />
      <Activities />
    </div>
  );
};

export default MainContainer;
