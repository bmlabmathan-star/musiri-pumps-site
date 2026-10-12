type EmptyStateProps = {
  title: string;
  message: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-navy/20 bg-white px-6 py-12 text-center">
      <p className="font-serif text-xl text-navy">{title}</p>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-steel">{message}</p>
    </div>
  );
}
