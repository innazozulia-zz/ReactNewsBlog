import React from "react";
import { BiMailSend } from "react-icons/bi";
import Heading from "../../../../../heading/Heading";
import style from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <>
      <Heading title="Join us" />
      <section className={style.subscribe}>
        <h1>Subscribe to our New Stories</h1>
        <form action="#">
          <input type="email" placeholder="Email Address..." />
          <button>
            <BiMailSend className={style.icons} /> SUBMIT
          </button>
        </form>
      </section>
      <section className={style.banner}>
        <img src="img/banner.jpg" alt="banner" />
        <img src="img/logo.png" alt="logo" />
        <Heading title="Listen to music" />
        <img src="img/add.png" alt="add" />
      </section>
    </>
  );
};

export default Subscribe;
