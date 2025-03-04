"use client";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

interface Links {
  name: string;
  href: string;
}

const links: Links[] = [
  { name: "Github Reposatory", href: "#" },
  { name: "Screenshot", href: "#" },
  { name: "Live Demo", href: "#" },
];

export const Dropdown = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 hover:bg-gray-50  h-[50px]"
        onClick={() => setToggle(!toggle)}
        aria-expanded={toggle}
        aria-haspopup="true"
      >
        Links of the projects
        <SlArrowDown
          className={`ml-1 transition-transform duration-200 ${toggle ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 ${
          toggle ? "block" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-1">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
