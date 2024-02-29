import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import ReservationFormModal from '@/components/reservation-form-modal';
import { useSelector } from '@/hooks/redux';
import useTitle from '@/hooks/use-title';
import { reservationsSelector, type Reservation } from '@/store/reservation-slice';
import CancelReservationModal from './cancel-reservation-modal';
import ReservationActionsCell from './reservation-actions-cell';

const columnHelper = createColumnHelper<Reservation>();

export default function DashboardPage() {
  useTitle('Dashboard - Bus Ticket Booking');

  const reservations = useSelector(reservationsSelector);

  const [seatToEdit, setSeatToEdit] = useState<string | null>(null);
  const [seatToCancel, setSeatToCancel] = useState<string | null>(null);

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
        id: 'name',
        header: 'Name'
      }),
      columnHelper.accessor('email', {
        id: 'email',
        header: 'Email Address'
      }),
      columnHelper.accessor('seat', {
        id: 'seat',
        header: 'Seat Number'
      }),
      columnHelper.accessor(
        (row) => {
          return new Intl.DateTimeFormat(undefined, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }).format(new Date(row.date));
        },
        {
          id: 'date',
          header: 'Date of Booking'
        }
      ),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: (props) => (
          <ReservationActionsCell
            onEditClick={() => {
              setSeatToCancel(null);
              setSeatToEdit(props.row.original.seat);
            }}
            onCancelClick={() => {
              setSeatToEdit(null);
              setSeatToCancel(props.row.original.seat);
            }}
          />
        )
      })
    ],
    []
  );

  const table = useReactTable({
    columns,
    data: reservations,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="flex w-full flex-col items-center justify-center pb-16 pt-6">
      <ReservationFormModal isEdit seat={seatToEdit} onClose={() => setSeatToEdit(null)} />
      <CancelReservationModal seat={seatToCancel} onClose={() => setSeatToCancel(null)} />

      <h2 className="mb-0.5 ml-8 self-start text-xs font-semibold uppercase">Reservations</h2>
      <div className="w-[calc(100%-4rem)] overflow-hidden rounded border border-slate-200 bg-white">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-slate-200">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-3 py-2.5 text-left text-base font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-200 last:border-b-0">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3 py-2.5 text-base">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
