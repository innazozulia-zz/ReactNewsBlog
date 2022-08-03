import React from "react";

import style from "./Countries.module.css";

const Countries = () => {
  return (
    <>
      <section className={style.countries}>
        <div className={style.box}>
          <span>Italy</span>
        </div>
        <div className={style.box}>
          <span>Spain</span>
        </div>
        <div className={style.box}>
          <span>Greece</span>
        </div>
        <div className={style.box}>
          <span>New Zealand</span>
        </div>
        <div className={style.box}>
          <span>Australia</span>
        </div>
        <div className={style.box}>
          <span>Portugal</span>
        </div>
        <div className={style.box}>
          <span>Canada</span>
        </div>
      </section>
    </>
  );
};

export default Countries;
