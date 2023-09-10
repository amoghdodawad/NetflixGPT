import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies);

    const func =  async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovie(json.results));
    };
    useEffect(()=>{
        if(nowPlayingMovies === null) func();
    },[])
};

export default useNowPlayingMovies;