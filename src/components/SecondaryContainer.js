import React from 'react';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movie = useSelector((store) => store.movie?.nowPlayingMovies);
    return (
        <div>SecondaryContainer</div>
    )
};

export default SecondaryContainer;