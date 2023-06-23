import { SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroCard = ({movie}) => {
  return (
    <>
      <SplideSlide>
        <div className=" w-full h-screen relative">
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            effect="blur"
            className=" w-full object-cover sm:h-full"
          />
        </div>
        <div className="dark-overlay carousel-overlay"></div>
        <div className="slide-info text-white absolute top-60 left-10 ml-[10%]">
            <div className=" h-[30%] w-full sm:w-[50%]">
            <h1 className="text-3xl sm:text-5xl font-bold">{movie.title}</h1>
            <p className="mt-5 leading-8 hidden sm:block">
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
