import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { menu, categories } from "@/data/menu";
import logoUrl from "@/assets/wahh-punjab-logo.jpg";
import bgHero from "@/assets/bg-hero-hall.jpg";
import bgStory from "@/assets/bg-story-haveli.jpg";
import bgMenu from "@/assets/bg-menu-table.jpg";
import bgSignature from "@/assets/bg-signature-table.jpg";
import bgChef from "@/assets/bg-chef-kitchen.jpg";
import bgVisit from "@/assets/bg-visit-lounge.jpg";

const PHONE = "+91-95992-33387";
const PHONE_TEL = "+919599233387";
const SITE_URL = "https://wahhpunjab.lovable.app";
const LOGO_ABS = `${SITE_URL}/__l5e/assets-v1/476893d0-27d2-4d65-a758-d4828e1a75a9/wahh-punjab-logo.jpg`;

const PUNJABI_SECTIONS = ["Tandoori", "Curries", "Mutton", "Rice", "Rolls"];

const menuSections = Array.from(new Set(menu.map((m) => m.category))).map((cat) => ({
  "@type": "MenuSection",
  name: cat,
  hasMenuItem: menu
    .filter((m) => m.category === cat)
    .map((m) => ({
      "@type": "MenuItem",
      name: m.name,
      ...(m.desc ? { description: m.desc } : {}),
      suitableForDiet: m.veg
        ? "https://schema.org/VegetarianDiet"
        : "https://schema.org/NonVegetarianDiet",
      offers: m.variants.map((v) => ({
        "@type": "Offer",
        price: String(v.price),
        priceCurrency: "INR",
        ...(m.variants.length > 1 ? { name: v.label } : {}),
      })),
    })),
}));

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: "Wahh Punjab Restaurant",
  url: SITE_URL,
  image: LOGO_ABS,
  logo: LOGO_ABS,
  telephone: PHONE_TEL,
  priceRange: "₹₹",
  servesCuisine: ["Punjabi", "North Indian", "Chinese", "Tandoori", "Mughlai"],
  acceptsReservations: true,
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 1, A-1 Block, Guru Nanak Marg, Opp. Muthoot Finance, Sant Nagar",
    addressLocality: "Burari",
    addressRegion: "Delhi",
    postalCode: "110084",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.7569,
    longitude: 77.2003,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:30",
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Burari" },
    { "@type": "Place", name: "Sant Nagar" },
    { "@type": "Place", name: "Kamla Nagar" },
    { "@type": "Place", name: "North Delhi" },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "Wahh Punjab Menu",
    hasMenuSection: menuSections,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "412",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Wahh Punjab Restaurant",
  image: LOGO_ABS,
  url: SITE_URL,
  telephone: PHONE_TEL,
  priceRange: "₹₹",
  address: restaurantSchema.address,
  geo: restaurantSchema.geo,
  openingHoursSpecification: restaurantSchema.openingHoursSpecification,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Wahh Punjab Restaurant located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shop No. 1, A-1 Block, Guru Nanak Marg, Opp. Muthoot Finance, Sant Nagar, Burari, Delhi 110084.",
      },
    },
    {
      "@type": "Question",
      name: "What are the opening hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open all days, 11:00 AM to 11:30 PM. Dine-in, takeaway and home delivery available.",
      },
    },
    {
      "@type": "Question",
      name: "Is Wahh Punjab vegetarian or non-vegetarian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both — pure vegetarian and non-vegetarian dishes are served from separate kitchens.",
      },
    },
    {
      "@type": "Question",
      name: "How do I place an order for delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Call ${PHONE} directly to place a home delivery order. Our team takes your order over the phone.`,
      },
    },
  ],
};

const PAGE_TITLE = "Wahh Punjab — Premium Punjabi, Tandoori & Chinese in Burari, Delhi";
const PAGE_DESC = "Wahh Punjab Restaurant, Sant Nagar, Burari — Premium Punjabi, tandoori, biryani, Chinese, momos & thalis. Veg & non-veg. Call " + PHONE + " for home delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "Wahh Punjab, Punjabi Restaurant Burari, Sant Nagar Delhi, Best Butter Chicken Burari, Tandoori Delhi, Biryani Burari, Best restaurant North Delhi, Home delivery Burari" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "restaurant" },
      { property: "og:image", content: LOGO_ABS },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: LOGO_ABS },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Burari, Delhi" },
      { name: "geo.position", content: "28.7569;77.2003" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantSchema) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Index,
});

// Reference to keep tree-shake from dropping the Punjabi sections list (used in schema generation upstream)
void PUNJABI_SECTIONS;

/* ---------- atoms ---------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 eyebrow">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}

function EmberField() {
  const particles = Array.from({ length: 32 }, (_, i) => ({
    left: (i * 37) % 100,
    delay: (i * 0.7) % 12,
    duration: 10 + (i % 7),
    size: 1.5 + (i % 4) * 0.6,
  }));
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

/* ---------- Scroll progress bar ---------- */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none" aria-hidden>
      <div
        className="h-full"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--amber-glow) 60%, var(--gold) 90%, transparent)",
          boxShadow: "0 0 14px color-mix(in oklab, var(--gold) 70%, transparent), 0 0 28px color-mix(in oklab, var(--amber) 50%, transparent)",
          transition: "width 120ms linear",
        }}
      />
    </div>
  );
}

/* ---------- Section index dots (desktop) ---------- */
function SectionDots() {
  const items = useMemo(
    () => [
      { id: "top", label: "Hero" },
      { id: "story", label: "Story" },
      { id: "signature", label: "Signature" },
      { id: "menu", label: "Menu" },
      { id: "visit", label: "Visit" },
    ],
    [],
  );
  const [active, setActive] = useState("top");
  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) setActive(v.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5" aria-label="Sections">
      {items.map((it) => {
        const isActive = active === it.id;
        return (
          <a key={it.id} href={`#${it.id}`} className="group relative flex items-center gap-3 justify-end" aria-label={`Jump to ${it.label}`}>
            <span className={`font-display text-[9px] uppercase tracking-[0.4em] transition-all duration-500 ${isActive ? "opacity-100 text-gold translate-x-0" : "opacity-0 group-hover:opacity-80 text-ivory translate-x-2 group-hover:translate-x-0"}`}>
              {it.label}
            </span>
            <span className={`block transition-all duration-500 rounded-full ${isActive ? "h-6 w-[3px] bg-gradient-to-b from-gold-light to-gold shadow-[0_0_12px_color-mix(in_oklab,var(--gold)_70%,transparent)]" : "h-1.5 w-1.5 bg-ivory/30 group-hover:bg-gold/70"}`} />
          </a>
        );
      })}
    </nav>
  );
}

/* ---------- Marquee band ---------- */
function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-gold/15 bg-charcoal-deep/60 overflow-hidden" aria-hidden>
      <div className="marquee-track flex gap-12 py-5 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12 font-display text-[11px] uppercase tracking-[0.5em] text-gold-shimmer">
            {t}<span className="text-gold/40">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-charcoal-deep to-transparent" />
    </div>
  );
}

/* ---------- Cinematic multi-layer environment ---------- */
function Environment({
  overlay = "default",
  parallax = 0.18,
  tint = "amber",
  image,
}: {
  overlay?: "default" | "soft" | "dark" | "side";
  parallax?: number;
  tint?: "amber" | "gold" | "dual";
  image?: string;
}) {
  const overlayClass =
    overlay === "soft"
      ? "bg-gradient-to-b from-charcoal-deep/40 via-charcoal-deep/65 to-charcoal-deep/95"
      : overlay === "dark"
      ? "bg-gradient-to-b from-charcoal-deep/80 via-charcoal-deep/85 to-charcoal-deep"
      : overlay === "side"
      ? "bg-gradient-to-r from-charcoal-deep via-charcoal-deep/70 to-charcoal-deep/20"
      : "bg-gradient-to-b from-charcoal-deep/55 via-charcoal-deep/75 to-charcoal-deep";
  return (
    <div className="bg-environment" aria-hidden>
      <div data-parallax={parallax} className="absolute inset-0 will-change-transform">
        <div className="bg-layer-back" style={image ? { backgroundImage: `url(${image})` } : undefined} />
      </div>
      {image && <div className="bg-shimmer-beam" />}
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="bg-vignette-deep" />
      {(tint === "amber" || tint === "dual") && (
        <div className="bg-light-orb bg-light-amber" style={{ width: "55vw", height: "55vw", top: "-10%", right: "-15%" }} />
      )}
      {(tint === "gold" || tint === "dual") && (
        <div className="bg-light-orb bg-light-gold" style={{ width: "45vw", height: "45vw", bottom: "-15%", left: "-10%" }} />
      )}
      <div className="bg-smoke-layer" />
      <div className="bg-grain" />
    </div>
  );
}

/* ---------- Scroll reveal hook ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Parallax hook ---------- */
function useParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (max-width: 900px), (prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const all = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const visible = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target as HTMLElement);
          else visible.delete(e.target as HTMLElement);
        }
      },
      { rootMargin: "200px 0px" },
    );
    all.forEach((el) => io.observe(el));

    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        for (const el of visible) {
          const rect = el.getBoundingClientRect();
          const speed = parseFloat(el.dataset.parallax || "0.2");
          const offset = (rect.top + rect.height / 2 - vh / 2) * speed * -1;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);
}

/* ---------- Page ---------- */
function LoadingSplash() {
  const [gone, setGone] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 2600);
    const t2 = setTimeout(() => setGone(true), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (gone) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-[800ms] ${fade ? "opacity-0" : "opacity-100"}`}
      aria-hidden
    >
      <div className="absolute inset-0 splash-glow" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)" }} />

      <div className="relative splash-logo-wrap">
        <div className="absolute -inset-16 rounded-full bg-gold/20 blur-3xl animate-ember-pulse" />
        <img
          src={logoUrl}
          alt="Wahh Punjab"
          className="relative size-36 sm:size-48 rounded-full object-cover ring-1 ring-gold/60"
          style={{ boxShadow: "0 0 60px -10px color-mix(in oklab, var(--gold) 60%, transparent), 0 0 120px -20px color-mix(in oklab, var(--amber) 40%, transparent)" }}
        />
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="splash-sweep absolute inset-0" />
        </div>
      </div>

      <div className="mt-12 h-px w-0 hairline-gold opacity-80 splash-line" />

      <p className="mt-8 font-display text-sm sm:text-base text-center px-6 tracking-[0.4em] uppercase splash-tagline" style={{ color: "color-mix(in oklab, var(--gold-light) 95%, white)" }}>
        Where Punjab Becomes An Experience.
      </p>
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useReveal();
  useParallax();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground antialiased overflow-x-hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-gold focus:text-background focus:px-3 focus:py-1.5 focus:text-xs focus:font-semibold">Skip to content</a>
      <LoadingSplash />
      <ScrollProgress />
      <SectionDots />

      {/* ===== Nav ===== */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-charcoal-deep/85 backdrop-blur-xl border-b border-gold/15 py-2.5" : "bg-transparent py-4"}`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 group">
            <div className={`rounded-full ring-1 ring-gold/40 shadow-ember transition-all duration-500 overflow-hidden ${scrolled ? "size-8 sm:size-9" : "size-9 sm:size-11"}`}>
              <img src={logoUrl} alt="Wahh Punjab logo" className="size-full object-cover" />
            </div>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-gold-shimmer text-[11px] sm:text-lg font-black tracking-[0.18em] sm:tracking-[0.36em] truncate drop-shadow-[0_0_12px_color-mix(in_oklab,var(--gold)_45%,transparent)]">WAHH PUNJAB</span>
              <span className="hidden sm:inline text-[8px] uppercase tracking-[0.5em] text-ivory/40">Burari · Delhi</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-[10px] uppercase tracking-[0.35em] text-ivory/70">
            <a href="#story" className="hover:text-gold transition-colors">Story</a>
            <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
            <a href="#signature" className="hover:text-gold transition-colors">Signature</a>
            <a href="#visit" className="hover:text-gold transition-colors">Visit</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE_TEL}`} className="btn-luxe-ghost" aria-label="Call to order">
              <span>Call {PHONE}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <main id="main">
      <section id="top" className="isolate relative min-h-dvh w-full overflow-hidden">
        <Environment overlay="soft" parallax={0.18} tint="dual" image={bgHero} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/30 to-transparent" />
        <EmberField />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-16 md:pt-44 md:pb-24 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center min-h-dvh">
          <div className="animate-fade-up">
            <Eyebrow>Sant Nagar · Burari · Delhi 110084 · Pure Veg & Non-Veg</Eyebrow>
            <h1 className="mt-8 font-display text-[3rem] sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-extrabold leading-[0.88] tracking-[-0.035em] text-balance text-champagne">
              Where Punjab
              <br />
              <span className="italic text-gold-shimmer">becomes an</span>
              <br />
              <span className="italic text-glow-amber">experience.</span>
            </h1>
            <p className="mt-10 max-w-xl text-base sm:text-lg text-champagne-deep/85 leading-relaxed quote-serif">
              A pure-veg <span className="text-gold">&</span> non-veg fine-dining house in Burari — slow-fire tandoor, butter-rich gravies, hand-rolled momos, biryani straight from the clay oven and thick shakes. The entire menu, a phone call away. Call to order home delivery.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a href="#menu" className="btn-luxe group">
                <span>Explore The Menu</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-luxe-outline">
                <span>Reserve A Table</span>
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 border border-amber/30 bg-amber/5 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-amber animate-ticker" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-glow">Home Delivery · Call {PHONE} To Order</span>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
              <div className="border-l border-gold/25 pl-4">
                <div className="editorial text-2xl text-gold-light">{menu.length}+</div>
                <div className="mt-1 text-xs text-ivory/60">Dishes On Menu</div>
              </div>
              <div className="border-l border-gold/25 pl-4">
                <div className="editorial text-2xl text-gold-light">Call</div>
                <div className="mt-1 text-xs text-ivory/60">To Order Delivery</div>
              </div>
              <div className="border-l border-gold/25 pl-4">
                <div className="editorial text-2xl text-gold-light">₹15+</div>
                <div className="mt-1 text-xs text-ivory/60">From the Tandoor</div>
              </div>
            </div>
          </div>

          {/* Hero plate visual — empty spot */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-12 rounded-full bg-amber/20 blur-3xl animate-ember-pulse" aria-hidden />
            <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-gold/40 shadow-luxe bg-charcoal-deep/80 border border-gold/10 flex items-center justify-center">
              <span className="text-gold/40 text-xs uppercase tracking-[0.3em]">Image spot</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-charcoal-deep/85 backdrop-blur border border-gold/30 px-4 py-3">
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold">House Special</div>
              <div className="editorial text-lg text-ivory">Wahh Punjab Thali · ₹299</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-ivory/40">
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section id="story" className="isolate relative py-32 lg:py-44 px-6 overflow-hidden">
        <Environment overlay="dark" parallax={0.12} tint="gold" image={bgStory} />
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1" data-reveal>
            <Eyebrow>The House</Eyebrow>
            <h2 className="mt-6 editorial text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] text-ivory">
              A Burari kitchen,
              <br />
              <span className="italic text-gold-shimmer">built around the tandoor.</span>
            </h2>
            <p className="mt-8 quote-serif italic text-lg text-ivory/70 leading-relaxed">
              Wahh Punjab is a neighbourhood fine-dining house on Guru Nanak Marg, Sant Nagar. We cook the Punjabi food we grew up on — butter chicken, dal makhani, mutton rogan josh, biryani straight from the clay oven — and pair it with sharp Indo-Chinese, hand-folded momos, and thick shakes for the family table.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8">
              <div>
                <div className="editorial text-3xl text-gold text-glow-gold">15+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/45">Menu Sections</div>
              </div>
              <div>
                <div className="editorial text-3xl text-gold text-glow-gold">Tue–Sun</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/45">Open Daily</div>
              </div>
              <div>
                <div className="editorial text-3xl text-gold text-glow-gold">Call</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/45">To Order Delivery</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative" data-reveal>
            <div className="absolute -inset-4 border border-gold/15 -z-10" />
            <div className="absolute -bottom-6 -right-6 size-40 bg-amber/20 blur-3xl -z-10 animate-ember-pulse" />
            <div className="w-full aspect-square bg-charcoal-deep/60 border border-gold/10 shadow-luxe flex items-center justify-center">
              <span className="text-gold/40 text-xs uppercase tracking-[0.3em]">Image spot</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-charcoal-deep/85 backdrop-blur-md border border-gold/25 px-4 py-3 max-w-xs">
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold mb-1">From the Tandoor</div>
              <div className="text-xs text-ivory/70 quote-serif italic">Slow-cured charcoal, hand-stretched naan, every plate hits the table hot.</div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Wahh Punjab", "Tandoor · Slow Fire", "Hand-Folded Momos", "Biryani From The Clay Oven", "Call To Order Delivery", "Sant Nagar · Burari"]} />

      {/* ===== FIRE PARALLAX ===== */}
      <section className="isolate relative overflow-hidden">
        <Environment overlay="dark" parallax={0.25} tint="amber" image={bgChef} />
        <div className="relative mx-auto max-w-5xl px-6 py-32 lg:py-44 text-center" data-reveal>
          <Eyebrow>Smoke · Spice · Slow Fire</Eyebrow>
          <h2 className="mt-8 editorial text-5xl sm:text-6xl lg:text-7xl leading-[1] text-balance text-ivory">
            The tandoor doesn't <span className="italic text-glow-amber">rest.</span>
          </h2>
          <p className="mt-10 max-w-2xl mx-auto quote-serif italic text-lg sm:text-xl text-ivory/75 leading-relaxed">
            From the first tandoori roti at lunch to the last seekh kabab past midnight — fresh charcoal, fresh marinade, plate after plate.
          </p>
        </div>
      </section>

      {/* ===== SIGNATURE DISHES ===== */}
      <section id="signature" className="isolate relative py-32 lg:py-44 px-6 border-y border-gold/10 overflow-hidden">
        <Environment overlay="dark" parallax={0.1} tint="amber" image={bgSignature} />
        <div className="mx-auto max-w-7xl relative">
          <div className="text-center mb-20" data-reveal>
            <Eyebrow>House Signatures</Eyebrow>
            <h2 className="mt-6 editorial text-5xl sm:text-6xl lg:text-7xl text-balance leading-tight text-gold-shimmer">The plates we are known for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { name: "Wahh Punjab Special Chicken", price: "₹280 / ₹430 / ₹680", tag: "House Royal", desc: "Our signature gravy — slow-cooked chicken in a buttery, aromatic masala. Order it as Quarter, Half or Full." },
              { name: "Butter Chicken", price: "₹240 / ₹400 / ₹680", tag: "Most Loved", desc: "Tandoor-charred chicken in a velvety, tomato-cream gravy. The Delhi classic done right." },
              { name: "Wahh Punjab Special Thali", price: "₹299", tag: "Best Value", desc: "A grand single-platter feast of our specials — perfect for the full Punjabi experience." },
            ].map((d, i) => (
              <article key={d.name} className="dish-card group relative bg-charcoal/50 border border-gold/15 hover:border-gold/45 transition-all duration-700 hover:shadow-luxe hover:-translate-y-1" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-deep/60 border-b border-gold/10 flex items-center justify-center">
                  <span className="text-gold/40 text-xs uppercase tracking-[0.3em]">Image spot</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-gold text-charcoal-deep text-[9px] uppercase tracking-[0.3em] px-2.5 py-1">{d.tag}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="editorial text-2xl text-champagne">{d.name}</h3>
                  </div>
                  <div className="mt-1 text-glow-amber editorial text-lg">{d.price}</div>
                  <p className="mt-3 text-sm text-champagne-deep/70 leading-relaxed quote-serif italic">{d.desc}</p>
                  <a href="#menu" className="mt-5 inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors">View in menu →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL MENU ===== */}
      <MenuSection />

      {/* ===== OWNER — RAJAT SALUJA ===== */}
      <section className="isolate relative py-32 lg:py-44 px-6 overflow-hidden">
        <Environment overlay="dark" parallax={0.14} tint="amber" image={bgChef} />
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
          <div className="lg:col-span-5 relative" data-reveal>
            <div className="absolute -inset-4 border border-gold/15 -z-10" />
            <div className="absolute -top-6 -left-6 size-40 bg-gold/20 blur-3xl -z-10" />
            <div className="w-full aspect-[4/5] bg-charcoal-deep/60 border border-gold/10 shadow-luxe flex items-center justify-center">
              <span className="text-gold/40 text-xs uppercase tracking-[0.3em]">Image spot</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-charcoal-deep/85 backdrop-blur border border-gold/30 px-4 py-3">
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold">Founder</div>
              <div className="font-display text-lg font-bold tracking-[0.1em] text-ivory">RAJAT SALUJA</div>
              <div className="text-[10px] tracking-[0.2em] text-ivory/60 mt-1 quote-serif italic">b. 16 March 1985</div>
            </div>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <Eyebrow>Meet The Founder</Eyebrow>
            <h2 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-[-0.02em] text-ivory text-balance">
              A family legacy of flavour,
              <span className="text-gold-shimmer"> served with pride.</span>
            </h2>
            <div className="mt-8 space-y-5 quote-serif italic text-lg text-ivory/80 leading-relaxed max-w-2xl">
              <p>
                <span className="not-italic font-semibold text-gold">Rajat Saluja</span>, born on <span className="not-italic">16 March 1985</span>, has been passionate about cooking and restaurants since childhood. Coming from a family with a long-standing love for cooking and hospitality, he grew up surrounded by traditions, flavours, and the joy of serving great food.
              </p>
              <p>
                His entrepreneurial journey began with <span className="not-italic font-semibold text-ivory">Raje Di Hatti</span> — a restaurant whose name was lovingly suggested by his mother, <span className="not-italic">Mrs. Sushma Saluja</span>. Inspired by his family's passion for food and hospitality, Rajat continued to build on that foundation and later established <span className="not-italic font-semibold text-gold">Wahh Punjab</span>.
              </p>
              <p>
                Today, Wahh Punjab stands as a reflection of his dedication to authentic Punjabi cuisine, warm hospitality, and the culinary values that have been passed down through generations of the Saluja family.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.35em] text-ivory/55">
              <div><span className="text-gold">—</span> Raje Di Hatti</div>
              <div><span className="text-gold">—</span> Wahh Punjab</div>
              <div><span className="text-gold">—</span> Saluja Family Kitchens</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative py-32 px-6 bg-charcoal/40 border-y border-gold/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14" data-reveal>
            <div>
              <Eyebrow>The Table</Eyebrow>
              <h2 className="mt-6 editorial text-4xl sm:text-5xl text-ivory text-balance leading-tight">
                Straight from the <span className="italic text-gold-shimmer">Wahh Punjab</span> kitchen.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {[
              { span: "col-span-2 row-span-2" },
              { span: "" },
              { span: "row-span-2" },
              { span: "" },
              { span: "" },
              { span: "col-span-2" },
            ].map((g, i) => (
              <div key={i} className={`relative overflow-hidden group border border-gold/10 bg-charcoal-deep/60 ${g.span}`} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gold/40 text-xs uppercase tracking-[0.3em]">Image spot</span>
                </div>
                <div className="absolute inset-0 bg-charcoal-deep/0 group-hover:bg-charcoal-deep/40 transition-colors duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISIT / FINAL ===== */}
      <section id="visit" className="isolate relative py-32 lg:py-44 px-6 overflow-hidden">
        <Environment overlay="dark" parallax={0.14} tint="dual" image={bgVisit} />
        <EmberField />
        <div className="relative mx-auto max-w-5xl text-center" data-reveal>
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="mt-8 editorial text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance text-ivory">
            Your table at <span className="italic text-gold-shimmer">Wahh Punjab</span> is waiting.
          </h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            <div className="border border-gold/20 p-6 bg-charcoal/40 backdrop-blur-md">
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-2">Address</div>
              <div className="text-sm text-ivory/75 quote-serif italic leading-relaxed">
                Shop No. 1, A-1 Block<br />Guru Nanak Marg<br />Opp. Muthoot Finance<br />Sant Nagar, Burari<br />Delhi - 110084
              </div>
            </div>
            <div className="border border-gold/20 p-6 bg-charcoal/40 backdrop-blur-md">
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-2">Call & Order</div>
              <div className="text-sm text-ivory/75 quote-serif italic leading-relaxed">
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold transition-colors">{PHONE}</a><br />
                Call to order home delivery<br />
                <span className="text-ivory/40 text-xs">GST extra</span>
              </div>
            </div>
            <div className="border border-gold/20 p-6 bg-charcoal/40 backdrop-blur-md">
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-2">Hours</div>
              <div className="text-sm text-ivory/75 quote-serif italic leading-relaxed">
                Open All Days<br />11:00 — 23:30<br />Dine-in · Takeaway · Delivery
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <a href="#menu" className="btn-luxe"><span>Explore The Menu</span><span>→</span></a>
            <a href={`tel:${PHONE_TEL}`} className="btn-luxe-outline"><span>Call {PHONE}</span></a>
          </div>
        </div>
      </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gold/15 bg-charcoal-deep pt-20 pb-10 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-full overflow-hidden ring-1 ring-gold/40 shadow-ember bg-charcoal-deep">
                  <img src={logoUrl} alt="Wahh Punjab Restaurant logo" className="size-full object-cover" />
                </div>
                <div>
                  <div className="font-display text-gold text-2xl tracking-[0.3em]">WAHH · PUNJAB</div>
                  <div className="text-[9px] uppercase tracking-[0.5em] text-ivory/40 mt-1">Sant Nagar · Burari · Delhi</div>
                </div>
              </div>
              <p className="mt-6 quote-serif italic text-ivory/55 max-w-sm leading-relaxed">A neighbourhood Punjabi house — tandoor, biryani, momos & shakes, served the way we'd serve our own family.</p>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Find Us</h4>
              <address className="not-italic text-sm text-ivory/65 leading-relaxed quote-serif">
                Shop No. 1, A-1 Block<br />Guru Nanak Marg, Sant Nagar<br />Burari, Delhi 110084
              </address>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Hours</h4>
              <p className="text-sm text-ivory/65 leading-relaxed quote-serif">Open All Days<br />11:00 — 23:30</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Order</h4>
              <p className="text-sm text-ivory/65 leading-relaxed quote-serif">
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold transition-colors">{PHONE}</a><br />
                Call to order
              </p>
            </div>
          </div>
          <div className="pt-10 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] uppercase tracking-[0.4em] text-champagne-deep/55">© Wahh Punjab Restaurant · All Rights Reserved · GST Extra</p>
            <p className="text-[9px] uppercase tracking-[0.45em] text-champagne-deep/60">
              Designed &amp; Created by <span className="text-gold-shimmer font-semibold tracking-[0.35em]">Velora Studio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Menu Section ---------- */
function MenuSection() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter(
      (m) =>
        (active === "All" || m.category === active) &&
        (!vegOnly || m.veg) &&
        (q === "" || m.name.toLowerCase().includes(q)),
    );
  }, [active, query, vegOnly]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof menu>();
    for (const m of filtered) {
      if (!map.has(m.category)) map.set(m.category, []);
      map.get(m.category)!.push(m);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <section id="menu" className="isolate relative py-24 lg:py-32 px-6 border-y border-gold/10 overflow-hidden">
      <Environment overlay="dark" parallax={0.08} tint="amber" image={bgMenu} />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-12" data-reveal>
          <Eyebrow>The Full Menu</Eyebrow>
          <h2 className="mt-6 editorial text-5xl sm:text-6xl lg:text-7xl text-balance leading-tight text-gold-shimmer">
            Every dish on the menu.
          </h2>
          <p className="mt-4 text-ivory/60 quote-serif italic">{menu.length} dishes · {categories.length} sections · Call {PHONE} to order delivery</p>
        </div>

        {/* Controls */}
        <div className="sticky top-20 z-30 -mx-6 px-6 py-4 bg-charcoal-deep/90 backdrop-blur-xl border-y border-gold/15">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="relative flex-1 min-w-[220px]">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search dishes — butter chicken, momos, biryani…"
                  className="w-full bg-charcoal-deep/80 border border-gold/25 px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none"
                />
              </div>
              <label className="inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.4em] text-champagne cursor-pointer select-none">
                <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} className="accent-[color:var(--veg)]" />
                Veg Only
              </label>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:thin]">
              {(["All", ...categories] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`shrink-0 chip-luxe ${active === c ? "chip-luxe-active" : ""}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="mt-10 space-y-14">
          {grouped.length === 0 && (
            <p className="text-center text-ivory/50 quote-serif italic py-16">No dishes match your search.</p>
          )}
          {grouped.map(([cat, items]) => (
            <div key={cat}>
              <h3 className="editorial text-2xl sm:text-3xl text-ivory mb-6 flex items-center gap-4">
                <span className="text-gold/70">✦</span>
                {cat}
                <span className="flex-1 h-px hairline-gold opacity-40" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">{items.length}</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {items.map((m) => (
                  <li
                    key={m.id}
                    className="group bg-charcoal/55 border border-gold/15 hover:border-gold/45 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ember"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-1.5 inline-block size-3 border p-0.5 ${m.veg ? "border-[color:var(--veg)]" : "border-[color:var(--nonveg)]"}`}
                        aria-label={m.veg ? "Vegetarian" : "Non-vegetarian"}
                      >
                        <span className={`block size-full rounded-full ${m.veg ? "bg-[color:var(--veg)]" : "bg-[color:var(--nonveg)]"}`} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="editorial text-lg sm:text-xl text-champagne leading-tight">{m.name}</h4>
                        </div>
                        {m.desc && (
                          <p className="mt-2 text-xs text-champagne-deep/65 quote-serif italic leading-relaxed">{m.desc}</p>
                        )}
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          {m.variants.map((v) => (
                            <span
                              key={v.label}
                              className="inline-flex items-center gap-2 px-3 py-1.5 border border-gold/25 bg-charcoal-deep/50 text-sm"
                              aria-label={`${m.name} ${v.label} ₹${v.price}`}
                            >
                              {m.variants.length > 1 && (
                                <span className="text-[9px] uppercase tracking-[0.28em] text-gold/85">{v.label}</span>
                              )}
                              <span className="font-semibold text-glow-amber">₹{v.price}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
