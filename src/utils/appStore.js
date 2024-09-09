import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import videoReducer from './videoSlice';
import configReducer from './configSlice';
import gptReducer from './gptSlice';

const appStore=configureStore({
    reducer:{
        user:userReducer,
        video:videoReducer,
        config:configReducer,
        gpt:gptReducer,
    }
})

export default appStore;