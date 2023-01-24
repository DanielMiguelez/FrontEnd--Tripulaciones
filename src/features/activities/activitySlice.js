import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import activityService from "./activityService";

const initialState = {
  activities: [],
  isLoading: false,
};

export const getAllActivities = createAsyncThunk(
  "activities/getAllActivities",
  async () => {
    try {
      return await activityService.getAllActivities();
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
