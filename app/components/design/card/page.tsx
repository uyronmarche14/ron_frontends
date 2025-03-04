"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import samplecard from "@/public/bg.jpeg";
import select from "@/public/select-icon.png";
import share from "@/public/share.png";
import Link from "next/link";
import Dropdown from "./dropdown/page";

export const Card = () => {
  const [toggle, setToggle] = useState(false);

  interface card {
    id: number;
    name: string;
    description: string;
    logoUrl: StaticImageData;
  }
  const cards: card[] = [
    {
      id: 1,
      name: "Hotel and Travelling system",
      description: "Hotel Travelling system with different features",
      logoUrl: samplecard,
    },
    {
      id: 2,
      name: "Card View Credit Card",
      description: "Card view credit card system with different features",
      logoUrl: samplecard,
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-2 py-4 font-sm px-8 space-x-4">
      {cards.map((input) => (
        <div
          key={input.id}
          className="p-4 flex flex-col bg-[#1E201E] rounded-xl"
        >
          <div className="flex justify-between pt-2 pb-1">
            <div className="flex items-center space-x-2">
              <div className="bg-white h-[40px] w-[40px] rounded-full" />
              <h1 className="text-base text-white py-2">@UserUmuotots</h1>
            </div>
            <p className="text-sm text-white">2 days ago || 3 comments</p>
          </div>
          <div className="py-2 space-y-1">
            <h1 className="text-xl py-2 text-white font-bold">{input.name}</h1>
            <p className="text-sm text-white">{input.description}</p>
          </div>
          <div className="flex items-center justify-center h-[420px] w-full rounded-xl">
            <Image
              src={input.logoUrl}
              alt="Hotel and Travelling system"
              className="h-full w-full rounded-xl hover:scale-110 transition-transform duration-200"
            />
          </div>

          <div className="pt-4 flex items-center justify-between w-full">
            <Dropdown />

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
      ))}
    </div>
  );
};

export default Card;
