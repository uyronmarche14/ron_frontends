export const Header = () => {
  return (
    <div className="w-full pt-[150px] flex px-8 font-sm">
      <div className="w-full items-start justify-start">
        <h1 className="text-8xl font-semibold text-black">Design Board</h1>
        <p className="text-2xl text-black pt-2 placeholder-opacity-55 font-system">
          Your one-stop destination for premium design components that elevate
          your projects
        </p>
        <hr className=" w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default Header;
