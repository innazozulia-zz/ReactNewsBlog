import React from "react";
import Slider from "react-slick";
import Heading from "../../../../heading/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fashionActivities from "../../../../../assets/fashionActivities";
import { AiFillRead } from "react-icons/ai";

import style from "./Activities.module.css";

const Activities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={style.activities}>
      <Heading title="Culture activities" />
      <Slider {...settings}>
        {fashionActivities.map((val) => {
          return (
            <div key={val.id} className={style.items}>
              <div className={style.box}>
                <div className={style.images}>
                  <div className={style.img}>
                    <img className={style.cover} src={val.cover} alt="sport" />
                  </div>
                  <div className={style.category}>
                    <AiFillRead className={style.icon} />
                    <div className={style.text}>{val.text}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </Slider>
    </section>
  );
};

export default Activities;

// import React from "react";
// import Slider from "react-slick";
// import sport from "../../assets/sport";
// import Heading from "../heading/Heading";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import style from "./Sport.module.css";

// const Sport = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1340,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 999,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <section className={style.sport}>
//         <Heading title="Sport" />
//         <div className={style.content}>
//           <Slider {...settings}>
//             {sport.map((val) => {
//               return (
//                 <div key={val.id} className={style.items}>
//                   <div className={style.box}>
//                     <div className={style.images}>
//                       <div className={style.img}>
//                         <img
//                           className={style.cover}
//                           src={val.cover}
//                           alt="sport"
//                         />
//                       </div>
//                       <div className={style.category}>
//                         <span>{val.category}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Sport;
