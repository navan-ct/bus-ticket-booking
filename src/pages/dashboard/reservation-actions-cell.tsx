export type ReservationActionsCellProps = {
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onCancelClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function ReservationActionsCell({
  onEditClick,
  onCancelClick
}: ReservationActionsCellProps) {
  return (
    <div>
      <button
        className="mr-1 rounded-sm bg-amber-400 px-1.5 py-0.5 text-sm font-medium text-white"
        onClick={onEditClick}
      >
        Edit
      </button>
      <button
        className="rounded-sm bg-red-500 px-1.5 py-0.5 text-sm font-medium text-white"
        onClick={onCancelClick}
      >
        Delete
      </button>
    </div>
  );
}

export default ReservationActionsCell;
