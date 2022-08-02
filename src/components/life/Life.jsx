import React from "react";
import Heading from "../heading/Heading";
import lifestyle from "../../assets/lifestyle";
import { BsCalendarWeek } from "react-icons/bs";
import Slider from "react-slick";
import style from "./Life.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Life = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={style.life}>
        <Heading title="Life Style" />
        <div className="content">
          <Slider {...settings}>
            {lifestyle.map((val) => {
              return (
                <div key={val.id} className={style.items}>
                  <div className={style.box}>
                    <div className={style.images}>
                      <div className={style.img}>
                        <img
                          className={style.cover}
                          src={val.cover}
                          alt="lifestyle"
                        />
                      </div>
                      <div className={style.category}>
                        <span>{val.category}</span>
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
    </>
  );
};

export default Life;
