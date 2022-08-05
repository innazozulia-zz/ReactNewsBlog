import React from "react";

import style from "./Countries.module.css";

const Countries = () => {
  return (
    <>
      <section className={style.countries}>
        <div className={style.box}>
          <span>Air sports</span>
        </div>
        <div className={style.box}>
          <span>Athletics </span>
        </div>
        <div className={style.box}>
          <span>Electronic sports</span>
        </div>
        <div className={style.box}>
          <span>Endurance sports</span>
        </div>
        <div className={style.box}>
          <span>Goal sports</span>
        </div>
        <div className={style.box}>
          <span>Skating sports</span>
        </div>
        <div className={style.box}>
          <span>Snowsports</span>
        </div>
      </section>
    </>
  );
};

export default Countries;
