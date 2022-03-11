import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import homePageReducer from './pages/HomePage/homePageSlice';
import authPageReducer from './pages/AuthPage/authPageSlice';

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    authPage: authPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
