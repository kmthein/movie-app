import React from 'react'
import { key } from '../api'
import { Link, useLoaderData } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs';
import { BsPlayFill } from "react-icons/bs";

const MovieDetail = () => {
    const movie = useLoaderData();

  return (
    <div className=' absolute top-20 left-12 sm:left-20'>
        <div className='flex flex-col sm:flex-row gap-20'>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={300} className=' border-0 rounded-lg' />
            <div className='pt-10'>
                <div className=' flex items-center w-[90%] justify-between'>
                    <h1 className='text-4xl font-semibold'>{movie.title}</h1>
                    <span className='flex items-center text-2xl gap-2'>{movie.vote_average}<BsFillStarFill className=' text-yellow-400 text-md' /></span>
                    
                </div>
                <div className='flex gap-3 mt-4 text-white/50'>
                    <span>{(movie.release_date).slice(0, 4)}<span className='pl-2'>|</span></span>
                    <span>{Math.floor(movie.runtime / 60)}hr {movie.runtime % 60}min<span className='pl-2'>|</span></span>
                    <span>{movie.original_language.toUpperCase()}</span>
                </div>
                {/* <div className='py-2'>
                    <p className='my-2'><span className='text-red-500 mr-2'>Release On</span>{movie.release_date}</p>
                    <p><span className='text-red-500 mr-2'>Runtime</span>{movie.runtime} min</p>
                </div> */}
                <div className='flex gap-2 my-5'>
                    {
                        movie.genres.map((genre) => (
                            <span key={genre.id} className=' bg-white/20 px-2 py-1 rounded-md'>{genre.name}</span>
                        ))
                    }
                </div>
                <div className='my-2 w-[90%]'>
                    <p className='py-2 text-justify leading-loose'>{movie.overview}</p>
                </div>
                <div className='my-5'>
                    <Link to={movie.homepage}>
                    <button className=' bg-red-600 px-4 gap-2 py-2 flex items-center'><BsPlayFill />Watch Now</button>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MovieDetail
export const loader = async ({request, params}) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&language=en-US`);
    if(!response.ok) {

    } else {
        const data = await response.json();
        return data;
    }
}