import React from 'react'
import { BsPlayFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Card = ( {movie} ) => {
    const navigate = useNavigate();

    const movieDetailHandler = (id) => {
        navigate(`/movie/${id}`);
    }
  return (
    <div className=' border border-transparent rounded-md group relative mt-2 cursor-pointer mx-auto'>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={180} className='rounded-md ' />
        <div className=" group-hover:h-full group-hover:absolute group-hover:top-0 group-hover:bg-black/70 group-hover:w-[180px] card-overlay"></div>
        <BsPlayFill onClick={() => movieDetailHandler(movie.id)} className="text-7xl text-red-600 absolute bottom-[0%] left-[30%] group-hover:block group-hover:bottom-[35%] hidden duration-500" />
    </div>
  )
}

export default Card