import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        gptMoviesDetails : null,
        gptMoviesTitle : null
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        clearGptPageBeforeLogOut : (state) => {
            state.showGptSearch = false;
            state.gptMoviesDetails = null;
            state.gptMoviesTitle = null;
        },
        addGptMovieResults : (state,action) => {
            const {gptMoviesTitle, gptMoviesDetails} = action.payload;
            state.gptMoviesTitle = gptMoviesTitle;
            state.gptMoviesDetails = gptMoviesDetails;
        }
    }
});

export const { toggleGptSearchView, addGptMovieResults, clearGptPageBeforeLogOut } = gptSlice.actions;
export default gptSlice.reducer;
