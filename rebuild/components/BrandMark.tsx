import Image from "next/image";

/**
 * Brand mark — official King & Queen Barber & Beauty Salon logo.
 * Sized for header use; pass a larger className for footer/hero placement.
 *
 * Drop the PNG at /public/logo.png — Next/image references it via the
 * basePath-aware `/logo.png` path (Next prepends basePath automatically).
 */
export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-label="King & Queen Barber & Beauty Salon">
      <Image
        src="/logo.png"
        alt="King & Queen Barber & Beauty Salon"
        width={180}
        height={180}
        priority
        className={`h-12 w-auto md:h-14 ${inverse ? "" : ""}`}
      />
    </span>
  );
}
