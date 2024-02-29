export type SeatButtonProps = {
  seat: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isBooked?: boolean;
};

export function SeatButton({ seat, onClick, isBooked = false }: SeatButtonProps) {
  return (
    <button
      key={seat}
      onClick={onClick}
      disabled={isBooked}
      className="relative rounded border-2 border-neutral-400 disabled:cursor-default disabled:bg-slate-200"
    >
      <span className="absolute bottom-2 left-2 text-sm font-medium">{seat}</span>
      <div className="absolute right-2 top-1/2 h-full max-h-8 w-full max-w-4 -translate-y-1/2 rounded border-2 border-neutral-400" />
    </button>
  );
}

export default SeatButton;
