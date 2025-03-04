export const Filter = () => {
  return (
    <div className="w-full flex px-8 font-sm">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex-1">
          <input className="h-[50px] w-full max-w-[400px] bg-white text-black rounded-xl font-semibold  border border-black p-2" />
        </div>

        <div className="flex-1 flex justify-end">
          <button className="h-[50px] w-[200px] bg-black text-white rounded-xl font-semibold hover:bg-blue-500 hover:text-white">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
