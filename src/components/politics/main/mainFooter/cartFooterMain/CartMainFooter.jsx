import React from "react";

import style from "./CartMainFooter.module.css";

const CartMainFooter = ({ item: { id, cover, category, title } }) => {
  return (
    <div className={style.box}>
      <div className={style.img}>
        <img className={style.cover} src={cover} alt="main news" />
      </div>
      <div className={style.text}>
        <span className={style.category}>{category}</span>
        <h1 className={style.title}>{title}</h1>
      </div>
    </div>
  );
};

export default CartMainFooter;
