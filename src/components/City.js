import React from "react";

const City = ({ props }) => {
  let src = `http://openweathermap.org/img/w/${props.icon}.png`;
  return (
    <div className="flex min-w-[120px] flex-col justify-center  icon pl-5 sm:  py-16 sm:py-5 md:py-5 rounded-md p-30 mb-5 ml-10 ">
      <img src={src} alt="" />
      <h1 className="text-white text-center">{props.name}</h1>
    </div>
  );
};

export default City;
