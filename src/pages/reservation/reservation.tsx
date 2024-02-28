import useTitle from '@/hooks/use-title';
import getSeats from './get-seats';
import SeatButton from './seat-button';
import SteeringIcon from './steering-icon';

const { lowerDeckSeats, upperDeckSeats } = getSeats();

export default function ReservationPage() {
  useTitle('Reservation - Bus Ticket Booking');

  return (
    <div className="flex w-full flex-col items-center justify-center pb-12 pt-8">
      <h2 className="mb-0.5 ml-8 self-start text-xs font-semibold uppercase">Lower Deck</h2>
      <div className="mb-6 flex aspect-[3] w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-6">
        <div className="mr-4 flex h-full w-[10%] items-start justify-end border-r-2 border-slate-400">
          <SteeringIcon className="mr-4 aspect-square w-4/5 -rotate-90 fill-slate-800" />
        </div>

        <div className="mr-4 grid flex-shrink-0 flex-grow grid-cols-6 grid-rows-4 gap-4">
          {lowerDeckSeats.map((seat, i) =>
            seat ? <SeatButton key={seat} seat={seat} /> : <div key={i} />
          )}
        </div>

        <div className="grid w-[10%] flex-shrink-0 grid-cols-1 grid-rows-2 gap-4">
          <SeatButton key="L19" seat="L19" />
          <SeatButton key="L20" seat="L20" />
        </div>
      </div>

      <h2 className="mb-0.5 ml-8 self-start text-xs font-semibold uppercase">Upper Deck</h2>
      <div className="flex aspect-[3] w-[calc(100%-4rem)] rounded border border-slate-200 bg-white p-6">
        <div className="mr-4 h-full w-[10%]"></div>

        <div className="mr-4 grid flex-shrink-0 flex-grow grid-cols-6 grid-rows-4 gap-4">
          {upperDeckSeats.map((seat, i) =>
            seat ? <SeatButton key={seat} seat={seat} /> : <div key={i} />
          )}
        </div>

        <div className="grid w-[10%] flex-shrink-0 grid-cols-1 grid-rows-2 gap-4">
          <SeatButton key="U19" seat="U19" />
          <SeatButton key="U20" seat="U20" />
        </div>
      </div>
    </div>
  );
}
