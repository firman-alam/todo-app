import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: null,
  isOpen: false,
  isDeleteComplete: false,
  type: null,
  id: null,
};

export const modalSlice = createSlice({
  name: 'modalAlert',
  initialState,
  reducers: {
    setModalAlert: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setModalAlert } = modalSlice.actions;

export default modalSlice.reducer;
