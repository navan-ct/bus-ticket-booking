import useTitle from '@/hooks/use-title';

export default function ErrorPage() {
  useTitle('Error - Bus Ticket Booking');

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1>Error</h1>
    </div>
  );
}
