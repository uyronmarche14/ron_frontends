import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bing_1240946.png";
import menu from "@/public/icons8-menu (1).svg";

export const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <nav className="text-black py-2 bg-white flex items-center gap-2 w-full transition-all duration-300 ease-in-out">
        <Image
          src={logo}
          width={50}
          height={50}
          alt="Logo"
          className="hover:rotate-45 transition-transform duration-300 ease-in-out"
        />
        <Link
          className="font-bold hover:text-blue-500 text-4xl transition-colors duration-300 ease-in-out"
          href={"/"}
        >
          Disor
        </Link>
        <div className="pl-16 flex gap-12 text-lg font-semibold">
          <Link
            className="hover:text-blue-500 transition-colors duration-300 ease-in-out"
            href={"/Home"}
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-500 transition-colors duration-300 ease-in-out"
            href={"/projects/main_projects"}
          >
            Project
          </Link>
          <Link
            className="hover:text-blue-500 transition-colors duration-300 ease-in-out"
            href={"/about"}
          >
            About
          </Link>
        </div>
        <div className="ml-auto flex flex-row gap-8 items-center">
          <p className="font-semibold text-xl">User@203923</p>

          <Link href={"/pages/auth/login"}>
            <div className="flex flex-row items-center justify-end rounded-lg">
              <button className="text-lg font-semibold h-[50px] w-[120px] bg-black text-white rounded-xl transition-all duration-300 ease-in-out hover:bg-white hover:text-black flex items-center justify-center">
                Login
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
