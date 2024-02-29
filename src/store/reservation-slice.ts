import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type StoreDispatch, type StoreState } from './store';

export type Reservation = {
  seat: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
};

export type ReservationState = {
  reservations: Reservation[];
};

const initialState: ReservationState = {
  reservations: []
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation(state, action: PayloadAction<Reservation>) {
      const reservation = state.reservations.find(
        (reservation) => reservation.seat === action.payload.seat
      );
      if (!reservation) {
        state.reservations.push(action.payload);
      }
    },

    updateReservation(state, action: PayloadAction<Reservation>) {
      const reservation = state.reservations.find(
        (reservation) => reservation.seat === action.payload.seat
      );
      if (reservation) {
        reservation.firstName = action.payload.firstName;
        reservation.lastName = action.payload.lastName;
        reservation.email = action.payload.email;
      }
    },

    removeReservation(state, action: PayloadAction<string>) {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.seat !== action.payload
      );
    }
  }
});

export const { addReservation, updateReservation, removeReservation } = reservationSlice.actions;

export function reserveTicket(reservation: Reservation, callback: () => void) {
  return (dispatch: StoreDispatch) => {
    dispatch(addReservation(reservation));
    callback();
  };
}

export const reservationsSelector = (state: StoreState) => state.reservation.reservations;
export const reservationReducer = reservationSlice.reducer;
export default reservationReducer;
