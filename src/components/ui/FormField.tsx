import type { ChangeEvent } from "react";

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  hint?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  as?: "input" | "textarea";
};

export function FormField({
  id,
  name,
  label,
  value,
  onChange,
  error,
  hint,
  type = "text",
  autoComplete,
  required,
  as = "input",
}: FormFieldProps) {
  const describedBy =
    [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") ||
    undefined;
  const className =
    "rounded-md border border-navy/20 bg-white px-3 py-2 text-sm text-navy outline-none ring-copper/40 focus:border-teal focus:ring-2";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`min-h-32 ${className}`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={className}
        />
      )}
      {hint ? (
        <p id={`${id}-hint`} className="text-xs text-steel">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-copper">
          {error}
        </p>
      ) : null}
    </div>
  );
}
