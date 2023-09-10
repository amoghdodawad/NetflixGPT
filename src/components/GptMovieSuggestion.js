import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const gpt = useSelector((store) => store.gpt);
    if(gpt === null) return;
    const { gptMoviesDetails, gptMoviesTitle } = gpt;
    if(!gptMoviesDetails || !gptMoviesTitle) return;
    return (
        <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
            <div>
                {/* <MovieList title={gptMoviesTitle[0]} movies={gptMoviesDetails[0]}/> */}
                {gptMoviesDetails.map((movie,i) => <MovieList key={gptMoviesTitle[i]} title={'Showing results for ' + gptMoviesTitle[i]} movies={movie}/>)}
            </div>
        </div>
    )
};

export default GptMovieSuggestion;