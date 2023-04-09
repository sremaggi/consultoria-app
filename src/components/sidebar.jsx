import * as React from "react";
import { FaCashRegister, FaHome, FaSignOutAlt } from "react-icons/fa";

export const Sidebar = (props) => {
  const { showMenu } = props;
  const [home, setHome] = React.useState(true);
  const [products, setProducts] = React.useState(false);

  return (
    <div>
      <div
        className={`bg-[#28b622]  fixed  h-full w-16 flex flex-col justify-between transition-all z-50 top-0 left-0  ${
          showMenu ? "left-0" : "-left-full"
        } mt-10`}
      >
        <div>
          <ul className="pl-2">
            <li
              className={`${
                home ? "bg-[#F2F2F2]" : ""
              } hover:bg-[#F2F2F2]  text-white hover:text-gray-700 p-2 lg:p-4 rounded-tl-lg rounded-bl-lg my-2`}
            >
              <a
                href="/"
                className={`flex ${
                  home ? "bg-[#28b622]" : ""
                } p-2  lg:p-3 rounded-lg justify-center`}
                onClick={() => {
                  setHome(true);
                  setProducts(false);
                }}
              >
                <FaHome className={`text-lg ${home ? "text-white" : ""}`} />
              </a>
            </li>
            <li
              className={`${
                products ? "bg-[#F2F2F2]" : ""
              } hover:bg-[#F2F2F2] text-white  hover:text-gray-700 p-2 lg:p-4 rounded-tl-xl rounded-bl-xl group transition-colors my-1`}
            >
              <a
                href="/#/products"
                className={`${
                  products ? "bg-[#28b622]" : ""
                } flex p-2 lg:p-3 rounded-lg justify-center transition-colors`}
                onClick={() => {
                  setProducts(true);
                  setHome(false);
                }}
              >
                <FaCashRegister
                  className={`text-lg ${products ? "text-white" : ""}`}
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-2">
            <li className="hover:bg-[#f8f8f8] p-2 rounded-tl-xl rounded-bl-xl group transition-colors mb-20">
              <a
                href="/"
                className=" flex p-2 rounded-lg justify-center transition-colors"
              >
                <FaSignOutAlt className=" text-lg text-red-900" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
