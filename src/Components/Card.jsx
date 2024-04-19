import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiUserStarLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ icon, title, paragraph, buttonText }) => {
  return (
    <>
      <div className="card w-[340px] rounded-md shadow-xl ml-[86px] h-[320px] flex flex-col mr-[4rem] pr-[1rem] mt-7 border-slate border-[2px]">
        <div className="card-icon mt-5 ml-5">{icon}</div>
        <h2 className="card-title mt-5 ml-5 text-navy text-2xl font-bold">
          {title}
        </h2>
        <p className="card-paragraph mt-5 ml-5 text-gray">{paragraph}</p>
        <div className="card-btn flex items-center ml-5 mt-9 ">
          <button className="card-button text-blue font-bold">
            {buttonText}
          </button>
          <IoIosArrowForward color="blue" />
        </div>
      </div>
    </>
  );
};

export default Card;
