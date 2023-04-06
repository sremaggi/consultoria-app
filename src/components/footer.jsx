import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const FooterApp = ({ showMenu }) => {
  return (
    <footer
      className={`bg-gray-800  py-2 fixed bottom-0 w-screen  z-50  ${
        showMenu ? `pl-20 lg:pl-28 ` : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-gray-400">&copy; 2023 Primera Vista</div>
        <div className="flex justify-center items-center">
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-3">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-3">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
