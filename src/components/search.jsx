import { BiSearchAlt2 } from "react-icons/bi";
export const SearchBar = () => {
  return (
    <form>
      <div className="w-full relative">
        <BiSearchAlt2 className="text-blue-200 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          className="bg-[#1e1c29] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-orange-900"
        />
      </div>
    </form>
  );
};
