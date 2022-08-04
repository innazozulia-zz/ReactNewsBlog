import React from "react";
import { gallery } from "../../assets/db";
import Heading from "../heading/Heading";
import { BiMailSend } from "react-icons/bi";
import PPosts from "../popularPosts/PopularPosts";
import Slider from "react-slick";

import style from "./Subscribe.module.css";

const Subscribe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const category = [
    "technology",
    "health",
    "fashion",
    "world",
    "travel",
    "fun",
    "business",
    "sport",
  ];
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
      </section>
      <PPosts />
      <section className={style.category}>
        <Heading title="Сategories" />
        {category.map((el) => {
          return (
            <div key={el.id} className={style.box}>
              <div className={style.category}>
                <span>{el}</span>
              </div>
            </div>
          );
        })}
      </section>

      <section className={style.gallery}>
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div key={val.id} className={style.img}>
                <img className={style.cover} src={val.cover} alt="culture" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Subscribe;
