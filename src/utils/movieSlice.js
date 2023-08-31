import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null
    },
    reducers : {
        addMovie : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        clearMovie : (state) => {
            state.nowPlayingMovies = null;
        }, 
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const { addMovie, clearMovie, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;