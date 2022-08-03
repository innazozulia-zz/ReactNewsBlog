import React from "react";

import style from "./CartMain.module.css";

const CartMain = ({
  item: { id, cover, category, title, authorName, authorImg, time },
}) => {
  return (
    <div className={style.box}>
      <div className={style.img}>
        <img className={style.cover} src={cover} alt="main news" />
      </div>
      <div className={style.text}>
        <span className={style.category}>{category}</span>
        <h1 className={style.title}>{title}</h1>
        <div className={style.author}>
          <span>{authorName}</span>
          <img className={style.user} src={authorImg} alt="author" />
          <span className={style.date}>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
