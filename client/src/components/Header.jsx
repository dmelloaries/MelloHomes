import React from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500" href="./assets/logo.png">Mello</span>
            <span className="text-slate-700">Homes</span>
          </h1>
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-24 sm:w-64"
        />
        <button>
          <FaSearch className="text-slate-600" />
        </button>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            <li className=" text-slate-700 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
