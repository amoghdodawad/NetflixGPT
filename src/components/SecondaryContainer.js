import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movie);
    if(!movies) return;
    return (
        <div className='bg-black'>
            {/* 
                MovieList - Popular
                    - MovieCard * n
                MovieList - Now playing
                MovieList - Trending
                MovieList - Horror
            */}
            <div className='relative pl-12 lg:-mt-48 md:-mt-24 pt-8 sm:pt-0 z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            </div>
        </div>
    )
};

export default SecondaryContainer;