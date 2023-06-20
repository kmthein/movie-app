import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import HeroCard from "./HeroCard";
import { key } from "../api";

const Hero = () => {
    const [relatedMovies, setRelatedMovies] = useState([]);

    const fetchRelatedMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`)
        const data = await response.json();
        setRelatedMovies(data.results);
    }

    useEffect(() => {
        fetchRelatedMovies();
    }, [])

  return (
    <div className=" hero">
      <Splide
        options={{
          type: "loop",
          arrows: true,
          autoplay: true,
          interval: 2000,
          speed: 2000,
          width: '100%'
        }}
      >
        {
            relatedMovies.map((movie) => (
                <HeroCard movie={movie} key={movie.id}
                />
            ))
        }        
      </Splide>
    </div>
  );
};

export default Hero;
