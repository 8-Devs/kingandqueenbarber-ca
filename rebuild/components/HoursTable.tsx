import { SITE } from "@/lib/seo";

export function HoursTable({ dense = false }: { dense?: boolean }) {
  return (
    <ul className={`divide-y divide-ink/10 ${dense ? "text-sm" : ""}`}>
      {SITE.hours.map((h) => (
        <li key={h.day} className="flex items-center justify-between py-2.5">
          <span className="font-medium text-ink">{h.day}</span>
          <span className="text-ink-muted tabular-nums">{h.label}</span>
        </li>
      ))}
    </ul>
  );
}
