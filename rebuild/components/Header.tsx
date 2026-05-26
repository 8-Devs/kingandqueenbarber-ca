"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { BrandMark } from "./BrandMark";
import { SITE, NAV } from "@/lib/seo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" aria-label={`${SITE.legalName} home`} onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>

        {/* Desktop nav */}
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

        {/* Right cluster: phone + book + hamburger */}
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

          {/* Hamburger toggle — visible only on mobile */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink hover:bg-ink/5 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-ink/5 bg-paper transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-4">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium tracking-wide text-ink border-b border-ink/5 last:border-b-0 hover:text-ink-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-flex items-center justify-center py-3 text-base font-medium text-ink-muted hover:text-ink"
            >
              Call {SITE.phone}
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
