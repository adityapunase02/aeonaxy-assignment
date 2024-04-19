import React from "react";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer mt-32 ml-20 flex flex-row">
      <div className="footer-left">
        <div className="foot-left-top mb-14">
          <h1 className="text-[40px] font-bold flex flex-col text-navy">
            Easy <span className="text-blue">ahead</span>
          </h1>
          <p className="flex flex-col text-darkgray text-xl items-start mt-5">
            We take the work out of connecting with
            <span>others so you can accomplish more.</span>
          </p>
        </div>
        <div className="foot-left-input mb-14">
          <label>
            <select>
              <option value="fr">English</option>
              <option value="ar">French</option>
              <option value="es">Chinese</option>
              <option value="en">Portuguese</option>
              <option value="zh">Hindi</option>
            </select>
          </label>
        </div>
        <div className="foot-left-btn flex">
          <button className="flex items-center justify-center bg-black rounded px-2 py-[2px]">
            <FaApple color="white" size={30} />
            <div className="text-white ml-1">
              <p className="text-[10px]">Download on the</p>
              <h1 className=" text-xl mt-[-7px]">App Store</h1>
            </div>
          </button>

          <button className="flex items-center justify-center bg-black rounded px-2 py-[2px] ml-2">
            <FcGoogle color="white" size={30} />
            <div className="text-white ml-1">
              <p className="text-[10px]">GET IT ON</p>
              <h1 className=" text-xl mt-[-7px]">Google</h1>
            </div>
          </button>
        </div>
        <div className="icon-list flex mt-14 mb-14">
          <FaXTwitter className="mr-7" size={24} />
          <FaFacebookF className="mr-7" size={24} />
          <FaInstagram className="mr-7" size={24} />
          <FaLinkedinIn className="mr-7" size={24} />
          <FiYoutube className="mr-7" size={24} />
        </div>
        <div>
          <p className="text-xs text-gray">Copyright Calendly 2022</p>
        </div>
      </div>
      <div className="footer-right ml-40">
        <div className="list-top flex flex-row text-darkgray">
          <div className="list-1 mr-24">
            <h1 className="text-navy text-2xl font-bold">About</h1>
            <p className="mt-5 text-lg">About Calendly</p>
            <p className="mt-5 text-lg">Contact Sales</p>
            <p className="mt-5 text-lg">Newsroom</p>
            <p className="mt-5 text-lg">Careers</p>
            <p className="mt-5 text-lg">Security</p>
          </div>
          <div className="list-2 mr-24">
            <h1 className="text-navy text-2xl font-bold">Solutions</h1>
            <p className="mt-5 text-lg">Customer Success</p>
            <p className="mt-5 text-lg">Sales</p>
            <p className="mt-5 text-lg">Recruiting</p>
            <p className="mt-5 text-lg">Information Technology</p>
            <p className="mt-5 text-lg">Marketing</p>
          </div>
          <div className="list-3 mr-24">
            <h1 className="text-navy text-2xl font-bold">Popular Features</h1>
            <p className="mt-5 text-lg">Embed Calendly</p>
            <p className="mt-5 text-lg">Availablity</p>
            <p className="mt-5 text-lg">Sending Notifications</p>
            <p className="mt-5 text-lg">Using Calendly Mobile</p>
          </div>
        </div>
        <div className="list-bottom flex flex-row text-darkgray">
          <div className="list-4 mr-24 mt-12">
            <h1 className="text-navy text-2xl font-bold">Support</h1>
            <p className="mt-5 text-lg">Help Center</p>
            <p className="mt-5 text-lg">Video Tutorial</p>
            <p className="mt-5 text-lg">Cookie Settings</p>
          </div>
          <div className="list-5 mr-24 mt-12">
            <h1 className="text-navy text-2xl font-bold">Add-Ons</h1>
            <p className="mt-5 text-lg">Download for Chrome</p>
            <p className="mt-5 text-lg">Download for Firefox</p>
          </div>
        </div>
        <div className="terms text-sm text-gray flex justify-end">
          <p>Privacy / Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
