import React from "react";
import { popular } from "../../assets/db";
import Heading from "../heading/Heading";
import { BsCalendarWeek } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import Slider from "react-slick";

import style from "./Popular.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    dots: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    autoplaySpeed: 1000,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  return (
    <>
      <section className={style.popular}>
        <Heading title="Popular " />
        <Slider {...settings}>
          {popular.map((el) => {
            return (
              <div key={el.id} className={style.items}>
                <div className={style.box}>
                  <div className={style.images__row}>
                    <img className={style.img} src={el.cover} alt="popular" />
                  </div>
                  <div className={style.category}>
                    <span>{el.categeory}</span>
                  </div>
                  <div className={style.text}>
                    <h1>{el.title.slice(0, 40)}...</h1>
                    <div className={style.date}>
                      <BsCalendarWeek className={style.icon} /> {el.date}
                    </div>
                    <div className={style.comment}>
                      <FaComments className={style.icon} /> {el.comments}{" "}
                      comments
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Popular;
