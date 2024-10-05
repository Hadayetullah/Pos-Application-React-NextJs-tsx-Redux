
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


const exampleSlice = createSlice({
    name: 'example',
    initialState: {},
    reducers: {
      exampleAction: (state) => {
        // Your action logic here
      },
    },
  });


const store = configureStore({
  reducer: {
    // example: exampleSlice.reducer// Add your reducers here
  },
});

// Types for store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use dispatch with TypeScript
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
