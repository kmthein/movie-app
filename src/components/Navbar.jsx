import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { key } from "../api";

let isSearched = true;

const Navbar = () => {
  const [input, setInput] = useState(false || true);

  const [name, setName] = useState('');

  const navigate = useNavigate();

  const searchHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${key}`);
    const data = await response.json();
    navigate(`/search/${name}`)
  }

  return (
    <div className="navbar">
      <div className=" flex py-6 px-20 justify-between">
        <div className="">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="logo"
              width={90}
            />
          </Link>
        </div>
        <div className=" flex items-center gap-10">
          <div className="ml-5 sm:ml-[600px]">
            <ul className=" flex mx-2 gap-10 cursor-pointer font-semibold">
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
          <div className=" flex items-center ml-2 sm:ml-[50px] pb-4">
            {input ? (
              <form onSubmit={searchHandler}>
              <input
                type="text"
                className=" bg-transparent border-b-[1px] border-b-slate-400 focus:outline-none text-white"
                placeholder="Search..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              </form>
            ) : (
              <div className="w-[170px]"></div>
            )}
            <AiOutlineSearch
              onClick={() => setInput(!input)}
              className="text-white text-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
