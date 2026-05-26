import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { HoursTable } from "@/components/HoursTable";
import { SITE } from "@/lib/seo";

const SERVICE_CARDS = [
  {
    href: "/services#men",
    eyebrow: "For him",
    title: "Men's haircuts & shaves",
    blurb: "Fades, scissor cuts, beard line-ups and hot-towel shaves.",
    image: "https://kingandqueenbarber.ca/storage/category/beauty_spa-c39c8b8c1072b9c49cf45a47e2788a09.jpeg",
  },
  {
    href: "/services#women",
    eyebrow: "For her",
    title: "Color & styling",
    blurb: "Root touch-ups, full color, highlights, balayage and styling.",
    image: "https://kingandqueenbarber.ca/storage/category/beauty_spa-fc37903ee3baf952372e91c85d4e49d2.jpeg",
  },
  {
    href: "/services#smoothing",
    eyebrow: "Specialty",
    title: "Japanese straightening",
    blurb: "Sleek, frizz-free hair that lasts. Perms and smoothing treatments.",
    image: "https://kingandqueenbarber.ca/storage/category/beauty_spa-3d30d901f6b92af20e60f37138489197.jpeg",
  },
];

const GALLERY_PREVIEW = [
  "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-3b6386eb8c1193518ec471fddbf8a51e.jpeg",
  "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-637891baedbc58508bc52e2d810ee1bb.jpeg",
  "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-84e2e8ae34448560999ba39106094597.jpeg",
  "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-3ff5eb6ff82a4952e9fc1b01283817a1.jpeg",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://kingandqueenbarber.ca/storage/pages/banner-2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/65 to-ink/40" />
        </div>

        <Container className="py-28 md:py-40 text-paper">
          <span className="eyebrow !text-gold-400">Brampton · Since day one</span>
          <h1 className="mt-5 max-w-3xl text-paper">
            A sharp cut.<br />
            <span className="italic text-gold-400">A royal welcome.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/80">
            King &amp; Queen Barber &amp; Beauty Salon is Brampton&apos;s home for classic
            barbering and full-service hair care — men, women, and kids alike.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book an appointment
              <span aria-hidden>→</span>
            </a>
            <Link href="/services" className="btn-secondary !border-paper/30 !text-paper hover:!bg-paper hover:!text-ink">
              View the menu
            </Link>
          </div>
        </Container>
      </section>

      {/* INTRO / VALUE PROPS */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <span className="eyebrow">The chair is yours</span>
              <h2 className="mt-4">
                Honest barbering, in a room that<br />
                feels like a home.
              </h2>
            </div>
            <p className="md:col-span-5 md:text-lg">
              No production line, no rushed clippers. Our stylists take the time to listen,
              measure, and shape — so you walk out looking like the best version of you.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Highly trained stylists",
                body: "Seasoned hands across men's, women's, and kids' hair care — fades to balayage.",
              },
              {
                title: "Walk-ins welcome",
                body: "Open seven days a week with extended evening hours. No appointment? No problem.",
              },
              {
                title: "Calm, hygienic space",
                body: "A relaxed atmosphere with sanitized tools at every chair, every visit.",
              },
            ].map((v) => (
              <div key={v.title} className="card card-hover p-7">
                <div className="rule-gold" />
                <h3 className="mt-5">{v.title}</h3>
                <p className="mt-2">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-paper-alt">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4">Services</h2>
            </div>
            <Link href="/services" className="hidden sm:inline text-sm font-medium text-ink hover:text-gold-700">
              See the full menu →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICE_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl bg-ink text-paper shadow-card transition-all duration-300 hover:shadow-regal hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-gold-400">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-2 text-paper">{card.title}</h3>
                  <p className="mt-2 text-paper/80 text-sm">{card.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <span className="eyebrow">Work we&apos;re proud of</span>
              <h2 className="mt-4">From the chairs</h2>
            </div>
            <Link href="/gallery" className="text-sm font-medium text-ink hover:text-gold-700">
              See the full gallery →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_PREVIEW.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl bg-paper-alt"
              >
                <Image
                  src={src}
                  alt={`Cut & style ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VISIT */}
      <section className="py-20 md:py-28 bg-ink text-paper">
        <Container>
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="eyebrow !text-gold-400">Drop by</span>
              <h2 className="mt-4 text-paper">
                Find us on Sky Harbour Drive.
              </h2>
              <p className="mt-5 text-paper/75 text-lg max-w-xl">
                Easy parking, friendly chair-side conversation. We&apos;re open seven days a week.
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
                <a
                  href={SITE.phoneHref}
                  className="btn-secondary !border-paper/30 !text-paper hover:!bg-paper hover:!text-ink"
                >
                  Call {SITE.phone}
                </a>
              </div>

              <div className="mt-10 text-sm text-paper/70 space-y-1">
                <p className="font-medium text-paper">{SITE.address.street}</p>
                <p>{SITE.address.city}, {SITE.address.region} {SITE.address.postal}</p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl bg-paper text-ink p-7 shadow-regal">
                <p className="eyebrow">Opening hours</p>
                <div className="mt-4">
                  <HoursTable />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
