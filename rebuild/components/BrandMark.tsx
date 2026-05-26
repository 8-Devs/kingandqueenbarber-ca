/**
 * Wordmark — replaces the original site's low-res JPEG logo.
 * Renders as live HTML so it stays crisp at any density and adapts to dark/light.
 */
export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  const tone = inverse ? "text-paper" : "text-ink";
  const accent = "text-gold-600";
  return (
    <span className={`inline-flex items-center gap-2 font-display leading-none ${tone}`}>
      <Crown className={accent} />
      <span className="flex flex-col">
        <span className="text-base md:text-lg font-bold tracking-wide">King &amp; Queen</span>
        <span className="text-[0.6rem] uppercase tracking-[0.32em] opacity-70">
          Barber · Beauty
        </span>
      </span>
    </span>
  );
}

function Crown({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M2 6l4 9h16l4-9-6 4-6-8-6 8-6-4z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <rect x="4" y="17" width="20" height="2.4" rx="0.6" fill="currentColor" />
    </svg>
  );
}
