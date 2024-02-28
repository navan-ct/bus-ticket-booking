import useTitle from '@/hooks/use-title';

export default function ReservationPage() {
  useTitle('Reservation - Bus Ticket Booking');

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1>Reservation</h1>
    </div>
  );
}
