import React from "react";

import style from "./Advantages.module.css";

const Advantages = () => {
  return (
    <>
      <section className={style.advantages}>
        <div className={style.box}>
          <span>Government</span>
        </div>
        <div className={style.box}>
          <span>Risk & Security</span>
        </div>
        <div className={style.box}>
          <span>Institutions</span>
        </div>
        <div className={style.box}>
          <span>Migration</span>
        </div>
        <div className={style.box}>
          <span>Membership</span>
        </div>
        <div className={style.box}>
          <span>Citizenship</span>
        </div>
        <div className={style.box}>
          <span>Justice and Democracy</span>
        </div>
      </section>
    </>
  );
};

export default Advantages;
