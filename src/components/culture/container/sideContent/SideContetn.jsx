import React from "react";
import Heading from "../../../heading/Heading";
import Countries from "./countries/Countries";

import style from "./SideContent.module.css";

const SideContetn = () => {
  return (
    <div>
      <Heading title="Most popular countries" />
      <Countries />
    </div>
  );
};

export default SideContetn;
