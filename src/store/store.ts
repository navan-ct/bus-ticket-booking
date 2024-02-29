import { configureStore } from '@reduxjs/toolkit';

import reservationReducer from './reservation-slice';

const store = configureStore({
  reducer: {
    reservation: reservationReducer
  }
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export default store;
