import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "King & Queen Barber & Beauty Salon is a family-friendly Brampton hair destination offering men's, women's, and kids' services in a calm, welcoming room.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <span className="eyebrow">About</span>
          <h1 className="mt-5 max-w-3xl">
            Not just a salon — a place to <em className="text-gold-700 not-italic font-display">feel taken care of</em>.
          </h1>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 items-start">
            <div className="md:col-span-7 space-y-6 md:text-lg">
              <p>
                King &amp; Queen Barber &amp; Beauty Salon is a Brampton hair destination for
                women, men, and kids — built around the idea that a haircut should feel as
                good as it looks.
              </p>
              <p>
                We specialize in classic barbering and modern beauty services in equal measure.
                Whether you&apos;re after a sharp fade, a hot-towel shave, fresh color, or a
                full smoothing treatment, our stylists take the time to understand what you
                want before the first snip.
              </p>
              <p>
                The room is calm. The tools are sanitized. The conversation is warm. And our
                drive — every day — is the passion we bring to the chair.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book your visit
                </a>
                <Link href="/services" className="btn-secondary">
                  See the service menu
                </Link>
              </div>
            </div>

            <aside className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="https://kingandqueenbarber.ca/storage/pages/banner-4.jpg"
                  alt="Inside King & Queen Barber & Beauty Salon"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </aside>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {[
              { stat: "7",         label: "Days a week we’re open" },
              { stat: "All ages",  label: "Men, women, kids"       },
              { stat: "Walk-ins",  label: "No appointment needed"  },
            ].map((s) => (
              <div key={s.label} className="card p-7">
                <p className="font-display text-4xl font-bold text-gold-700">{s.stat}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
