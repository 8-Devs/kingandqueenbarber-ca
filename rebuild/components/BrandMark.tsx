import Image from "next/image";
import logo from "../public/KingQueenLogo.png";

/**
 * Brand mark — official King & Queen Barber & Beauty Salon logo.
 *
 * Why static import instead of `src="/logo.png"`:
 *   With `images.unoptimized: true` (required for GitHub Pages static export),
 *   next/image does NOT auto-prefix the basePath onto a string src. Static
 *   imports, however, get processed by webpack and the resulting object's src
 *   includes the basePath automatically. So this Just Works on Pages.
 */
export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-label="King & Queen Barber & Beauty Salon">
      <Image
        src={logo}
        alt="King & Queen Barber & Beauty Salon"
        priority
        placeholder="blur"
        className={`h-12 w-auto md:h-14 ${inverse ? "" : ""}`}
      />
    </span>
  );
}
