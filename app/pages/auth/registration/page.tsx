"use client";
import React from "react";
import { signup } from "@/app/actions/auth";
import logo from "@/public/bing_1240946.png";
import Image from "next/image";

export const Registration = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-white px-28">
      <div className="text-black w-full h-[100vh] flex flex-col justify-center items-center">
        <div className="py-8">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={logo}
              width={40}
              height={40}
              alt="Logo"
              className="hover:rotate-45 transition-transform duration-300 ease-in-out"
            />
            <p className="text-black text-4xl font-bold px-2 py-2">DISOR</p>
          </div>
          <p className="text-black opacity-55 pb-4 text-sm">
            Blk 86 lot 19 Phase 5, Upper Bicutan, Taguig City
          </p>
        </div>
        <p className="text-black text-4xl font-semibold">
          Sign in or Create Account
        </p>
        <p className="text-black opacity-55 py-1 text-sm">
          Create your first login for great results
        </p>

        <form
          className="w-[400px] text-center flex flex-col space-y-4 py-4"
          action={signup}
        >
          <div>
            <input
              className="w-full h-[50px] border rounded-lg p-2 text-black border-gray-200 hover:border-green-400"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="w-full h-[50px] border rounded-lg p-2 text-black border-gray-200 hover:border-green-400"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full h-[50px] border rounded-lg p-2 text-black border-gray-200 hover:border-green-400"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-black h-[50px] w-full rounded-lg hover:bg-green-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
