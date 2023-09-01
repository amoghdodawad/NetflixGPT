import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if(!movies) return;
    return (
        <div className='p-4 bg-opacity-20'>
            <h1 className='text-3xl font-bold text-white'>{title}</h1>
            <div className='flex no-scrollbar overflow-x-scroll m-2'>
                <div className='flex'>
                    {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                    {/* <MovieCard movie={movies[0]}/> */}
                    {/* <MovieCard/> */}
                </div>
            </div>
        </div>
    );
};

export default MovieList;