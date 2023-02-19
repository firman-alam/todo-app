import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from './api/apiSlice';

import activityReducer from './reducers/activitySlice';
import modalAlertReducer from './reducers/modalAlertSlice';
import modalFormReducer from './reducers/modalFormSlice';
import selectedActivityReducer from './reducers/selectedActivitySlice';
import sortOptionsReducer from './reducers/sortOptionsSlice';
import titleReducer from './reducers/titleSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    activity: activityReducer,
    modalAlert: modalAlertReducer,
    modalForm: modalFormReducer,
    selectedActivity: selectedActivityReducer,
    sortOption: sortOptionsReducer,
    title: titleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
