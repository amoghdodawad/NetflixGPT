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
        addGptMovieResults : (state,action) => {
            const {gptMoviesTitle, gptMoviesDetails} = action.payload;
            state.gptMoviesTitle = gptMoviesTitle;
            state.gptMoviesDetails = gptMoviesDetails;
        }
    }
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
