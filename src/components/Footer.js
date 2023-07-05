import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex justify-between items-center h-20 max-w-6xl mx-auto">
      <div className="md:h-[70px] md:w-[70px] h-[100px] w-[100px] flex flex-col items-center justify-center ml-[10px]">
        <img src="../my-pic.png" />
      </div>
      <div className="md:flex flex-row justify-center items-center md:ml-[90px] text-center mr-[10px]">
        <p className="text-white md:text-lg text-sm">
          || Developed & Designed By{" "}
          <span className="text-slate-300">Divyam Vijay</span> © All Rights
          Reserved ||
        </p>
      </div>
      <div className="flex md:gap-x-4 md:flex-row mr-[10px]">
        <NavLink to="https://www.linkedin.com/in/divyam-vijay-597768233/">
            <img src="../LinkedIn.png" className="md:h-[50px] w-[50px] h-[40px]"/>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
