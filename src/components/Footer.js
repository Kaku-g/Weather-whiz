import React from "react";

const Footer = () => {
  return (
    <div className="pb-10 pl-5 sm:pl-0  ">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-md text-black sm:text-center dark:text-gray-400">
        Opensourced on
        <a
          href="https://github.com/Kaku-g/Weather-whiz"
          className="hover:underline ml-1 mr-1 text-white"
        >
          Github
        </a>
        Developed {"</>"} by
        <a
          href="https://github.com/Kaku-g/"
          className="hover:underline ml-1 text-white"
        >
          Kaku-g
        </a>{" "}
      </span>
    </div>
  );
};

export default Footer;
