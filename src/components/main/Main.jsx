import React from "react";
import { mainSection } from "../../assets/db";
import CartMain from "../cartMain/CartMain";

import style from "./Main.module.css";

const Main = () => {
  const [items, setItems] = React.useState(mainSection);
  console.log(setItems);
  return (
    <div>
      <section className={style.main}>
        <div className={style.container}>
          {items.map((item) => {
            return <CartMain key={item.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Main;
