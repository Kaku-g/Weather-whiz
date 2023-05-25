import axios from "axios";
import React, { useState } from "react";
import { cities } from "../data/city";
import Main from "./Main";
import Icons from "./Icons";
import City from "./City";
import Footer from "./Footer";

const Weather = () => {
  const key = process.env.REACT_APP_KEY;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityMatch, setCityMatch] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = (item) => {
    setSelectedCity(item);
  };

  const getWeather = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${city}&appid=${key}&units=metric`
      )
      .then((response) => {
        let data = response["data"];
        console.log(data);
        setWeather({
          temp: data.main.temp,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          icon_id: data.weather[0].id,
          cond: data.weather[0].main,
          visib: data.visibility,
          name: data.name,
          icon: data.weather[0].icon,
        });
        setError(false);
        setCity("");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const searchCity = (text) => {
    let matches = cities.filter((city) => {
      const regex = new RegExp(`${text}`, "gi");
      return city.match(regex);
    });
    setCityMatch(matches);
  };

  const updateCity = (value) => {
    setCity(value);
    searchCity(value);
    setSelectedCity("");
  };

  const autoComplete = (item) => {
    setCity(item);

    handleClick(item);
  };
  return (
    <div className="bg-gray-900  rounded-md  mt-5 m-10 min-h-screen ">
      <div className="flex flex-col items-center    sm:py-10 md:pl-20 rounded-md md:ml-20  mb-1 ml-10  ">
        <div className="flex justify-center ">
          <div className=" flex flex-col jusitfy-center items-center  relative isolate overflow-hidden">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Weather Whiz
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Real time weather forcast
            </p>
            <div className="mt-6  flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                City Name
              </label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="text"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter city "
                value={city}
                onChange={(e) => updateCity(e.target.value)}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={getWeather}
              >
                Find
              </button>
            </div>
          </div>
          {weather ? <City props={weather} /> : <Icons />}
        </div>
      </div>
      <div className="z-50 fixed  sm:top-20 sm:pt-20 sm:mt-20 sm:left-50  sm:ml-7 md:mt-30  md:pl-20 md:ml-40 md:top-30 ">
        <div className=" md:ml-20   w-100  max-h-[200px] max-w-[200px]   overflow-y-scroll">
          <ul className="divide-y divide-gray-200 bg-white ">
            {!selectedCity &&
              city &&
              cityMatch &&
              cityMatch.map((item, index) => (
                <li
                  key={index}
                  onClick={() => autoComplete(item)}
                  className="cursor-pointer text-gray p-3 border border-solid border-white-500"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>

      {weather && <Main props={weather} />}
      {!weather && !city && (
        <h1 className="text-white text-center pb-5 ">
          Get started by selecting your city!!
        </h1>
      )}
      {error && (
        <h1 className="text-white text-center pb-5">
          We're having issues fetching the weather. Please try again !!
        </h1>
      )}
    </div>
  );
};

export default Weather;
