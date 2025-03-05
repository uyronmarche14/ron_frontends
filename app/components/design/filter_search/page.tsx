"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AddModal from "@/app/components/design/card/modal/add_design/page";

export const Filter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <input
            className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-accent-light focus:border-secondary focus:ring-2 focus:ring-secondary-light/50 transition-all duration-200 outline-none bg-background-light text-text-dark"
            placeholder="Search designs..."
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-xl" />
        </div>
        <button
          onClick={handleOpen}
          className="w-full sm:w-auto px-8 h-12 bg-primary hover:bg-primary-dark text-background font-medium transition-colors duration-200 flex items-center justify-center gap-2 rounded-lg"
        >
          Add Design
        </button>
      </div>
      {showModal && <AddModal isOpen={showModal} onClose={handleClose} />}
    </div>
  );
};

export default Filter;
