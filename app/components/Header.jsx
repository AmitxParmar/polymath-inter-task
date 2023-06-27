import React from "react";

const Header = () => {
  return (
    <header className="bg-[#ccc]/25 flex py-2 px-6 md:px-12 flex-row-reverse h-[10vh] ">
      <button className="bg-black duration-500 hover:border-[#ccc] hover:bg-white transition-all border-white hover:text-black border hover:shadow-2xl text-white rounded-full">
        <p className="px-6 md:px-12 py-2 font-bold uppercase">login</p>
      </button>
    </header>
  );
};

export default Header;
