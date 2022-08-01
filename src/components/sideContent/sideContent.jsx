import React from "react";
import Heading from "../heading/Heading";
import Social from "../social/Social";
import Subscribe from "../subscribe/Subscribe";

// delete
// import style from "./SideContent.module.css";

const SideContent = () => {
  return (
    <div>
      <Heading title="Social " />
      <Social />
      <Subscribe />
    </div>
  );
};

export default SideContent;
