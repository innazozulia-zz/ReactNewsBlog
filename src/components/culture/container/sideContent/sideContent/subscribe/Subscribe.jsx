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
    </>
  );
};

export default Subscribe;
