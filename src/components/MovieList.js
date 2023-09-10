import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if(!movies) return;
    return (
        <div className='p-4 bg-gradient-to-t from-black'>
            <h1 className='sm:text-3xl text-xl font-bold text-white'>{title}</h1>
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