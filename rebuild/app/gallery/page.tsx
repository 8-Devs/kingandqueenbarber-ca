import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A portfolio of recent work from King & Queen Barber & Beauty Salon — men's fades, women's color and highlights, smoothing treatments, and full styling.",
  alternates: { canonical: "/gallery" },
};

const PHOTOS = [
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-3b6386eb8c1193518ec471fddbf8a51e.jpeg", alt: "Tapered men's fade with sharp line-up" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-637891baedbc58508bc52e2d810ee1bb.jpeg", alt: "Textured crop with beard sculpt" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-84e2e8ae34448560999ba39106094597.jpeg", alt: "Classic skin fade" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-3ff5eb6ff82a4952e9fc1b01283817a1.jpeg", alt: "Scissor cut and finish" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-ee8dd966ce58da7585037857bb27583d.jpeg", alt: "Hot-towel shave detail" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-fb8bb96c240938ee3fa34172dda7c6ba.jpeg", alt: "Modern fade with hard part" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-fbe3a720fc0193663160d19220b72ce2.jpeg", alt: "Beard line-up and trim" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-8dc8cca8f34a338d4e4faa0b8f4b121b.jpeg", alt: "Kids' fade" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-38a4f72e5c10225b3b1d5f3c19abf5e2.jpeg", alt: "Style finish" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-f5ab8f989cb21d7fce243db08a597c7e.jpeg", alt: "Color and balayage" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-d60c9706000d0225f868c67d1d5ee5b0.jpeg", alt: "Smooth, straightened hair" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-628e040bb6fb9b86f50b3d48d55d8625.jpeg", alt: "Women's cut and style" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-679f68d7db3d19f633c601b578ae6954.jpeg", alt: "Highlight detail" },
  { src: "https://kingandqueenbarber.ca/storage/portfolios/beauty_spa-0296281009f86319b494a4f0c9ee7bc4.jpeg", alt: "Full-color transformation" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-5 max-w-3xl">A few of our favorites.</h1>
          <p className="mt-6 max-w-2xl md:text-lg">
            Real work from our chairs in Brampton — fades, beard sculpting, color, balayage,
            and full styling.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PHOTOS.map((p, i) => (
              <div
                key={p.src}
                className={`relative overflow-hidden rounded-xl bg-paper-alt ${
                  i % 7 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-ink text-paper p-10 md:p-14 text-center">
            <h2 className="text-paper">Want a look like one of these?</h2>
            <p className="mt-4 text-paper/75 max-w-lg mx-auto">
              Bring a screenshot, walk us through it, and we&apos;ll take it from there.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book an appointment
              </a>
              <Link href="/services" className="btn-secondary !border-paper/30 !text-paper hover:!bg-paper hover:!text-ink">
                See pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
