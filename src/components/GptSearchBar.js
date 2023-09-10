import React, { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';
 
const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchTmdbMovies = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = () => {
        const gptQuery = 'Act as a movie recommendation and suggest some movies for the query : ' + searchText.current.value + '. Give me the names of only 5 movies, comma seperated, like the example result given ahead. Example result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';
        async function main() {
            const GptSearchResults = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            });
            if(!GptSearchResults){
                console.log('Unable to fetch');
            }
            const GptMovies = GptSearchResults.choices[0].message?.content.split(',');
            const promiseArray = GptMovies.map((movie) => searchTmdbMovies(movie));
            const movieDetails = await Promise.all(promiseArray);
            dispatch(addGptMovieResults({gptMoviesTitle : GptMovies, gptMoviesDetails : movieDetails}));
          }
          main();
    }

    return (
            <div className='pt-20 flex justify-center items-center overflow-hidden'>
                <form className='my-2 overflow-hidden' onSubmit={(event) => {
                    event.preventDefault();
                    handleGptSearchClick();
                }}>
                    <div className='rounded-lg bg-amber-200 bg-opacity-25 shadow-lg flex flex-wrap items-center justify-center overflow-hidden'>
                        <input ref={searchText} type='text' placeholder='Search here...' className='py-4 sm:px-20 px-8 my-4 sm:mx-8 mx-2 border border-black rounded-md text-left text-2xl'></input>
                        <button type='submit' className='border border-black py-4 px-3 my-4 mx-8 rounded-md text-2xl bg-red-700 text-white bg-opacity-100 hover:bg-opacity-90 transition-colors'>Search</button>
                    </div>
                </form>
            </div>
    )
};
 
export default GptSearchBar;