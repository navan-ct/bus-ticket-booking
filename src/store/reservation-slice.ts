import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import store, { type StoreDispatch, type StoreState } from './store';

export type Reservation = {
  seat: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
};

function getReservationsFromStore() {
  let reservations: Reservation[];
  const json = localStorage.getItem('reservations');
  try {
    if (!json) {
      throw new Error();
    }
    reservations = JSON.parse(json);
  } catch {
    reservations = [];
  }
  return reservations;
}

export type ReservationState = {
  reservations: Reservation[];
};

const initialState: ReservationState = {
  reservations: getReservationsFromStore()
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
  return (dispatch: StoreDispatch, getState: typeof store.getState) => {
    dispatch(addReservation(reservation));
    const state = getState();
    localStorage.setItem('reservations', JSON.stringify(state.reservation.reservations));
    callback();
  };
}

export function updateReservationDetails(reservation: Reservation, callback: () => void) {
  return (dispatch: StoreDispatch, getState: typeof store.getState) => {
    dispatch(updateReservation(reservation));
    const state = getState();
    localStorage.setItem('reservations', JSON.stringify(state.reservation.reservations));
    callback();
  };
}

export function cancelReservation(seat: string, callback: () => void) {
  return (dispatch: StoreDispatch, getState: typeof store.getState) => {
    dispatch(removeReservation(seat));
    const state = getState();
    localStorage.setItem('reservations', JSON.stringify(state.reservation.reservations));
    callback();
  };
}

export const reservationsSelector = (state: StoreState) => state.reservation.reservations;
export const reservationReducer = reservationSlice.reducer;
export default reservationReducer;
