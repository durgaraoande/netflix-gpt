import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import videoReducer from './videoSlice';

const appStore=configureStore({
    reducer:{
        user:userReducer,
        video:videoReducer,
    }
})

export default appStore;