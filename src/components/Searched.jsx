import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLoaderData, useParams } from 'react-router-dom'
import { key } from '../api'
import Card from './Card'

const Searched = () => {
    const searchMovies = useLoaderData();

    const {title} = useParams();

  return (
    <>
    <div className='absolute top-20 left-20'>
        <p className='text-xl'>Search results for "{title}"</p>
        <div className='grid grid-cols-6 gap-5 my-5'>
        {
            searchMovies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))
        }
        </div>

    </div>
    </>
  )
}

export default Searched
export const loader = async ({request, params}) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.title}&api_key=${key}`);
    if(!response.ok) {

    } else {
        const data = await response.json();
        return data.results;
    }
}