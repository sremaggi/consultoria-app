import * as React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdEngineering, MdOutlinePermPhoneMsg, MdLogout } from "react-icons/md";

export const Sidebar = (props) => {
  const { showMenu } = props;
  return (
    <div>
      <div
        className={`bg-[#1e1c29] fixed  h-full w-28 flex flex-col justify-between transition-all z-50 ${
          showMenu ? "left-0" : "-left-full"
        } mt-12`}
      >
        <div>
          <ul className="pl-3">
            <li className="bg-[#ffffff] p-4 rounded-tl-xl rounded-bl-xl my-2">
              <a
                href="/"
                className="flex bg-[#dd8372] p-4 rounded-xl justify-center"
              >
                <AiOutlineHome className="text-2xl text-gray-900" />
              </a>
            </li>
            <li className="hover:bg-[#ffffff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors my-1">
              <a
                href="/"
                className=" flex p-4 rounded-xl justify-center transition-colors"
              >
                <MdEngineering className=" text-2xl text-[#dd8372] group-hover:text-black" />
              </a>
            </li>
            <li className="hover:bg-[#ffffff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors my-1">
              <a
                href="/"
                className=" flex p-4 rounded-xl justify-center transition-colors"
              >
                <MdOutlinePermPhoneMsg className=" text-2xl text-[#dd8372] group-hover:text-black" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="hover:bg-[#ffffff] p-4 rounded-tl-xl rounded-bl-xl group transition-colors mb-10">
              <a
                href="/"
                className=" flex p-4 rounded-xl justify-center transition-colors"
              >
                <MdLogout className=" text-2xl text-[#dd8372] group-hover:text-black" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
