"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Dropdown from "./buttons/page";
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";
import samplecard from "@/public/bg2.png";

interface card {
  id: number;
  name: string;
  description: string;
  logoUrl: StaticImageData;
  github: string;
}
const cards: card[] = [
  {
    id: 1,
    name: "Hotel and Travelling system",
    description: "Hotel Travelling system with different features",
    logoUrl: samplecard,
    github: "",
  },
  {
    id: 2,
    name: "Card View Credit Card",
    description: "Card view credit card system with different features",
    logoUrl: samplecard,
    github: "",
  },
  {
    id: 3,
    name: "Card View Credit Card",
    description: "Card view credit card system with different features",
    logoUrl: samplecard,
    github: "",
  },
  {
    id: 4,
    name: "Card View Credit Card",
    description: "Card view credit card system with different features",
    logoUrl: samplecard,
    github: "",
  },
];

export const Card = () => {
  return (
    <div className="h-full w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((input) => (
          <div
            key={input.id}
            className="group bg-background rounded-xl shadow-sm ring-1 ring-accent-light/20 overflow-hidden transition-all duration-200 hover:shadow-lg hover:ring-accent-light/40"
          >
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-background-dark overflow-hidden">
                    <Image
                      src={input.logoUrl}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <Link
                    href=""
                    className="hover:text-primary transition-colors"
                  >
                    <span className="font-medium">@UserUmuotots</span>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-light">
                  <span className="flex items-center gap-1 hover:text-primary">
                    <FaHeart />
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text-dark">
                  {input.name}
                </h2>
                <p className="mt-1 text-text-light">{input.description}</p>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={input.logoUrl}
                  alt={input.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex-1">
                  <Dropdown />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
