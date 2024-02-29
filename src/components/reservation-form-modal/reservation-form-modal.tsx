import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import Button from '@/components/button';
import TextInput from '@/components/text-input';
import { useDispatch, useSelector } from '@/hooks/redux';
import {
  reservationsSelector,
  reserveTicket,
  updateReservationDetails
} from '@/store/reservation-slice';

export type ReservationFormModalProps = {
  isEdit?: boolean;
  seat: string | null;
  onClose: () => void;
};

export default function ReservationFormModal({ isEdit, seat, onClose }: ReservationFormModalProps) {
  const dispatch = useDispatch();

  const reservations = useSelector(reservationsSelector);

  const [deferredSeat, setDeferredSeat] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    let id: NodeJS.Timeout | null = null;

    if (seat) {
      setDeferredSeat(seat);
    } else {
      id = setTimeout(() => {
        setDeferredSeat(null);
        setFirstName('');
        setLastName('');
        setEmail('');
      }, 200);
    }

    return () => {
      if (id) {
        clearTimeout(id);
        id = null;
      }
    };
  }, [seat]);

  useEffect(() => {
    if (seat && isEdit) {
      const reservation = reservations.find((reservation) => reservation.seat === seat);
      if (reservation) {
        setFirstName(reservation.firstName);
        setLastName(reservation.lastName);
        setEmail(reservation.email);
        setDate(reservation.date);
      }
    }
  }, [seat, isEdit, reservations]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const reservation = {
      seat: seat!,
      firstName,
      lastName,
      email,
      date: isEdit ? date : new Date().toISOString()
    };
    dispatch(
      isEdit ? updateReservationDetails(reservation, onClose) : reserveTicket(reservation, onClose)
    );
  }

  return (
    <ReactModal
      isOpen={seat !== null}
      onRequestClose={onClose}
      closeTimeoutMS={150}
      ariaHideApp={false}
      portalClassName="ReactModalPortal relative z-40 overflow-hidden text-slate-950"
      overlayClassName="fixed inset-0 bg-slate-950/40"
      className="absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-auto rounded bg-white px-6 pb-6 pt-5 outline-none"
    >
      <h3 className="mb-7 flex items-center text-2xl font-semibold">
        <span
          className={clsx(
            'mr-2.5 inline-block rounded px-2 py-[0.3125rem] text-xl leading-none text-white',
            {
              'bg-amber-400': isEdit,
              'bg-green-600': !isEdit
            }
          )}
        >
          {seat || deferredSeat}
        </span>
        <span>{isEdit ? 'Edit Reservation' : 'Reserve Ticket'}</span>
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-2 gap-x-4">
          <TextInput
            label="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="John"
            required
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Doe"
            required
          />
        </div>

        <TextInput
          type="email"
          label="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mb-6"
          placeholder="johndoe@example.com"
          required
        />

        <div className="flex justify-end gap-x-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{isEdit ? 'Update' : 'Reserve'}</Button>
        </div>
      </form>
    </ReactModal>
  );
}
