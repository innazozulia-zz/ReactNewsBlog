import React from "react";

import Heading from "../heading/Heading";
import { BiMailSend } from "react-icons/bi";
import style from "./Subscribe.module.css";
// import Slider from "react-slick";
// import Heading from "../../../common/heading/Heading";
// import { gallery } from "../../../../dummyData";
// import Tpost from "../Tpost/Tpost";
// import SocialMedia from "../social/SocialMedia";

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Subscribe = () => {
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };

  //   const catgeory = [
  //     "world",
  //     "travel",
  //     "sport",
  //     "fun",
  //     "health",
  //     "fashion",
  //     "business",
  //     "technology",
  //   ];
  return (
    <>
      <Heading title="Subscribe" />

      <section className={style.subscribe}>
        <h1>Subscribe to our New Stories</h1>
        <form action="#">
          <input type="email" placeholder="Email Address..." />
          <button>
            <BiMailSend /> SUBMIT
          </button>
        </form>
      </section>

      <section className={style.banner}>
        <img src="img/banner.jpg" alt="banner" />
      </section>

      {/* <Tpost /> */}
      {/* 
      <section className="catgorys">
        <Heading title="Catgeorys" />
        <div className='items'>{allCat}</div>
        {catgeory.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section> */}

      {/* <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
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
