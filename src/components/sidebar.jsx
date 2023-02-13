import * as React from "react";
import { FaCashRegister, FaHome, FaSignOutAlt } from "react-icons/fa";

export const Sidebar = (props) => {
  const { showMenu } = props;
  const [home, setHome] = React.useState(true);
  const [products, setProducts] = React.useState(false);

  return (
    <div>
      <div
        className={`bg-[#1e1c29]  fixed  h-full w-16 lg:w-24 flex flex-col justify-between transition-all z-50 ${
          showMenu ? "left-0" : "-left-full"
        } mt-10`}
      >
        <div>
          <ul className="pl-2">
            <li
              className={`${
                home ? "bg-[#ffffff]" : ""
              } hover:bg-[#ffffff] p-2 lg:p-4 rounded-tl-lg rounded-bl-lg my-2`}
            >
              <a
                href="/"
                className={`flex ${
                  home ? "bg-[#dd8372]" : ""
                } p-2  lg:p-4 rounded-lg justify-center`}
                onClick={() => {
                  setHome(true);
                  setProducts(false);
                }}
              >
                <FaHome
                  className={`text-lg ${
                    home ? "text-gray-900" : "text-[#dd8372]"
                  } text-gray-900`}
                />
              </a>
            </li>
            <li
              className={`${
                products ? "bg-[#ffffff]" : ""
              } hover:bg-[#ffffff] p-2 lg:p-4 rounded-tl-xl rounded-bl-xl group transition-colors my-1`}
            >
              <a
                href="/#/products"
                className={`${
                  products ? "bg-[#dd8372]" : ""
                } flex p-2 lg:p-4 rounded-lg justify-center transition-colors`}
                onClick={() => {
                  setProducts(true);
                  setHome(false);
                }}
              >
                <FaCashRegister
                  className={`text-lg ${
                    products ? "text-gray-900" : "text-[#dd8372]"
                  } text-gray-900`}
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-2">
            <li className="hover:bg-[#ffffff] p-2 rounded-tl-xl rounded-bl-xl group transition-colors mb-20">
              <a
                href="/"
                className=" flex p-2 rounded-lg justify-center transition-colors"
              >
                <FaSignOutAlt className=" text-lg text-[#dd8372]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
