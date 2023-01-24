import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice'
import activities from  '../features/activities/activitySlice'

export const store = configureStore({
  reducer: {
   auth,
   activities
  
  },
});
