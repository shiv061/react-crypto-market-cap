import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cryptoReducer from '../services/cryptoSlice';
import { cryptoApi } from '../services/api';

export const store = configureStore({
  reducer: {
    cryptoReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cryptoApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
