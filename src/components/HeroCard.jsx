import { SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroCard = ({movie}) => {
  return (
    <>
      <SplideSlide>
        <div className=" w-full h-screen relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className=" w-full h-screen object-cover"
          />
        </div>
        <div className="dark-overlay carousel-overlay"></div>
        <div className="slide-info text-white absolute top-60 left-10 ml-[10%]">
            <div className=" h-[30%] w-[50%]">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="mt-5 leading-8">
                {movie.overview}
            </p>
            </div>
          <button className=" bg-red-600 py-3 px-7 mt-5 rounded-full">
            <Link to={`/movie/${movie.id}`}>
            <div className="flex items-center gap-1">
            <BsPlayFill className="text-xl" />
            WATCH
            </div>
            </Link>
          </button>
        </div>
      </SplideSlide>
    </>
  );
};

export default HeroCard;
