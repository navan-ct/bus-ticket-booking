import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-14 w-full items-center border-b border-neutral-200 bg-white px-4">
      <Link to="/">
        <h1 title="Bus Ticket Booking" className="flex text-2xl font-bold text-neutral-800">
          <span className="rotate-180">B</span>
          <span className="-ml-1">T</span>
          <span className="-ml-1">B</span>
        </h1>
      </Link>
    </header>
  );
}
