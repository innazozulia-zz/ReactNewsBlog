import React from "react";

import Heading from "../heading/Heading";
import { BiMailSend } from "react-icons/bi";
import style from "./Subscribe.module.css";
import PPosts from "../popularPosts/PopularPosts";

import Slider from "react-slick";

// import { gallery } from "../../../../dummyData";
// import Tpost from "../Tpost/Tpost";
// import SocialMedia from "../social/SocialMedia";

// const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
// console.log(allCat)

const Subscribe = () => {
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };

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
      <Heading title="Subscribe" />
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
        {/* <div className="items">{allCat}</div> */}
        {category.map((val) => {
          return (
            <div key={val.id} className={style.category}>
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      {/* <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div key={val.id}className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section> */}
    </>
  );
};

export default Subscribe;
