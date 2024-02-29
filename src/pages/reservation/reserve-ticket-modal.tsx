import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import Button from '@/components/button';
import TextInput from '@/components/text-input';

export type ReserveTicketModalProps = {
  seat: string | null;
  onClose: () => void;
};

export function ReserveTicketModal({ seat, onClose }: ReserveTicketModalProps) {
  const [deferredSeat, setDeferredSeat] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const id = setTimeout(() => setDeferredSeat(seat), 200);
    return () => clearTimeout(id);
  }, [seat]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <ReactModal
      isOpen={seat !== null}
      onRequestClose={onClose}
      closeTimeoutMS={150}
      portalClassName="ReactModalPortal relative z-40 text-slate-950"
      overlayClassName="fixed inset-0 bg-slate-950/40"
      className="absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-auto rounded bg-white px-6 pb-6 pt-5 outline-none"
    >
      <h3 className="mb-7 flex items-center text-2xl font-semibold">
        <span className="mr-2.5 inline-block rounded bg-green-600 px-2 py-[0.3125rem] text-xl leading-none text-white">
          {seat || deferredSeat}
        </span>
        <span>Reserve Ticket</span>
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-2 gap-x-4">
          <TextInput
            label="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="John"
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Doe"
          />
        </div>

        <TextInput
          type="email"
          label="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mb-6"
          placeholder="johndoe@example.com"
        />

        <div className="flex justify-end gap-x-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Reserve</Button>
        </div>
      </form>
    </ReactModal>
  );
}

export default ReserveTicketModal;
