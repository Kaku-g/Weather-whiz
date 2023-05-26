import React from "react";
import WeatherIcon from "react-icons-weather";
import {
  WiThermometer,
  WiCelsius,
  WiWindBeaufort11,
  WiHumidity,
} from "react-icons/wi";
//retruns the main component for showing
//temp, windspeed,humidity,condition
const Main = ({ props }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-1">
      <div className="bg-gray-800 flex flex-col justify-center items-center ease-in duration-300 hover:scale-110 cursor-pointer border-2 rounded-md mb-10 ml-10 mr-10 p-5 border-black-500  ">
        <h1 className="text-white text-lg underline">Temperature</h1>

        <div className="flex justify-center items-center">
          <WiThermometer style={{ color: "white", fontSize: "30px" }} />
          <p className="text-white">{props.temp} °C</p>
        </div>
      </div>
      <div className=" bg-gray-800 flex flex-col justify-center items-center ease-in duration-300 hover:scale-110 cursor-pointer border-2 rounded-md mb-10 ml-10 mr-10 p-5 border-white-500  ">
        <h1 className="text-white text-lg underline">Conditions</h1>
        <div className="flex justify-center items-center">
          <WeatherIcon
            className="p-2 text-white text-xl"
            name="owm"
            flip="horizontal"
            rotate="90"
            iconId={props.icon_id || 200}
          />
          <p className="text-white">{props.cond}</p>
        </div>
      </div>
      <div className=" bg-gray-800 flex flex-col justify-center items-center ease-in duration-300 hover:scale-110 cursor-pointer border-2 rounded-md mb-10 ml-10 mr-10 p-5 border-white-500  ">
        <h1 className="text-white text-lg underline">Humidity </h1>
        <div className="flex justify-center items-center">
          <WiHumidity style={{ color: "white", fontSize: "30px" }} />

          <p className="text-white">{props.humidity}</p>
        </div>
      </div>
      <div className=" bg-gray-800 flex flex-col justify-center items-center ease-in duration-300 hover:scale-110 cursor-pointer border-2 rounded-md mb-10 ml-10 mr-10 p-5 border-white-500  ">
        <h1 className="text-white text-lg underline">Windspeed </h1>
        <div className="flex justify-center items-center">
          <WiWindBeaufort11 style={{ color: "white", fontSize: "30px" }} />

          <p className="text-white">{props.windspeed}m/s</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
