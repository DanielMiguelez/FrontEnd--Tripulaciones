import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestService from "./requestService";

const initialState = {
    requests: [],
    isLoading: false,
};

export const getAll = createAsyncThunk(
    "requests/getAll",
    async () => {
        try {
            return await requestService.getAll();
        } catch (error) {
            console.error(error);
        }
    }
);

export const activitySlice = createSlice({
    name: "activities",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getAllActivities.fulfilled, (state, action) => {
            state.activities = action.payload;
            state.isLoading = false
        });
        builder.addCase(getAllActivities.pending, (state, action) => {
            state.isLoading = true;
        });
    },
});

export default activitySlice.reducer;