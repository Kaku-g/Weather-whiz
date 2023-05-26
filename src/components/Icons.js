import React from "react";
import { ReactComponent as Cloudy } from "../icons/cloudy.svg";
import { ReactComponent as Rainy } from "../icons/rainy.svg";
import { ReactComponent as Day } from "../icons/day.svg";
import { ReactComponent as Thunder } from "../icons/thunder.svg";

//icon components for the main home screen
//disappear when the find button is clicked
const Icons = () => {
  return (
    <div className=" flex justify-center  icon pl-5 sm:  py-16 sm:py-5 lg:py-5 rounded-md p-30 mb-5 ml-10">
      <Cloudy />
      <Rainy />
      <div>
        <Day />
        <Thunder />
      </div>
    </div>
  );
};

export default Icons;
