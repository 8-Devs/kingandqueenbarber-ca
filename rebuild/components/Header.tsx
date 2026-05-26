import Link from "next/link";
import { Container } from "./Container";
import { BrandMark } from "./BrandMark";
import { SITE, NAV } from "@/lib/seo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" aria-label={`${SITE.legalName} home`}>
          <BrandMark />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-ink-muted hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden sm:inline text-sm font-medium text-ink-muted hover:text-ink"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-5 text-sm"
          >
            Book now
          </a>
        </div>
      </Container>
    </header>
  );
}
