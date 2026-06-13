import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroEmbers from "@/assets/hero-embers.jpg";
import heroPlatter from "@/assets/hero-platter.jpg";
import legacyImg from "@/assets/legacy.jpg";
import fireImg from "@/assets/fire-experience.jpg";
import chefImg from "@/assets/chef.jpg";
import privateDining from "@/assets/private-dining.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishKulcha from "@/assets/dish-kulcha.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import logoAsset from "@/assets/wahh-punjab-logo.jpg.asset.json";

const LOGO = logoAsset.url;

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Wahh Punjab Grandeur",
  image: [LOGO],
  logo: LOGO,
  telephone: "+91-98100-00000",
  priceRange: "₹₹₹₹",
  servesCuisine: ["Punjabi", "North Indian", "Fine Dining"],
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: "The Royal Pavilion, Lutyens' Quarter",
    addressLocality: "New Delhi",
    postalCode: "110001",
    addressRegion: "DL",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.6139, longitude: 77.209 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "19:00", closes: "23:30",
  }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2147" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I reserve a table at Wahh Punjab in Delhi?",
      acceptedAnswer: { "@type": "Answer", text: "Reserve through our concierge form or call +91 98100 00000. Prime dining hours fill rapidly — we recommend booking 5–7 days in advance." } },
    { "@type": "Question", name: "Is Wahh Punjab the best Punjabi fine dining restaurant in Delhi?",
      acceptedAnswer: { "@type": "Answer", text: "Wahh Punjab Grandeur is recognised across Conde Nast Traveller, Forbes Travel and the Michelin Guide as a leading luxury Punjabi fine dining destination in Delhi NCR." } },
    { "@type": "Question", name: "Do you offer private dining for anniversaries and corporate events?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — our private dining room seats ten beneath a hand-cast brass chandelier, with a bespoke twelve-course menu authored by Chef Amrit Singh." } },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wahh Punjab Grandeur — Luxury Punjabi Fine Dining in Delhi" },
      { name: "description", content: "Wahh Punjab Grandeur — Delhi's most celebrated luxury Punjabi fine dining destination. Heritage fire, world-class hospitality, private dining for anniversaries & corporate evenings. Reserve your table." },
      { name: "keywords", content: "Best Punjabi Restaurant Delhi, Luxury Punjabi Restaurant Delhi, Fine Dining Delhi, Private Dining Delhi, Best Butter Chicken Delhi, Best Dal Makhani Delhi, Anniversary Restaurant Delhi, Punjabi Fine Dining Delhi NCR" },
      { property: "og:title", content: "Wahh Punjab Grandeur — Luxury Punjabi Fine Dining in Delhi" },
      { property: "og:description", content: "A cinematic luxury Punjabi fine dining destination. Reserve your table." },
      { property: "og:type", content: "restaurant" },
      { property: "og:image", content: heroPlatter },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroPlatter },
      { name: "theme-color", content: "#0a0807" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Index,
});

/* ---------- Reusable atoms ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 eyebrow">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}

function EmberField() {
  // Deterministic positions to avoid hydration mismatch
  const particles = Array.from({ length: 28 }, (_, i) => {
    const left = (i * 37) % 100;
    const delay = (i * 0.7) % 12;
    const duration = 10 + (i % 7);
    const size = 1.5 + (i % 4) * 0.6;
    return { left, delay, duration, size };
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="ember-particle"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="mx-auto flex max-w-md items-center gap-4 py-16">
      <div className="h-px flex-1 hairline-gold opacity-50" />
      <span className="text-gold/70 text-xs tracking-[0.5em]">✦</span>
      <div className="h-px flex-1 hairline-gold opacity-50" />
    </div>
  );
}

/* ---------- Data ---------- */

const dishes = [
  {
    name: "Dal Sultan-e-Khaas",
    tagline: "The Sovereign of Slow Fire",
    desc: "Black urad simmered forty-eight hours over cured charcoal, finished with cultured cream and a single leaf of twenty-four karat gold.",
    price: "₹1,250",
    badge: "Chef's Signature",
    img: dishDal,
  },
  {
    name: "Truffle Ghee Kulcha",
    tagline: "Hearth, Truffle, Heritage",
    desc: "Hand-stretched dough kissed by the tandoor, crowned with cultured ghee and shaved Italian black winter truffle.",
    price: "₹850",
    badge: "Most Loved",
    img: dishKulcha,
  },
  {
    name: "Zaffrani Parda Biryani",
    tagline: "Sealed in Saffron, Broken Tableside",
    desc: "Aged basmati layered with Kashmiri saffron and braised goat shoulder. Concealed beneath a golden dough crown — broken before you.",
    price: "₹2,400",
    badge: "House Royal",
    img: dishBiryani,
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    place: "London · Restaurateur",
    quote:
      "The most cinematic two hours I've spent at any table this decade. Every plate arrived like a chapter.",
    initials: "AM",
  },
  {
    name: "Isabella Conti",
    place: "Milan · Vogue Italia",
    quote:
      "An editorial in food. The lighting, the silence between courses, the warmth of the staff — it is theatre.",
    initials: "IC",
  },
  {
    name: "Vikram Singh",
    place: "Dubai · Hotelier",
    quote:
      "I have eaten in every major capital. Wahh Punjab Grandeur is now my standard for what hospitality means.",
    initials: "VS",
  },
];

const awards = [
  "Conde Nast Traveller — Hot List 2024",
  "Michelin Guide — Recommended",
  "The World's 50 Best — Discovery",
  "Robb Report — Editor's Choice",
  "Forbes Travel — Five Star",
  "Wallpaper* — Best of the Year",
];

const galleryImages = [
  { src: gal1, alt: "Saffron sparkling wine with gold leaf" },
  { src: dishBiryani, alt: "Saffron biryani in copper handi" },
  { src: gal2, alt: "Hands kneading dough with flour dust" },
  { src: gal3, alt: "Tandoori prawns with gold leaf" },
  { src: dishKulcha, alt: "Truffle ghee kulcha on black marble" },
  { src: gal4, alt: "Saffron broth poured tableside" },
];

/* ---------- Page ---------- */

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(17);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Subtle real-time-style decay
    const t = setInterval(() => {
      setSeatsLeft((n) => (n > 9 ? n - (Math.random() > 0.7 ? 1 : 0) : n));
    }, 14000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      {/* ===== Nav ===== */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal-deep/85 backdrop-blur-xl border-b border-gold/15 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:items-center sm:justify-between gap-4">
          <div className="flex min-w-0 items-baseline gap-3">
            <span className="font-display text-gold text-base sm:text-lg font-bold tracking-[0.35em] truncate">
              WAHH · PUNJAB
            </span>
            <span className="hidden lg:inline text-[9px] uppercase tracking-[0.45em] text-ivory/40">
              Grandeur
            </span>
          </div>
          <div className="hidden md:flex items-center gap-9 text-[10px] uppercase tracking-[0.35em] text-ivory/70">
            <a href="#legacy" className="hover:text-gold transition-colors">Legacy</a>
            <a href="#fire" className="hover:text-gold transition-colors">Fire</a>
            <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
            <a href="#chef" className="hover:text-gold transition-colors">Chef</a>
            <a href="#private" className="hover:text-gold transition-colors">Private</a>
          </div>
          <a
            href="#reserve"
            className="shrink-0 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] border border-gold/40 px-4 py-2 text-gold hover:bg-gold hover:text-charcoal-deep transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-ticker" />
            Reserve
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Cinematic background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroEmbers}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/40 via-charcoal-deep/70 to-charcoal-deep" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/30 to-charcoal-deep/70" />
        </div>
        <EmberField />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-16 md:pt-44 md:pb-24 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center min-h-screen">
          {/* Left — headline */}
          <div className="animate-fade-up">
            <Eyebrow>A Punjabi Hospitality House · Est. MCMLXXXII</Eyebrow>

            <h1 className="mt-8 editorial text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] text-balance text-ivory">
              Where{" "}
              <span className="italic text-gold-shimmer">Punjab</span>
              <br />
              Becomes an{" "}
              <span className="italic text-glow-amber">Experience.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base sm:text-lg text-ivory/65 leading-relaxed quote-serif">
              An unforgettable culinary journey crafted through heritage,
              fire, storytelling, and world-class hospitality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#reserve"
                className="group inline-flex items-center gap-3 bg-gold text-charcoal-deep px-8 py-4 text-[11px] uppercase tracking-[0.35em] font-medium shadow-ember hover:bg-gold-light transition-all duration-500 hover:-translate-y-0.5"
              >
                Reserve Your Table
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#legacy"
                className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-[11px] uppercase tracking-[0.35em] text-gold hover:bg-gold/10 transition-colors"
              >
                Explore The Experience
              </a>
            </div>

            {/* Urgency layer */}
            <div className="mt-10 inline-flex items-center gap-3 border border-amber/30 bg-amber/5 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-amber animate-ticker" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-glow">
                Only {seatsLeft} Prime Dinner Reservations Remaining This Week
              </span>
            </div>

            {/* Trust */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="border-l border-gold/25 pl-4">
                <div className="text-gold text-sm tracking-widest">★★★★★</div>
                <div className="mt-1 text-xs text-ivory/60">
                  <span className="text-ivory font-medium">4.9</span>
                  <span className="text-ivory/40"> / 5</span> Guest Rating
                </div>
              </div>
              <div className="border-l border-gold/25 pl-4">
                <div className="editorial text-2xl text-gold-light">50,000+</div>
                <div className="mt-1 text-xs text-ivory/60">Guests Served</div>
              </div>
              <div className="border-l border-gold/25 pl-4 col-span-2 sm:col-span-1">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Featured In</div>
                <div className="mt-1 text-xs text-ivory/60">Vogue · Forbes · Robb Report</div>
              </div>
            </div>
          </div>

          {/* Right — Reservation widget */}
          <div className="relative animate-fade-up">
            <div className="absolute -inset-1 bg-gold/10 blur-2xl -z-10 animate-ember-pulse" aria-hidden />
            <div className="relative bg-charcoal/80 backdrop-blur-xl border border-gold/25 shadow-luxe p-7 sm:p-9">
              <div className="absolute -top-3 left-7 bg-charcoal-deep px-3 eyebrow text-[10px]">
                ✦ Reservation
              </div>

              <div className="mt-2">
                <h3 className="editorial text-2xl text-ivory">An Evening Reserved.</h3>
                <p className="mt-1 text-xs text-ivory/55 quote-serif italic">
                  Secure your preferred dining experience before availability closes.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="block text-[9px] uppercase tracking-[0.3em] text-gold/70 mb-1.5">Date</span>
                    <input
                      type="date"
                      className="w-full bg-charcoal-deep/60 border border-gold/20 px-3 py-2.5 text-sm text-ivory focus:border-gold focus:outline-none transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-[9px] uppercase tracking-[0.3em] text-gold/70 mb-1.5">Time</span>
                    <select className="w-full bg-charcoal-deep/60 border border-gold/20 px-3 py-2.5 text-sm text-ivory focus:border-gold focus:outline-none transition-colors">
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-gold/70 mb-1.5">Guests</span>
                  <select className="w-full bg-charcoal-deep/60 border border-gold/20 px-3 py-2.5 text-sm text-ivory focus:border-gold focus:outline-none transition-colors">
                    <option>Two Guests</option>
                    <option>Four Guests</option>
                    <option>Six Guests</option>
                    <option>Private Dining (8+)</option>
                  </select>
                </label>
                <label className="block">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-gold/70 mb-1.5">Full Name</span>
                  <input
                    type="text"
                    placeholder="Mr. / Ms."
                    className="w-full bg-charcoal-deep/60 border border-gold/20 px-3 py-2.5 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none transition-colors"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-gold text-charcoal-deep py-3.5 text-[11px] uppercase tracking-[0.4em] font-medium hover:bg-gold-light transition-colors shadow-ember"
                >
                  Confirm Reservation
                </button>
                <p className="text-center text-[9px] uppercase tracking-[0.3em] text-ivory/40">
                  Or call our concierge · +91 98100 00000
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-ivory/40">
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ===== CHAPTER I — LEGACY ===== */}
      <section id="legacy" className="relative py-32 lg:py-44 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Eyebrow>Chapter I · The Legacy</Eyebrow>
            <h2 className="mt-6 editorial text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] text-ivory">
              Four decades of fire.
              <br />
              <span className="italic text-gold-shimmer">A single, unbroken flame.</span>
            </h2>
            <p className="mt-8 quote-serif italic text-lg text-ivory/70 leading-relaxed">
              From a single charcoal pit in old Amritsar to private dining rooms
              across three continents, Wahh Punjab has carried the soul of the
              five rivers across forty years — preserving recipes whispered by
              grandmothers, polished to the precision of the world's finest tables.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8">
              <div>
                <div className="editorial text-3xl text-gold text-glow-gold">1982</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/45">
                  Founded
                </div>
              </div>
              <div>
                <div className="editorial text-3xl text-gold text-glow-gold">3°</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/45">
                  Continents
                </div>
              </div>
              <div>
                <div className="editorial text-3xl text-gold text-glow-gold">27</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/45">
                  Spices Daily
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="absolute -inset-4 border border-gold/15 -z-10" />
            <div className="absolute -bottom-6 -right-6 size-40 bg-amber/20 blur-3xl -z-10 animate-ember-pulse" />
            <img
              src={legacyImg}
              alt="An antique Punjabi haveli courtyard at dusk"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-auto shadow-luxe"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-charcoal-deep/85 backdrop-blur-md border border-gold/25 px-4 py-3 max-w-xs">
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold mb-1">Amritsar · 1982</div>
              <div className="text-xs text-ivory/70 quote-serif italic">
                The first charcoal was lit on a winter evening — it has not been
                allowed to die since.
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ===== CHAPTER II — SIGNATURE FIRE ===== */}
      <section id="fire" className="relative overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={fireImg}
            alt=""
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-40 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/80 to-charcoal-deep/60" />
        </div>
        <EmberField />

        <div className="relative mx-auto max-w-5xl px-6 py-32 lg:py-44 text-center">
          <Eyebrow>Chapter II · The Signature Fire Experience</Eyebrow>
          <h2 className="mt-8 editorial text-5xl sm:text-6xl lg:text-7xl leading-[1] text-balance text-ivory">
            Smoke. Spice.
            <br />
            <span className="italic text-glow-amber">Centuries on a single skewer.</span>
          </h2>
          <p className="mt-10 max-w-2xl mx-auto quote-serif italic text-lg sm:text-xl text-ivory/75 leading-relaxed">
            The hearth is our cathedral. Hand-cured charcoal aged for seventy-two
            hours, marinades pulled slow through the night, and a fire tended
            with the patience of prayer — every plate carries the heat of an
            ancestor's hand.
          </p>

          <div className="mt-16 grid sm:grid-cols-3 gap-4 sm:gap-6 text-left">
            {[
              { n: "72h", t: "Charcoal Cured" },
              { n: "48h", t: "Marinade Drawn" },
              { n: "850°", t: "Tandoor Heat" },
            ].map((m) => (
              <div
                key={m.t}
                className="border border-gold/20 bg-charcoal/60 backdrop-blur-md p-6 hover:border-gold/50 transition-colors group"
              >
                <div className="editorial text-4xl text-gold text-glow-gold group-hover:text-glow-amber transition-all">
                  {m.n}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.35em] text-ivory/55">
                  {m.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHAPTER III — SIGNATURE DISHES ===== */}
      <section id="menu" className="relative py-32 lg:py-44 px-6 border-y border-gold/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Eyebrow>Chapter III · Signature Dishes</Eyebrow>
            <h2 className="mt-6 editorial text-5xl sm:text-6xl lg:text-7xl text-balance leading-tight text-gold-shimmer">
              The Jewels of the Menu
            </h2>
            <p className="mt-6 max-w-xl mx-auto quote-serif italic text-lg text-ivory/65">
              Each course a chapter. Each plate a story written in fire, butter, and time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {dishes.map((d, i) => (
              <article
                key={d.name}
                className="dish-card group relative bg-charcoal/50 border border-gold/15 hover:border-gold/45 transition-all duration-700 hover:shadow-luxe hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="dish-img absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-gold text-charcoal-deep text-[9px] uppercase tracking-[0.3em] px-2.5 py-1">
                    {d.badge}
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] text-ivory/60">
                    No. {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="dish-overlay absolute inset-0 opacity-0 bg-charcoal-deep/55 backdrop-blur-sm flex items-end p-6">
                    <p className="text-sm quote-serif italic text-ivory/85 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-gold/70">
                    {d.tagline}
                  </div>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <h3 className="editorial text-2xl text-ivory">{d.name}</h3>
                    <span className="text-glow-amber editorial text-lg whitespace-nowrap">
                      {d.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-ivory/55 leading-relaxed quote-serif italic">
                    {d.desc}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gold/10 text-[10px] uppercase tracking-[0.3em] text-gold/60">
                    ✦ Chef Recommends
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#reserve"
              className="inline-block text-[11px] uppercase tracking-[0.4em] text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors"
            >
              Request The Full Tasting Menu →
            </a>
          </div>
        </div>
      </section>

      {/* ===== CHAPTER IV — CHEF ===== */}
      <section id="chef" className="relative py-32 lg:py-44 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border border-gold/15 -z-10" />
            <div className="absolute -top-6 -left-6 size-40 bg-gold/20 blur-3xl -z-10" />
            <img
              src={chefImg}
              alt="Chef Amrit Singh beside a glowing tandoor"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-auto shadow-luxe grayscale-[0.15] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Chapter IV · The Chef's Philosophy</Eyebrow>
            <blockquote className="mt-8 editorial italic text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory text-balance">
              "Tradition is not preserved.
              <br />
              <span className="text-gold-shimmer">It is reimagined."</span>
            </blockquote>
            <p className="mt-10 quote-serif italic text-lg text-ivory/65 leading-relaxed max-w-xl">
              Chef Amrit Singh has tended fire for thirty-one years across
              Amritsar, London and Dubai. He believes the kitchen is a
              cathedral, the tandoor an altar, and every guest a witness.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-gold/50" />
              <div>
                <div className="editorial text-xl text-gold">Amrit Singh</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-ivory/50 mt-1">
                  Executive Chef · Custodian
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHAPTER V — TESTIMONIALS ===== */}
      <section className="relative py-32 lg:py-44 px-6 bg-charcoal/40 border-y border-gold/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Eyebrow>Chapter V · Guest Testimony</Eyebrow>
            <h2 className="mt-6 editorial text-4xl sm:text-5xl lg:text-6xl text-balance text-ivory leading-tight">
              Told in the words of <span className="italic text-gold-shimmer">those who returned.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative bg-charcoal/60 border border-gold/15 p-8 hover:border-gold/40 transition-colors group"
              >
                <div className="absolute -top-3 left-6 bg-charcoal px-2 text-gold text-3xl editorial leading-none">
                  "
                </div>
                <div className="text-gold text-xs tracking-[0.3em] mb-4">★★★★★</div>
                <blockquote className="quote-serif italic text-lg text-ivory/80 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-gold/10 flex items-center gap-4">
                  <div className="size-12 rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center editorial text-gold text-sm tracking-widest">
                    {t.initials}
                  </div>
                  <div>
                    <div className="editorial text-base text-ivory">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/45 mt-0.5">
                      {t.place}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHAPTER VI — PRIVATE DINING ===== */}
      <section id="private" className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={privateDining}
            alt=""
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/85 to-charcoal-deep/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-44 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Chapter VI · Private Dining</Eyebrow>
            <h2 className="mt-8 editorial text-4xl sm:text-5xl lg:text-6xl leading-tight text-ivory text-balance">
              Reserved for celebrations
              <br />
              <span className="italic text-gold-shimmer">worthy of remembrance.</span>
            </h2>
            <p className="mt-8 quote-serif italic text-lg text-ivory/70 leading-relaxed max-w-lg">
              A single black marble table beneath a hand-cast brass chandelier.
              Ten seats. A bespoke twelve-course menu authored by the Chef.
              Available by invitation, for the evenings you intend to remember
              forever.
            </p>

            <ul className="mt-10 space-y-3 text-sm text-ivory/65">
              {[
                "Bespoke menu by Chef Amrit Singh",
                "Dedicated maître d' and sommelier",
                "Private entrance & valet",
                "Curated music & ambient design",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-6 bg-gold shrink-0" />
                  <span className="quote-serif italic">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#reserve"
              className="mt-10 inline-flex items-center gap-3 border border-gold/50 px-8 py-4 text-[11px] uppercase tracking-[0.35em] text-gold hover:bg-gold hover:text-charcoal-deep transition-colors"
            >
              Inquire By Invitation →
            </a>
          </div>
        </div>
      </section>

      {/* ===== CHAPTER VII — SCARCITY BANNER ===== */}
      <section className="relative py-16 px-6 border-y border-gold/20 bg-charcoal-deep">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-[1fr_auto] items-center">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-amber animate-ticker shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-amber-glow mb-1">
                Live Availability
              </div>
              <div className="editorial text-2xl sm:text-3xl text-ivory">
                Weekend reservations <span className="italic text-glow-amber">filling rapidly.</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center min-w-0">
            {[
              { d: "Fri", left: 4, total: 18 },
              { d: "Sat", left: 2, total: 18 },
              { d: "Sun", left: 7, total: 18 },
            ].map((s) => (
              <div key={s.d} className="border border-gold/20 px-3 sm:px-5 py-3">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{s.d}</div>
                <div className="editorial text-xl text-ivory">
                  {s.left} <span className="text-ivory/30 text-sm">/ {s.total}</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-ivory/40 mt-1">left</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHAPTER VIII — AWARDS ===== */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Chapter VIII · Recognition</Eyebrow>
          <h2 className="mt-6 editorial text-3xl sm:text-4xl text-ivory">
            Quietly acknowledged by those who watch closely.
          </h2>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10 items-center">
            {awards.map((a) => (
              <div
                key={a}
                className="border-y border-gold/15 py-5 px-2 text-[10px] uppercase tracking-[0.25em] text-ivory/55 hover:text-gold transition-colors quote-serif not-italic"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHAPTER IX — GALLERY ===== */}
      <section className="relative py-32 px-6 bg-charcoal/40 border-y border-gold/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Eyebrow>Chapter IX · The Editorial Gallery</Eyebrow>
              <h2 className="mt-6 editorial text-4xl sm:text-5xl text-ivory text-balance leading-tight">
                Fragments of an <span className="italic text-gold-shimmer">unforgettable</span> evening.
              </h2>
            </div>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.4em] text-gold border-b border-gold/40 pb-2 self-start md:self-auto hover:border-gold transition-colors"
            >
              Follow @WahhPunjab →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryImages.map((g, i) => {
              const spans = [
                "col-span-2 row-span-2",
                "",
                "row-span-2",
                "",
                "",
                "col-span-2",
              ];
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden group border border-gold/10 ${spans[i] ?? ""}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal-deep/0 group-hover:bg-charcoal-deep/40 transition-colors duration-700" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FINAL CONVERSION ===== */}
      <section id="reserve" className="relative py-32 lg:py-44 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroEmbers}
            alt=""
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-charcoal-deep/80" />
        </div>
        <EmberField />

        <div className="relative mx-auto max-w-4xl text-center">
          <Eyebrow>The Final Invitation</Eyebrow>
          <h2 className="mt-8 editorial text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance text-ivory">
            Your Table
            <br />
            <span className="italic text-gold-shimmer">Awaits.</span>
          </h2>
          <p className="mt-10 quote-serif italic text-xl sm:text-2xl text-ivory/75 max-w-2xl mx-auto leading-relaxed">
            Experience Punjab through fire, artistry, hospitality, and
            unforgettable moments.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#hero-reserve"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 bg-gold text-charcoal-deep px-10 py-5 text-[11px] uppercase tracking-[0.4em] font-medium hover:bg-gold-light transition-all duration-500 shadow-ember hover:-translate-y-0.5"
            >
              Reserve Your Table
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="tel:+919810000000"
              className="inline-flex items-center gap-3 border border-gold/50 px-10 py-5 text-[11px] uppercase tracking-[0.4em] text-gold hover:bg-gold/10 transition-colors"
            >
              Contact Concierge
            </a>
          </div>

          <div className="mt-16 inline-flex items-center gap-3 border border-amber/30 bg-amber/5 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-amber animate-ticker" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-glow">
              {seatsLeft} reservations remain this week
            </span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gold/15 bg-charcoal-deep pt-20 pb-10 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="font-display text-gold text-2xl tracking-[0.3em]">WAHH · PUNJAB</div>
              <div className="text-[9px] uppercase tracking-[0.5em] text-ivory/40 mt-1">
                Grandeur · Est. MCMLXXXII
              </div>
              <p className="mt-6 quote-serif italic text-ivory/55 max-w-sm leading-relaxed">
                A custodian of Punjab's culinary memory — one plate, one ember,
                one guest at a time.
              </p>
              <div className="mt-6 flex gap-4 text-[10px] uppercase tracking-[0.35em] text-ivory/45">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">Journal</a>
                <a href="#" className="hover:text-gold transition-colors">Press</a>
              </div>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Locate Us</h4>
              <address className="not-italic text-sm text-ivory/65 leading-relaxed quote-serif">
                The Royal Pavilion<br />
                Lutyens' Quarter<br />
                New Delhi 110001
              </address>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Hours</h4>
              <p className="text-sm text-ivory/65 leading-relaxed quote-serif">
                Tue — Sun<br />
                19:00 — 23:30<br />
                <span className="text-ivory/35">Closed Mondays</span>
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Concierge</h4>
              <p className="text-sm text-ivory/65 leading-relaxed quote-serif">
                +91 98100 00000<br />
                <a href="mailto:reserve@wahhpunjab.com" className="hover:text-gold transition-colors">
                  reserve@wahhpunjab.com
                </a>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] uppercase tracking-[0.4em] text-ivory/30">
              © MMXXIV · Wahh Punjab Grandeur · All Rights Reserved
            </p>
            <p className="text-[9px] uppercase tracking-[0.4em] text-ivory/30">
              A Hospitality House
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
