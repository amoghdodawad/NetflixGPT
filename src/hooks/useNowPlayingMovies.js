import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addMovie } from '../utils/movieSlice';

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    return async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addMovie(json.results));
        // console.log(json);
    };
};