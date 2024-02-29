import { useMemo } from 'react';

export type TextInputProps = {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
};

export default function TextInput({
  type = 'text',
  label,
  value,
  onChange,
  placeholder,
  className
}: TextInputProps) {
  const id = useMemo(() => (label ? label.split(' ').join('-').toLowerCase() : undefined), [label]);

  return (
    <div className={`grid grid-cols-1 ${className}`}>
      {label ? (
        <label htmlFor={id} className="mb-1 justify-self-start text-sm font-medium">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-10 rounded-sm border border-slate-700 pl-2 text-base text-slate-950 outline-none transition-all placeholder:text-slate-950/30 focus:ring-1 focus:ring-slate-700"
      />
    </div>
  );
}
