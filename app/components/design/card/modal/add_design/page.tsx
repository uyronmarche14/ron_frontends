import React from "react";

interface AddModal {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: React.FC<AddModal> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const inputs = [
    {
      id: "Title",
      label: "Title",
      type: "text",
    },
    {
      id: "Description",
      label: "Description",
      type: "text",
    },
    {
      id: "Images",
      label: "Images",
      type: "file",
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gAray-900 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-[800px] h-[600px] bg-white shadow-lg py-2 rounded-md z-50">
        <div className="flex flex-row items-center justify-between border-b border-gray-300 px-4 py-3">
          <h2 className="text-xl font-bold text-gray-900">Add Design</h2>
          <div className="flex items-center space-x-2">
            <button className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white">
              Copy Code
            </button>
            <button className="h-8 px-2 text-sm rounded-md bg-gray-700 text-white">
              Expand Code
            </button>
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm font-medium text-gray-700">
            Add your design code here
          </p>
        </div>

        {inputs.map((input) => (
          <div key={input.id} className="flex flex-col px-4">
            <label className="text-lg font-medium text-gray-700">
              {input.label}
            </label>
            <input
              type={input.type}
              className="rounded-md mt-1 border-2 border-gray-300 p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddModal;
