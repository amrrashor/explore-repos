import { configureStore } from "@reduxjs/toolkit";
import repoReducer from './slices/repoSlice';

const store = configureStore({
    reducer: {
        repos: repoReducer
    }
})



export default store