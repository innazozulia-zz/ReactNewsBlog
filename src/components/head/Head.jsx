import React from "react";

import style from "./Head.module.css";

const Head = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.logo}>
          <img className={style.logo__img} src="img/logo.png" alt="logo" />
        </div>
        <div className={style.ad}>
          <img className={style.add} src="img/add.png" alt="add" />
        </div>
      </div>
    </section>
  );
};

export default Head;
