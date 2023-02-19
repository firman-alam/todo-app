import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isSubmited: false,
  titleForm: '',
  title: '',
  priority: 'Very High',
  isDropDownOpen: false,
  is_active: false,
  id: '',
};

export const modalFormSlice = createSlice({
  name: 'modalForm',
  initialState,
  reducers: {
    setModalForm: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setModalForm } = modalFormSlice.actions;

export default modalFormSlice.reducer;
