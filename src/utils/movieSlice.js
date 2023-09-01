import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        nowPlayingMovies : null,
        upcomingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        trailerVideo : null
    },
    reducers : {
        addNowPlayingMovie : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addUpcomingMovie : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularMovie : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovie : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        clearMovie : (state) => {
            state.nowPlayingMovies = null;
        }, 
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const { 
    addNowPlayingMovie, 
    addUpcomingMovie, 
    addPopularMovie, 
    addTopRatedMovie, 
    clearMovie, 
    addTrailerVideo 
} = movieSlice.actions;

export default movieSlice.reducer;