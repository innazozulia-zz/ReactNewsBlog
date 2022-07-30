// import React from "react";
// import Heading from "../heading/Heading";
// // import life from "../../assets/db";
// import lifestyle from "../../assets/db";

// import Slider from "react-slick";
// import style from "./Life.module.css";

// const Life = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <section className={style.life}>
//         <Heading title="Life Style" />
//         <div className="content">
//           <Slider {...settings}>
//             {lifestyle.map((val) => {
//               return (
//                 <div className={style.items}>
//                   <div className={style.box}>
//                     <div className={style.images}>
//                       <div className={style.img}>
//                         <img
//                           className={style.cover}
//                           src={val.cover}
//                           alt="lifestyle"
//                         />
//                       </div>
//                       <div class={style.category}>
//                         <span>{val.catgeory}</span>
//                       </div>
//                     </div>
//                     <div className={style.text}>
//                       <h1 className={style.title}>
//                         {val.title.slice(0, 40)}...
//                       </h1>
//                       <div className={style.date}>{val.date}</div>
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

// export default Life;
