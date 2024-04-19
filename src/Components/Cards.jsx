import React from "react";
import Card from "./Card";
import { TbTargetArrow } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiUserStarLine } from "react-icons/ri";

const Cards = () => {
  const cardsData = [
    {
      icon: <TbTargetArrow color="blue" size={32} />,
      title: "Sales",
      paragraph:
        "Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule while they're in peak buying mode.",
      buttonText: "Learn more",
    },
    {
      icon: <BsPeople color="blue" size={32} />,
      title: "Recruiting",
      paragraph:
        "Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups.",
      buttonText: "Learn more",
    },
    {
      icon: <FaChalkboardTeacher color="blue" size={32} />,
      title: "Education",
      paragraph:
        "Control your office hours, and empower students and parents to schedule appointments easily.",
      buttonText: "Learn more",
    },
    {
      icon: <GiChart color="blue" size={32} />,
      title: "Revenue Operations",
      paragraph:
        "Streamline meeting and activity data. Calendly's native integrations with Salesforce and HubSpot ensure up-to-date reporting.",
      buttonText: "Learn more",
    },
    {
      icon: <AiOutlineThunderbolt color="blue" size={32} />,
      title: "Marketing",
      paragraph:
        "Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction.",
      buttonText: "Learn more",
    },
    {
      icon: <RiUserStarLine color="blue" size={32} />,
      title: "Customer Success",
      paragraph:
        "Offer exceptional support: Your clients will be delighted with one- click scheduling and increased responsiveness.",
      buttonText: "Learn more",
    },
  ];
  return (
    <>
      {" "}
      <div className="cards-head flex flex-col justify-center items-center mt-36">
        <p className="text-blue text-lg font-medium">SOLUTIONS</p>
        <h1 className="text-[40px] font-bold mt-6 mb-12">Calendly can solve your specific pain points</h1>
      </div>
      <div className="cards flex flex-row flex-wrap">
        {cardsData.map((data, index) => (
          <Card
            key={index}
            icon={data.icon}
            title={data.title}
            paragraph={data.paragraph}
            buttonText={data.buttonText}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
