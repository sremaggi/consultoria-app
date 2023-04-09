import React from "react";
import { FaInstagram } from "react-icons/fa";

export const FooterApp = () => {
  return (
    <footer
      className={`bg-gray-300 border border-gray-800 shadow-lg  py-2 px-3 fixed bottom-0 w-screen z-50`}
    >
      <div className="flex justify-end">
        <div className="text-gray-100">&copy; 2023 Primera Vista</div>
        <div className="flex justify-center items-center">
          <a href="#" className="text-fuchsia-500 hover:text-gray-300 mx-2">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
