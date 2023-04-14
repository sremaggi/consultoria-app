import React from "react";

export const NavBarApp = () => {
  return (
    <nav
      className={`bg-[#28b622]  fixed top-0 left-0  z-50 w-full text-2xl py-2 pr-4 pl-1 flex items-center 
    rounded-br-xl shadow-sm justify-between text-white`}
    >
      <a href="/" className="ml-2">
        Primera Vista
      </a>
    </nav>
  );
};
