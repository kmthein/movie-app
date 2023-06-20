import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { key } from "../api";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

let isSearched = true;

const Navbar = () => {
  const [input, setInput] = useState(false || true);

  const [name, setName] = useState("");

  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const searchHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${key}`
    );
    const data = await response.json();
    navigate(`/search/${name}`);
    setIsSearch(false);
  };

  return (
    <div className="navbar">
      <div className=" flex py-6 px-5 xl:px-20 lg:justify-between">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
            width={90}
          />
        </Link>
        <div className=" sm:flex items-center gap-2 lg:gap-10 hidden">
          <div className="ml-5 sm:ml-[200px] lg:ml-[600px]">
            <ul className=" flex mx-2 gap-1 sm:gap-10 cursor-pointer font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-2 border-red-600 pb-4 px-2"
                    : "text-gray-400 pb-4"
                }
                to="/"
              >
                <li className="">Popular</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-2 border-red-600 pb-4 px-2"
                    : "text-gray-400 pb-4"
                }
                to="/upcoming"
              >
                <li>Upcoming</li>
              </NavLink>
            </ul>
          </div>
          <div className=" flex items-center ml-2 lg:ml-[50px] pb-4">
            {input ? (
              <form onSubmit={searchHandler}>
                <input
                  type="text"
                  className=" w-7 sm:w-auto bg-transparent border-b-[1px] border-b-slate-400 focus:outline-none text-white"
                  placeholder="Search..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </form>
            ) : (
              <div className="w-2 sm:w-[170px]"></div>
            )}
            <AiOutlineSearch
              onClick={() => setInput(!input)}
              className="text-white text-xl cursor-pointer"
            />
          </div>
        </div>
        <div className="ml-[250px] sm:hidden">
          <GiHamburgerMenu
            className="text-xl"
            onClick={() => setIsSearch(true)}
          />
        </div>
      </div>
      {isSearch && (
        <div className=" sm:hidden bg-black/90 h-screen z-50 w-full absolute top-0">
          <AiOutlineClose className="text-2xl ml-auto mr-5 mt-5" onClick={() => setIsSearch(false)}/>
          <ul className=" flex flex-col cursor-pointer font-semibold mt-20 ml-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-red-600 w-20 pb-2 mb-5"
                  : "text-gray-400 py-4 mb-5"
              }
              to="/"
              onClick={() => setIsSearch(false)}
            >
              <li className="">Popular</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 border-b-2 border-red-600 w-20 pb-2 mb-5"
                  : "text-gray-400 py-4 mb-5"
              }
              to="/upcoming"
              onClick={() => setIsSearch(false)}
            >
              <li>Upcoming</li>
            </NavLink>
          </ul>
          <div className=" flex items-center ml-5 lg:ml-[50px] pb-4 mt-2">
            <form onSubmit={searchHandler}>
              <input
                type="text"
                className=" w-20 sm:w-auto bg-transparent border-b-[1px] border-b-slate-400 focus:outline-none text-white"
                placeholder="Search..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </form>
            <AiOutlineSearch
              onClick={() => setInput(!input)}
              className="text-white text-xl cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
