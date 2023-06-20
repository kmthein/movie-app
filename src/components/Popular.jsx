import React, { useEffect, useState } from "react";
import Card from "./Card";
import { key } from "../api";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";

const Popular = () => {
  const popularMovies = useLoaderData();

  return (
    <>
      {/* <Hero /> */}
      <div className="px-10 mt-8">
        <h1 className="text-xl font-semibold">Popular Now</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-2 mt-4 text-center cursor-pointer my-10 border-t-[1px] border-slate-400 pt-10">
          {popularMovies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
export const loader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`
  );
  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.results;
  }
};
