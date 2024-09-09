import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        movieNames:null,
        movieData:null,
    },
    reducers:{
        setMovies:(state,action)=>{
            const {movieNames,movieData}=action.payload;
            state.movieNames=movieNames;
            state.movieData=movieData;
        },
    },
})

export const {setMovies}=gptSlice.actions;
export default gptSlice.reducer;