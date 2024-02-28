import useTitle from '@/hooks/use-title';

export default function DashboardPage() {
  useTitle('Dashboard - Bus Ticket Booking');

  return (
    <div className="flex w-full items-center justify-center">
      <h1>Dashboard</h1>
    </div>
  );
}
