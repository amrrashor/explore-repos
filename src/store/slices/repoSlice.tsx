import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API } from "../../utils/API";

//INITIAL STATE
const initialState = {
    repos: [],
    status: 'idle',
    error: '',
}

const fetchRepos = createAsyncThunk('repos/fetchRepos', async () => {
    const response = await axios.get(API);
    return response.data.items;
})

const repoSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state) => {
            state.status = 'loading';
            })
            .addCase(fetchRepos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.repos = action.payload;
            })
            .addCase(fetchRepos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = 'error';
            })
    }
})


export { fetchRepos }

export default repoSlice.reducer