import React from "react";

const BodyInfo = () => {
  return (
    <>
      <div className="box mt-20 relative flex justify-center items-center flex-col">
        <p className="text-blue text-xl font-bold">
          SOLUTIONS
        </p>
        <h1 className="tagline font-bold text-6xl mt-10 text-light-navy">
          <span className="text-blue mr-3">Calendly</span> <span className="text-lightnavy">for the work you do</span>
        </h1>

        <p className="mt-10 text-gray text-2xl">
          Across a range of uses, Calendly helps people and teams build <br />
          &nbsp;efficiency, professionalism, and results into the work they do.
        </p>
      </div>
      <div className="btn flex items-center justify-center">
        <button className="bg-blue rounded-full p-5 mt-12 w-52 font-bold text-white hover:bg-white hover:text-blue">Contact sales</button>
      </div>
    </>
  );
};

export default BodyInfo;
