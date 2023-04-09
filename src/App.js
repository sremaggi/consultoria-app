import "./App.css";
import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import { NewsScreen } from "./screen/news";
import { HashRouter, Route, Routes } from "react-router-dom";
import { BookingsScreen } from "./screen/bookings";
import { FooterApp } from "./components/footer";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#F2F2F2] w-full min-h-screen">
      {/** Movil app menu*/}
      <nav
        className={`bg-[#28b622]  fixed top-0 left-0  z-50 w-full text-2xl py-2 pr-4 pl-1 flex items-center 
          rounded-br-xl shadow-slate-50 justify-between text-white`}
      >
        <button className="text-white" onClick={toggleMenu}>
          {showMenu ? (
            <AiOutlineCloseCircle className=" ml-1 text-3xl" />
          ) : (
            <RiMenu5Fill className="text-3xl ml-1 " />
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
          showMenu ? `pl-16 lg:pl-20 pt-16 ` : "pt-16 pl-3 "
        } grid grid-cols-1 lg:grid-cols-8`}
      >
        <div className="lg:col-span-8">
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<NewsScreen />} />
              <Route exact path="/products" element={<BookingsScreen />} />
            </Routes>
          </HashRouter>
        </div>
      </main>
      <FooterApp showMenu={showMenu} />
    </div>
  );
}

export default App;
