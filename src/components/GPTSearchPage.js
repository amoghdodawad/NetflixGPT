import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUND_IMAGE } from '../utils/constants';

const GPTSearchPage = () => {
    return (
        <div className=''>
            <div className='fixed -z-10 h-full w-full'>
                <img src={BACKGROUND_IMAGE} alt='logo' className='h-full w-full scale-150 sm:scale-100 overflow-hidden'>
                </img>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
};

export default GPTSearchPage;