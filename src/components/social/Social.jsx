import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";

import style from "./Social.module.css";

const Social = () => {
  return (
    <>
      <section className={style.social}>
        <div className={style.socBox}>
          <ImYoutube className={style.icon} />
          <span>30,700 Subscriber</span>
        </div>
        <div className={style.socBox}>
          <FiFacebook className={style.icon} />
          <span>43,740 Likes</span>
        </div>
        <div className={style.socBox}>
          <FaPinterestP className={style.icon} />
          <span>15,600 Fans</span>
        </div>
        <div className={style.socBox}>
          <AiOutlineTwitter className={style.icon} />
          <span>62,700 Followers</span>
        </div>
        <div className={style.socBox}>
          <BsInstagram className={style.icon} />
          <span>76,700 Followers</span>
        </div>
      </section>
    </>
  );
};

export default Social;
