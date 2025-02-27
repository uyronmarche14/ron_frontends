import React from "react";
import bg from "@/public/bg.jpeg";
import Link from "next/link";
import Image from "next/image";

export const bg_login = () => {
  return (
    <div className="w-[60%] h-[100vh] relative">
      <div
        className="w-full h-full relative"
        id="default-carousel"
        data-carousel="slide"
      >
        <div
          className="h-full w-full relative overflow-hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <Image
            src={bg.src}
            alt="background"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
      </div>

      <div className="absolute left-0 top-0 flex flex-row justify-start items-start p-8">
        <p className="text-white font-base">
          Don't have an account?
          <Link
            href="/pages/auth/registration"
            className="hover:text-green-400 font-bold px-1"
          >
            Create Now
          </Link>
        </p>
      </div>
      <div className="absolute left-0 bottom-0 flex flex-row justify-start items-end px-8 pb-16 pt-8 opacity-85">
        <p className="text-white font-semibold text-3xl leading-snug">
          "Start your career with awesome UI components and will already made
          designs and code snippets."
        </p>
      </div>
    </div>
  );
};

export default bg_login;
