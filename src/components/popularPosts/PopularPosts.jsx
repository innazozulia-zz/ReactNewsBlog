import React from "react";
import { posts } from "../../assets/db";
import Heading from "../heading/Heading";

import style from "./PopularPosts.module.css";

const PPosts = () => {
  return (
    <>
      <section className={style.popularPosts}>
        <Heading title="Popular posts of all time" />
        {posts.map((val) => {
          return (
            <div key={val.id} className={style.box}>
              <div className={style.img}>
                <img
                  className={style.cover}
                  src={val.cover}
                  alt="popular posts"
                />
              </div>
              <div className={style.text}>
                <h1 className={style.title}>{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default PPosts;
