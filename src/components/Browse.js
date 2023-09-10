import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';

const Browse = ({ changeStatus }) => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const shouldShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
    if(shouldShowGptSearch === null) return;

    return (
        <div>
            {/* 
                MainContainer
                    - VideoBackground
                    - VideoContainer
                SecondaryContainer
                    - MovieList * n
                    - Cards * n
            */}
            <Header changeStatus={changeStatus}/>
            {shouldShowGptSearch ? (
                <>
                    <GPTSearchPage/>
                </>
            ) : (
                <>
                    <MainContainer/>
                    <SecondaryContainer/>
                </>
            )}
        </div>
    )
    }

export default Browse;