import React from "react";
import Cart from "./cartMain/Cart";
import { mainSport } from "../../../assets/db";

import style from "./Main.module.css";

const Main = () => {
  const [items, setItems] = React.useState(mainSport);
  console.log(setItems);
  return (
    <div>
      <section className={style.main}>
        <div className={style.container}>
          {items.map((item) => {
            return <Cart key={item.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Main;
