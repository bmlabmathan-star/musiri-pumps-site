type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-end overflow-hidden bg-[linear-gradient(135deg,#0b3142_0%,#1a6b7a_55%,#8aa8b0_100%)] ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 160 120"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="118" cy="28" r="34" stroke="white" strokeWidth="2" />
        <rect x="18" y="48" width="72" height="42" rx="4" stroke="white" strokeWidth="2" />
        <path d="M34 48 V36 H74 V48" stroke="white" strokeWidth="2" />
      </svg>
      <p className="relative m-3 rounded bg-navy/80 px-2 py-1 text-xs leading-4 text-white">
        {label}
      </p>
    </div>
  );
}
