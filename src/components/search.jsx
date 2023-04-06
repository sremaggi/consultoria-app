import { BiSearchAlt2 } from "react-icons/bi";
export const SearchBar = () => {
  return (
    <form>
      <div className="w-full relative">
        <BiSearchAlt2 className="text-[#28b622] absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          className="bg-gray-700/5 w-full py-2 pl-10 pr-4 rounded-lg text-gray-800 outline-orange-100 out"
        />
      </div>
    </form>
  );
};
