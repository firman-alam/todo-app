import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  sortBy: '',
};

export const sortOptionSlice = createSlice({
  name: 'sortOption',
  initialState,
  reducers: {
    setSort: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setSort } = sortOptionSlice.actions;

export default sortOptionSlice.reducer;
