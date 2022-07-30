import React from "react";

import style from "./Heading.module.css";

const Heading = ({ title }) => {
  return (
    <div className={style.heading}>
      <h6>{title}</h6>
    </div>
  );
};

export default Heading;
