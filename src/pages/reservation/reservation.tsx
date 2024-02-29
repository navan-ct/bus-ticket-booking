import { useMemo, useState } from 'react';

import ReservationFormModal from '@/components/reservation-form-modal';
import { useSelector } from '@/hooks/redux';
import { reservationsSelector } from '@/store/reservation-slice';
import useTitle from '@/hooks/use-title';
import getSeats from './get-seats';
import SeatButton from './seat-button';
import SteeringIcon from './steering-icon';

const { lowerDeckSeats, upperDeckSeats } = getSeats();

export default function ReservationPage() {
  useTitle('Reservation - Bus Ticket Booking');

  const reservations = useSelector(reservationsSelector);

  const bookedSeatsMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const reservation of reservations) {
      map[reservation.seat] = true;
    }
    return map;
  }, [reservations]);

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  return (
    <div className="flex w-full flex-col items-center justify-center pb-16 pt-6">
      <ReservationFormModal seat={selectedSeat} onClose={() => setSelectedSeat(null)} />

      <h2 className="mb-0.5 ml-8 self-start text-xs font-semibold uppercase">Lower Deck</h2>
      <div className="mb-6 flex aspect-[3] w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-6">
        <div className="mr-6 flex h-full w-[calc(11%-0.5rem)] items-start justify-end border-r border-slate-400">
          <SteeringIcon className="mr-4 aspect-square w-[71%] -rotate-90 fill-slate-800" />
        </div>

        <div className="mr-4 grid flex-shrink-0 flex-grow grid-cols-6 grid-rows-4 gap-4">
          {lowerDeckSeats.map((seat, i) =>
            seat ? (
              <SeatButton
                key={seat}
                seat={seat}
                onClick={() => setSelectedSeat(seat)}
                isBooked={bookedSeatsMap[seat]}
              />
            ) : (
              <div key={i} />
            )
          )}
        </div>

        <div className="grid w-[9%] flex-shrink-0 grid-cols-1 grid-rows-2 gap-4">
          <SeatButton
            key="L19"
            seat="L19"
            onClick={() => setSelectedSeat('L19')}
            isBooked={bookedSeatsMap['L19']}
          />
          <SeatButton
            key="L20"
            seat="L20"
            onClick={() => setSelectedSeat('L20')}
            isBooked={bookedSeatsMap['L20']}
          />
        </div>
      </div>

      <h2 className="mb-0.5 ml-8 self-start text-xs font-semibold uppercase">Upper Deck</h2>
      <div className="flex aspect-[3] w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-6">
        <div className="mr-6 flex h-full w-[calc(11%-0.5rem)]"></div>

        <div className="mr-4 grid flex-shrink-0 flex-grow grid-cols-6 grid-rows-4 gap-4">
          {upperDeckSeats.map((seat, i) =>
            seat ? (
              <SeatButton
                key={seat}
                seat={seat}
                onClick={() => setSelectedSeat(seat)}
                isBooked={bookedSeatsMap[seat]}
              />
            ) : (
              <div key={i} />
            )
          )}
        </div>

        <div className="grid w-[9%] flex-shrink-0 grid-cols-1 grid-rows-2 gap-4">
          <SeatButton
            key="U19"
            seat="U19"
            onClick={() => setSelectedSeat('U19')}
            isBooked={bookedSeatsMap['U19']}
          />
          <SeatButton
            key="U20"
            seat="U20"
            onClick={() => setSelectedSeat('U20')}
            isBooked={bookedSeatsMap['U20']}
          />
        </div>
      </div>
    </div>
  );
}
