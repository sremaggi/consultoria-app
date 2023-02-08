import "./App.css";
import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import { TimeNowFormat } from "./utils/time";
import { HeaderApp } from "./components/header";
import { SearchBar } from "./components/search";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(TimeNowFormat());
  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      {/** Movil app menu*/}
      <nav
        className={`bg-[#1e1c29]  fixed w-full text-2xl py-3 px-4 flex items-center 
          rounded-br-xl shadow-slate-50 justify-between text-white`}
      >
        <button className="text-white" onClick={toggleMenu}>
          {showMenu ? (
            <AiOutlineCloseCircle className="pt-1 text-3xl lg:hidden" />
          ) : (
            <RiMenu5Fill />
          )}
        </button>
        <a href="/" className="ml-5">
          LOGO
        </a>
      </nav>
      {/** Sidebar*/}
      <Sidebar showMenu={showMenu} />
      {/** MAIN*/}
      <main
        className={`text-white ${
          showMenu ? "pl-32 pt-20 pr-3" : "pt-20 pl-3 pr-3"
        } grid grid-cols-1 lg:grid-cols-8`}
      >
        <div className="lg:col-span-6">
          <div className="flex flex-col gap-2">
            <HeaderApp title="Página de inicio" />
            <SearchBar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
