import React, { useState } from "react";
import { key } from "../api";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";

const Upcoming = () => {
  const upcomingMovies = useLoaderData();

  return (
    <>
      {/* <Hero /> */}
      <div className="px-10 mt-8">
        <h1 className="text-xl font-semibold">Upcoming</h1>
        <div className=" grid grid-cols-6 overflow-x-hidden scroll whitespace-nowrap scroll-smooth gap-2 px-2 mt-4 text-center cursor-pointer my-10 border-t-[1px] border-slate-400 pt-10">
          {upcomingMovies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
export const loader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`
  );
  if (!response.ok) {
  } else {
    const data = await response.json();
    console.log(data.results);
    return data.results;
  }
};
