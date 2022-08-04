import React from "react";

import style from "./Advantages.module.css";

const Advantages = () => {
  return (
    <>
      <section className={style.advantages}>
        <div className={style.box}>
          <span>Ease of Access to Information</span>
        </div>
        <div className={style.box}>
          <span>Saves Time</span>
        </div>
        <div className={style.box}>
          <span>Ease of Mobility</span>
        </div>
        <div className={style.box}>
          <span>Better Communication Means</span>
        </div>
        <div className={style.box}>
          <span>Cost Efficiency</span>
        </div>
        <div className={style.box}>
          <span>Innovation In Many Fields</span>
        </div>
        <div className={style.box}>
          <span>Improved Banking</span>
        </div>
        <div className={style.box}>
          <span>Better Learning Techniques</span>
        </div>
      </section>
    </>
  );
};

export default Advantages;
