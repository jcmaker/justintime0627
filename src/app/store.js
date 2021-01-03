import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import timeReducer from "../features/timeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    time: timeReducer,
  },
});
