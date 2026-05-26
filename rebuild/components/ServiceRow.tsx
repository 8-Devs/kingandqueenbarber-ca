export function ServiceRow({
  name,
  price,
  note,
}: {
  name: string;
  price: string;
  note?: string;
}) {
  return (
    <li className="group flex items-baseline gap-3 py-4 border-b border-ink/10 last:border-b-0">
      <span className="font-medium text-ink">{name}</span>
      <span
        aria-hidden
        className="flex-1 border-b border-dotted border-ink/20 translate-y-[-3px]"
      />
      <span className="font-display text-lg font-semibold text-gold-700 tabular-nums">
        {price}
      </span>
      {note && (
        <span className="ml-3 text-xs uppercase tracking-wide text-ink-soft">{note}</span>
      )}
    </li>
  );
}
