/**
 * Site-wide constants for King & Queen Barber & Beauty Salon.
 * Pulled from the original site's NAP/hours/booking — kept canonical here.
 */
export const SITE = {
  name: "King & Queen Barber",
  legalName: "King & Queen Barber & Beauty Salon",
  title: "King & Queen Barber & Beauty Salon — Brampton",
  description:
    "Classic barbering, modern cuts, and full beauty services in Brampton. Men's fades, hot-towel shaves, women's color, highlights, and Japanese straightening. Walk in or book online.",
  baseUrl: "https://kingandqueenbarber.ca",

  phone: "(905) 230-6868",
  phoneHref: "tel:+19052306868",

  address: {
    street: "50 Sky Harbour Dr, Unit 2",
    city: "Brampton",
    region: "ON",
    postal: "L6Y 6G9",
    country: "CA",
  },

  bookingUrl: "https://bellebooking.com/center/5227e5909d9d27c6ebbea1f84b47901b",
  facebookUrl: "https://www.facebook.com/kingqueen.barber.1",

  // Geo (from original Google Maps embed)
  geo: { lat: 43.6302929, lng: -79.7789556 },

  hours: [
    { day: "Monday",       open: "10:00", close: "20:00", label: "10:00 am – 8:00 pm" },
    { day: "Tuesday",      open: "14:00", close: "20:00", label: "2:00 pm – 8:00 pm"  },
    { day: "Wednesday",    open: "10:00", close: "20:00", label: "10:00 am – 8:00 pm" },
    { day: "Thursday",     open: "10:00", close: "20:00", label: "10:00 am – 8:00 pm" },
    { day: "Friday",       open: "10:00", close: "20:00", label: "10:00 am – 8:00 pm" },
    { day: "Saturday",     open: "09:00", close: "19:00", label: "9:00 am – 7:00 pm"  },
    { day: "Sunday",       open: "10:00", close: "18:00", label: "10:00 am – 6:00 pm" },
  ],
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery"  },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
] as const;

/**
 * LocalBusiness JSON-LD — gives Google the rich snippet (hours, map, phone).
 * Rendered in app/layout.tsx <head>.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: SITE.legalName,
    image: `${SITE.baseUrl}/og.png`,
    url: SITE.baseUrl,
    telephone: SITE.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: SITE.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [SITE.facebookUrl],
  };
}
