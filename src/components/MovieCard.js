import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = (movie) => {
    // console.log(movie);
    console.log('called');
    const poster_path = movie.movie.poster_path;
    return (
        <div className='w-40 my-2 mx-3 hover:scale-110 transition overflow-hidden'>
            <img className='' alt='Movie logo'
             src={IMG_CDN_URL+poster_path}
            ></img>
        </div>
    );
};

export default MovieCard;