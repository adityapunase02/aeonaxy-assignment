import React from "react";

const FooterTop = () => {
  return (
    <>
      <div className="foot-top flex flex-col items-center justify-center text-white mt-16 bg-navy">
        <div className="head flex items-center justify-center flex-col">
          <h1 className="text-[40px] font-bold mt-16">
            Easy access for easy bookings
          </h1>
          <p className="flex flex-col items-center justify-center text-xl mt-12 ">
            Share your Calendly link right from your browser, so you can
            schedule meetings <span>without the back-and-forth</span>
          </p>
        </div>
        <div className="btns mb-16">
        <button className="bg-blue rounded-full p-5 mt-12 w-52 text-white hover:bg-navy hover:text-white">Start for free</button>
        <button className="border-white border-2 rounded-full p-5 mt-12 w-52 text-white ml-6">Talk to Sales</button>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
