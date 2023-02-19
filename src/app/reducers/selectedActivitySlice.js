import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Activity',
  todo_items: [],
};

export const selectedActivitySlice = createSlice({
  name: 'selectedActivity',
  initialState,
  reducers: {
    setSelectedActivity: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setSelectedActivity } = selectedActivitySlice.actions;

export default selectedActivitySlice.reducer;
