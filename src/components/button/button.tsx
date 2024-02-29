import clsx from 'clsx';

export type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  variant?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  type,
  variant = 'primary',
  onClick,
  className,
  children
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'h-9 justify-self-end rounded border px-6 text-base font-medium',
        {
          'border-slate-700 bg-slate-700 text-white': variant === 'primary',
          'border-slate-300 bg-slate-100 text-slate-950': variant === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  );
}
