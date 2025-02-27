"use client";
import React from "react";
import { signup } from "@/app/actions/auth";

export const Registration = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-white px-28">
      <div className="text-black w-full h-[100vh] flex flex-col justify-center items-center">
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
