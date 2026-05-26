import Link from "next/link";
import { Container } from "./Container";
import { BrandMark } from "./BrandMark";
import { SITE, NAV } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <Container className="py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandMark inverse />
          <p className="mt-5 max-w-sm text-sm text-paper/70">
            Classic barbering and modern beauty services in Brampton since day one.
            Walk in or book online — we'll take it from there.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              Book a chair
            </a>
            <a href={SITE.phoneHref} className="btn-secondary !py-2.5 !px-5 text-sm !border-paper/20 !text-paper hover:!bg-paper hover:!text-ink">
              {SITE.phone}
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Visit</p>
          <ul className="mt-4 space-y-1.5 text-sm text-paper/80">
            <li>{SITE.address.street}</li>
            <li>{SITE.address.city}, {SITE.address.region}</li>
            <li>{SITE.address.postal}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Site</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Hours</p>
          <ul className="mt-4 space-y-1.5 text-sm text-paper/80">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day.slice(0, 3)}</span>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="py-5 flex flex-wrap justify-between gap-3 text-xs text-paper/60">
          <span>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            Facebook
          </a>
        </Container>
      </div>
    </footer>
  );
}
