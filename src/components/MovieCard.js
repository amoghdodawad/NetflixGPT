import React from 'react';
import { DEFAULT_IMG_URL, IMG_CDN_URL } from '../utils/constants';

const MovieCard = (movie) => {
    const poster_path = movie.movie.poster_path;
    
    return (
        <div className='w-40 my-2 mx-3 hover:scale-110 hover:cursor-pointer transition overflow-hidden '>
            <img className='sm:hover:scale-110 sm:scale-100 scale-95 hover:scale-100 overflow-hidden transition text-center bg-orange-600 bg-opacity-25 h-full' alt={movie.movie.original_title}
             src={poster_path ? IMG_CDN_URL+poster_path : null}
            ></img>
        </div>
    );
};

export default MovieCard;