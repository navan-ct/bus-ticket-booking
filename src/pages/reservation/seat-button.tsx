export type SeatButtonProps = {
  seat: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function SeatButton({ seat, onClick }: SeatButtonProps) {
  return (
    <button key={seat} onClick={onClick} className="relative rounded border-2 border-neutral-400">
      <span className="absolute bottom-2 left-2 text-sm font-medium">{seat}</span>
      <div className="absolute right-2 top-1/2 h-8 w-4 -translate-y-1/2 rounded border-2 border-neutral-400" />
    </button>
  );
}

export default SeatButton;
