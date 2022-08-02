import React from "react";
import { BiMailSend } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.box}>
          <img className={style.logo} src="img/logo.png" alt="logo footer" />
          <p className={style.paragraph}>
            Egestas integer eget aliquet nibh praesent tristique magna sit.
            Habitant morbi tristique senectus et netus et malesuada.
          </p>
          <BsEnvelope className={style.icon} />
          <span> innazozulia@outlook.com </span> <br />
          <BsTelegram className={style.icon} />
          <span>099 0 468 488</span>
        </div>
        <div className={style.box}>
          <h3>MOVIES</h3>
          <div className={style.item}>
            <img
              className={style.cover}
              src="img/footer/item-1.jpg"
              alt="movies for you"
            />
            <p>Google To Boost Android Security In Few Days</p>
          </div>
          <div className={style.item}>
            <img
              className={style.cover}
              src="img/footer/item-2.jpg"
              alt="movies for you"
            />
            <p>Cespedes play the winning Baseball Game</p>
          </div>
        </div>
        <div className={style.box}>
          <h3>MUSIC</h3>
          <div className={style.item}>
            <img
              className={style.cover}
              src="img/footer/item-3.jpg"
              alt="music for you"
            />
            <p>US Promises to give Intel aid to locate the soldiers</p>
          </div>
          <div className="item">
            <img
              className={style.cover}
              src="img/footer/item-4.jpg"
              alt="music for you"
            />
            <p>Renewable energy dead as industry waits for Policy</p>
          </div>
        </div>
        <div className={style.box}>
          <h3>JOIN US </h3>
          <section className={style.subscribe}>
            <h1>Subscribe to our New Stories</h1>
            <form action="#">
              <input type="email" placeholder="Email Address..." />
              <button>
                <BiMailSend className={style.icons} /> SUBMIT
              </button>
            </form>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
