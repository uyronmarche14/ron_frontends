"use client";
import Image, { StaticImageData } from "next/image";
import { BiAddToQueue } from "react-icons/bi";
import React, { useState } from "react";

interface Props {
  id: number;
  title: string;
  description: string;
  images: StaticImageData;
}

const PostInput: React.FC<Props> = ({ id, title, description, images }) => {
  const [toggle, setToggle] = useState(false);

  const addPost = () => {
    setToggle(true);
  };

  const hidePost = () => {
    setToggle(false);
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8  pb-12 ">
      <div className="py-4">
        <BiAddToQueue
          className="w-[40px] h-[40px] text-black hover:text-primary"
          onClick={addPost}
        />
      </div>
      {toggle && (
        <div className="border-2 border-gray-600 w-full h-[300px] rounded-xl bg-white">
          <form>
            <input
              className="text-blue-500 px-4 py-2"
              type="text"
              value={title}
              onChange={hidePost}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default PostInput;
