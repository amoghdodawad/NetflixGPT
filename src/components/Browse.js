import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    const movie = useSelector((store) => store.movie);
    const getNowPlayingMovies = useNowPlayingMovies();

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            {/* 
                MainContainer
                    - VideoBackground
                    - VideoContainer
                SecondaryContainer
                    - MovieList * n
                    - Cards * n
            */}
        </div>
    )
    }

export default Browse;