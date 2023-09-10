import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovie } from '../utils/movieSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movie.upcomingMovies);
    
    const func =  async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovie(json.results));
    };
    useEffect(()=>{
        if(upcomingMovies === null) func();
    },[])
};

export default useUpcomingMovies;