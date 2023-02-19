import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  isEditing: false,
};

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setTitle } = titleSlice.actions;

export default titleSlice.reducer;
