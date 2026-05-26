import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { HoursTable } from "@/components/HoursTable";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description:
    "Find King & Queen Barber & Beauty Salon at 50 Sky Harbour Dr, Unit 2, Brampton. Open seven days a week. Call (905) 230-6868 or book online.",
  alternates: { canonical: "/contact" },
};

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11551.43612433695!2d-79.7789556!3d43.6302929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1ab5210e0c53b17!2sKing%20%26%20Queen%20Barber%20and%20Beauty%20Salon!5e0!3m2!1sen!2sca!4v1658096856089!5m2!1sen!2sca";

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <span className="eyebrow">Drop in or call</span>
          <h1 className="mt-5 max-w-3xl">Let&apos;s get you in the chair.</h1>
          <p className="mt-6 max-w-2xl md:text-lg">
            We&apos;re open seven days a week. The fastest way to book most services is online;
            for color and smoothing, please call so we can plan the time properly.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7 card overflow-hidden">
              <div className="aspect-[4/3] md:aspect-[16/10]">
                <iframe
                  src={MAP_EMBED}
                  title="King & Queen Barber location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            <div className="md:col-span-5 space-y-8">
              <div className="card p-7">
                <p className="eyebrow">Visit</p>
                <p className="mt-3 font-display text-xl font-semibold text-ink">
                  {SITE.address.street}
                </p>
                <p className="text-ink-muted">
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                </p>
              </div>

              <div className="card p-7">
                <p className="eyebrow">Call</p>
                <a
                  href={SITE.phoneHref}
                  className="mt-3 inline-block font-display text-2xl font-semibold text-gold-700 hover:text-gold-600"
                >
                  {SITE.phone}
                </a>
              </div>

              <div className="card p-7">
                <p className="eyebrow">Book</p>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 btn-primary w-full"
                >
                  Open online booking
                </a>
              </div>

              <div className="card p-7">
                <p className="eyebrow">Hours</p>
                <div className="mt-4">
                  <HoursTable dense />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
