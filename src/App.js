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
    <div className="bg-[#f8f8f8] w-full min-h-screen">
      {/** Movil app menu*/}
      <nav
        className={`bg-[#28b622]  fixed top-0 left-0  z-50 w-full text-2xl py-2 pr-4 pl-1 flex items-center 
          rounded-br-xl shadow-slate-50 justify-between text-white`}
      >
        <button className="text-white" onClick={toggleMenu}>
          {showMenu ? (
            <AiOutlineCloseCircle className="pt-1 text-3xl" />
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
          showMenu ? `pl-20 lg:pl-28 pt-16 pr-3` : "pt-16 pl-3 pr-3"
        } grid grid-cols-1 lg:grid-cols-8`}
      >
        <div className="lg:col-span-8">
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<NewsScreen />} />
              <Route exact path="/products" element={<BookingsScreen />} />
            </Routes>
          </HashRouter>
          <FooterApp showMenu={showMenu} />
        </div>
      </main>
    </div>
  );
}

export default App;
