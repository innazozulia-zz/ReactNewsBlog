import React from "react";

import style from "./Countries.module.css";

const Countries = () => {
  return (
    <>
      <section className={style.countries}>
        <div className={style.box}>
          <span>Fashion</span>
        </div>
        <div className={style.box}>
          <span>Beauty</span>
        </div>
        <div className={style.box}>
          <span>Culture</span>
        </div>
        <div className={style.box}>
          <span>Life</span>
        </div>
        <div className={style.box}>
          <span>Makeup</span>
        </div>
        <div className={style.box}>
          <span>Shoes</span>
        </div>
        <div className={style.box}>
          <span>Tips</span>
        </div>
      </section>
    </>
  );
};

export default Countries;
