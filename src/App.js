import "./App.css";
import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import NewsScreen from "./screen/news";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProductsScreen from "./screen/products";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#ffffff] w-full min-h-screen">
      {/** Movil app menu*/}
      <nav
        className={`bg-[#1e1c29]  fixed w-full text-2xl py-2 px-4 flex items-center 
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
          showMenu ? `pl-20 lg:pl-32 pt-20 pr-3` : "pt-20 pl-3 pr-3"
        } grid grid-cols-1 lg:grid-cols-8`}
      >
        <div className="lg:col-span-6">
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<NewsScreen />} />
              <Route exact path="/products" element={<ProductsScreen />} />
            </Routes>
          </HashRouter>
        </div>
        <div className="lg:col-span-2 text-black fixed lg:static right-0">
          Carrito
        </div>
      </main>
    </div>
  );
}

export default App;
