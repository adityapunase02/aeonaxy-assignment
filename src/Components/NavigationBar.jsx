import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const NavigationBar = () => {
  return (
    <div className="flex justify-around items-center sticky top-0 bg-white z-40 pb-0">
      <div className="logo">
        <img
          className="w-30 h-20"
          src="https://logos-world.net/wp-content/uploads/2021/06/Calendly-Logo.png"
          alt=""
        />
      </div>
      <div className="navContent flex space-x-10 font-bold">
        <a href="">Individuals</a>
        <a href="">Teams</a>
        <a href="">Enterprise</a>
        <div className="prod flex items-center">
          <a href="">Product</a>
          <IoChevronDownOutline />
        </div>

        <a href="">Pricing</a>
        <div className="resource flex items-center">
          <a href="">Resources</a>
          <IoChevronDownOutline />
        </div>
      </div>

      <div className="btns flex space-x-10 font-bold">
        <button>Log In</button>
        <button className="bg-blue rounded-full p-3 text-white hover:bg-white hover:text-blue">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
