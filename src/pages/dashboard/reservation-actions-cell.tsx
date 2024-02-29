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
      <button onClick={onEditClick}>Edit</button>
      <button onClick={onCancelClick}>Delete</button>
    </div>
  );
}

export default ReservationActionsCell;
