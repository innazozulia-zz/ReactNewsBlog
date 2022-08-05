import React from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import techArticles from "../../../../../assets/techArticles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Articles.module.css";

const Articles = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <section className={style.articles}>
      <Slider {...settings}>
        {techArticles.map((el) => {
          return (
            <div key={el.id} className={style.items}>
              <div className={style.box}>
                <div className={style.images__row}>
                  <img
                    className={style.img}
                    src={el.cover}
                    alt="popular articles"
                  />
                </div>
                <div className={style.category}>
                  <span>{el.category}</span>
                </div>
                <div className={style.text}>
                  <h1>{el.title.slice(0, 40)}</h1>
                  <div className={style.date}>
                    <BsCalendarWeek className={style.icon} /> {el.date}
                  </div>
                  <div className={style.descr}>{el.descr}</div>
                  <div className={style.comment}>
                    <MdShare className={style.icon} />
                    <FaComments className={style.icon} /> {el.comments}
                    comments
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Articles;
