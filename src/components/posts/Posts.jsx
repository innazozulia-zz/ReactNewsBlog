import React from "react";
import { post } from "../../assets/db";
import { BsCalendarWeek } from "react-icons/bs";
import Heading from "../heading/Heading";
import Slider from "react-slick";

import style from "./Posts.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Posts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <section className={style.popularPost}>
        <Heading title="Popular Posts" />
        <div className={style.content}>
          <Slider {...settings}>
            {post.map((val) => {
              return (
                <div key={val.id} className={style.items}>
                  <div className={style.box}>
                    <div className={style.img}>
                      <div className={style.image}>
                        <img
                          className={style.cover}
                          src={val.cover}
                          alt="popular posts"
                        />
                      </div>
                      <div className={style.category}>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className={style.text}>
                      <h1 className={style.title}>
                        {val.title.slice(0, 40)}...
                      </h1>
                      <div className={style.date}>
                        <BsCalendarWeek className={style.icon} />
                        {val.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Posts;
