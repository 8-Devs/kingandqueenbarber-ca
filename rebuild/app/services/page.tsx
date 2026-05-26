import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ServiceRow } from "@/components/ServiceRow";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Full price list — men's haircuts, fades, shaves, women's color, highlights, balayage, and Japanese straightening. Walk in or book online at King & Queen Barber, Brampton.",
  alternates: { canonical: "/services" },
};

const MENS = [
  { name: "Boy under 10 (Fade)",   price: "$30" },
  { name: "Men's Fade",            price: "$35" },
  { name: "Scissors Cut",          price: "$35" },
  { name: "Beard Line-Up",         price: "$20" },
  { name: "Hot-Towel Shave",       price: "$40" },
  { name: "Cut + Beard",           price: "$50" },
  { name: "Color (grey coverage)", price: "$45", note: "Call to book" },
  { name: "Black Mask",            price: "$15", note: "Call to book" },
  { name: "Perm",                  price: "$100", note: "Call to book" },
  { name: "Straightening",         price: "$100", note: "Call to book" },
];

const WOMENS = [
  { name: "Cut & Style under 10",   price: "$35",   note: "Call to book" },
  { name: "Cut & Style",            price: "$55",   note: "Call to book" },
  { name: "Root Touch-Up",          price: "$50",   note: "Call to book" },
  { name: "Shampoo & Style",        price: "$35+",  note: "Call to book" },
  { name: "Basic Color (1 color)",  price: "$120+", note: "Call to book" },
  { name: "Highlight",              price: "$180+", note: "Call to book" },
  { name: "Ombré · Balayage",       price: "$220+", note: "Call to book" },
  { name: "Japanese Straightening", price: "$250+", note: "Call to book" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-28 border-b border-ink/10">
        <Container>
          <span className="eyebrow">The menu</span>
          <h1 className="mt-5 max-w-3xl">Services &amp; pricing</h1>
          <p className="mt-6 max-w-2xl md:text-lg">
            Honest prices, no surprises. Online booking is open for most men&apos;s services;
            for color, smoothing, and women&apos;s styling please call us — it lets us reserve
            the right amount of chair time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book online
            </a>
            <a href={SITE.phoneHref} className="btn-secondary">
              Call {SITE.phone}
            </a>
          </div>
        </Container>
      </section>

      <section id="men" className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">For him</span>
              <h2 className="mt-4">Men&apos;s</h2>
              <p className="mt-4">
                Fades, scissor work, beard sculpting, and the hot-towel shave done right.
                All prices in CAD.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="card px-7 py-2">
                {MENS.map((s) => (
                  <ServiceRow key={s.name} {...s} />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="women" className="py-20 md:py-24 bg-paper-alt">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">For her</span>
              <h2 className="mt-4">Women&apos;s</h2>
              <p className="mt-4">
                Color, balayage, smoothing, styling — for everyday polish or a full reset.
                Prices marked &quot;+&quot; depend on length and density.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="card px-7 py-2">
                {WOMENS.map((s) => (
                  <ServiceRow key={s.name} {...s} />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="smoothing" className="py-20 md:py-28">
        <Container>
          <div className="rounded-3xl bg-ink text-paper p-10 md:p-16">
            <span className="eyebrow !text-gold-400">Specialty</span>
            <h2 className="mt-4 text-paper">Japanese straightening &amp; perms</h2>
            <p className="mt-5 max-w-2xl text-paper/80 md:text-lg">
              Sleek, frizz-free hair for months. These treatments require a consultation —
              give us a call and we&apos;ll walk you through the process, aftercare, and
              what to expect.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-primary">
                Call to book
              </a>
              <Link href="/contact" className="btn-secondary !border-paper/30 !text-paper hover:!bg-paper hover:!text-ink">
                Other ways to reach us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
