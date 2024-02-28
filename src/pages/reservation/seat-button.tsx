export type SeatButtonProps = {
  seat: string;
};

export function SeatButton({ seat }: SeatButtonProps) {
  return (
    <button key={seat} className="relative rounded border-2 border-neutral-400">
      <span className="absolute bottom-2 left-2 text-sm font-medium">{seat}</span>
      <div className="absolute right-4 top-1/2 h-8 w-4 -translate-y-1/2 rounded border-2 border-neutral-400" />
    </button>
  );
}

export default SeatButton;
