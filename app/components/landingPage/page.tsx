import React from "react";
import Image from "next/image";
import star from "@/public/star.png";
import award from "../../public/award.png";
import CompaniesPage from "../../../public/rendering_imgs/companies/page";

export const LandingPage = () => {
  const render5Star = () => {
    return (
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            key={i}
            src={star}
            alt="rating"
            width={25}
            height={25}
            className="object-contain"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-t from-sky-50 to-sky-300 w-full h-[100vh] gap-6 p-4 m-4 rounded-2xl flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center rounded-3xl gap-4 h-[60px] w-[450px] p-2 m-4 bg-white">
        {render5Star()}
        <p className="text-black font-bold text-sm">
          rater 5.5 fomm all over 500 stores
        </p>
      </div>
      <div>
        <h1 className="text-black text-7xl w-[1000px] text-center font-bold justify-center">
          Find Top Designers to Bring Your Vision to Life
        </h1>

        <span></span>
      </div>
      <p className="text-black text-xl">
        hire expert top talends desingers for websites, app, and more.
      </p>
      <div className="flex flex-row gap-4 pt-4">
        <div className="flex flex-row items-center justify-center">
          <span className="bg-black text-white h-[50px] w-[50px] flex items-center justify-center rounded-l-3xl">
            &lt;
          </span>
          <button className="font-bold bg-black text-white h-[50px] w-[200px] flex items-center text-xl justify-start pl-4 rounded-r-3xl">
            Hire Designer
          </button>
        </div>

        <button className="font-bold bg-white text-black text-xl h-[50px] w-[250px] rounded-3xl">
          Explore Services
        </button>
      </div>
      <div className="pt-40 flex flex-col gap-2">
        <div className="flex items-center justify-center">
          <p className="text-black font-bold text-2xl">Trusted by</p>
        </div>
        <div>
          <CompaniesPage />
        </div>
      </div>
    </div>
  );
};
