import { createSlice } from "@reduxjs/toolkit";

export const timeSlice = createSlice({
  name: "time",
  initialState: {
    selectedTime: null,
  },
  reducers: {
    selectTime: (state, action) => {
      state.selectedTime = action.payload;
    },
  },
});

export const { selectTime } = timeSlice.actions;

export const selectOpenTime = (state) => state.time.selectedTime;

export default timeSlice.reducer;
