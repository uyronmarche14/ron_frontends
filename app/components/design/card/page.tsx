"use client";
import React, { useState } from "react";
import Image from "next/image";
import samplecard from "@/public/bg.jpeg";
import select from "@/public/select-icon.png";
import share from "@/public/share.png";
import Link from "next/link";

export const Card = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-start justify-start px-4 font-sm grid grid-cols-2 md:grid-cols-2">
      <div className="p-4 flex flex-col items-start justify-start h-fit w-[720px] bg-[#1E201E] rounded-xl">
        <div className="flex flex-col items-start justify-between w-full pt-2 pb-1">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center justify-start space-x-2">
              <div className="bg-white h-[40px] w-[40px] rounded-full flex-shrink-0"></div>
              <h1 className="text-base text-white py-2">@UserUmuotots</h1>
            </div>
            <p className="text-sm text-white">2 days ago || 3 comments</p>
          </div>
          <div className="py-2 space-y-1">
            <h1 className="text-xl py-2 text-white font-bold">
              Hotel and Travelling system
            </h1>
            <p className="text-sm text-white">
              Hotel Travelling system with different features
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-[420px] w-full rounded-xl">
          <Image
            src={samplecard}
            alt="Sample Card"
            className="h-full w-full rounded-xl hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div className="py-4 flex items-center justify-between w-full">
          <Link href="/designs" className="flex items-center justify-center">
            <div className="bg-white hover:bg-blue-500 h-[50px] w-[250px] rounded-xl flex items-center justify-center px-2">
              <div className="relative h-[30px] w-[30px]">
                <Image
                  src={select}
                  alt="Select Icon"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                />
              </div>
              <h1 className="px-2 text-sm text-black py-2 font-bold">
                Links of the projects
              </h1>
            </div>
          </Link>
          <Link href="/designs">
            <div className="bg-white hover:bg-blue-500 h-[50px] w-[50px] rounded-xl relative">
              <Image
                src={share}
                alt="Share Icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[25px] w-[25px] object-cover hover:scale-110 transition-transform duration-200"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
