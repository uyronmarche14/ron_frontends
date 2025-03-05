import React from "react";

interface PreviewModal {
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModal> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gAray-900 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-w-[1000px] h-[750px] bg-white shadow-lg py-2 rounded-md z-50">
        <div className="flex flex-row items-center justify-between border-b border-gray-300 px-4 py-3">
          <h2 className="text-sm font-medium text-gray-900">
            Preview of the system
          </h2>
          <div className="flex items-center space-x-2">
            <button className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white">
              Copy Code
            </button>
            <button className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white">
              Expand Code
            </button>
          </div>
        </div>

        <div className="px-4 pb-4">
          <p className="text-sm font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quod
            quis eaque aliquam necessitatibus vel eligendi laboriosam optio
            quisquam sunt.
          </p>
        </div>
        <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-2">
          <div className="text-sm font-medium text-gray-700">
            Example Content
          </div>
          <button
            type="button"
            className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
