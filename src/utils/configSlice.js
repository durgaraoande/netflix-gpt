import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        gptSearch:false,
        onlineStatus:true,
        moviePage:false,
        movieDetails:false,
    },
    reducers:{
        setToggleGptSearch(state,action){
            state.gptSearch=!state.gptSearch;
        },
        addOnlineStatus(state,action){
            state.onlineStatus=action.payload
        },
        addMoviePage(state,action){
            state.moviePage=action.payload
        },
        addMovieDetails(state,action){
            state.movieDetails=!state.movieDetails;
        }
    }
})

export const {setToggleGptSearch,addOnlineStatus,addMoviePage,addMovieDetails}=configSlice.actions;

export default configSlice.reducer;