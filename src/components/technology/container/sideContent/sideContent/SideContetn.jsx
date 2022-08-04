import React from "react";
import Heading from "../../../../heading/Heading";
import Advantages from "./advantages/Advantages";
import Subscribe from "./subscribe/Subscribe";

const SideContetn = () => {
  return (
    <div>
      <Heading title="Advantages" />
      <Advantages />
      <Subscribe />
    </div>
  );
};

export default SideContetn;
