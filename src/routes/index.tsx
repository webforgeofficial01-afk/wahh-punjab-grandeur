import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import heroEmbers from "@/assets/hero-embers.jpg";
import heroPlatter from "@/assets/hero-platter.jpg";
import legacyImg from "@/assets/legacy.jpg";
import fireImg from "@/assets/fire-experience.jpg";
import chefImg from "@/assets/chef.jpg";
import privateDining from "@/assets/private-dining.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishKulcha from "@/assets/dish-kulcha.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import bgHeroHall from "@/assets/bg-hero-hall.jpg";
import bgStoryHaveli from "@/assets/bg-story-haveli.jpg";
import bgMenuTable from "@/assets/bg-menu-table.jpg";
import bgChefKitchen from "@/assets/bg-chef-kitchen.jpg";
import bgVisitLounge from "@/assets/bg-visit-lounge.jpg";
import bgSignatureTable from "@/assets/bg-signature-table.jpg";
import logoAsset from "@/assets/wahh-punjab-logo.jpg.asset.json";
import { menu, categories, type MenuItem } from "@/data/menu";

const LOGO = logoAsset.url;
const PHONE = "+91-99999-00000";
const WHATSAPP = "919999900000";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Wahh Punjab Restaurant",
  image: [LOGO],
  logo: LOGO,
  priceRange: "₹₹",
  servesCuisine: ["Punjabi", "North Indian", "Chinese", "Tandoori"],
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 1, A-1 Block, Guru Nanak Marg, Opp. Muthoot Finance, Sant Nagar, Burari",
    addressLocality: "Delhi",
    postalCode: "110084",
    addressRegion: "DL",
    addressCountry: "IN",
  },
  hasMenu: menu.map((m) => ({
    "@type": "MenuItem",
    name: m.name,
    offers: { "@type": "Offer", price: m.variants[0].price, priceCurrency: "INR" },
  })).slice(0, 50),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wahh Punjab — Premium Punjabi, Tandoori & Chinese in Burari, Delhi" },
      { name: "description", content: "Wahh Punjab Restaurant, Sant Nagar, Burari — Premium Punjabi, tandoori, biryani, Chinese, momos & thalis. Free home delivery up to 3 KM. Order online." },
      { name: "keywords", content: "Wahh Punjab, Punjabi Restaurant Burari, Sant Nagar Delhi, Best Butter Chicken Burari, Tandoori Delhi, Biryani Burari, Online food order Burari" },
      { property: "og:title", content: "Wahh Punjab — Burari, Delhi" },
      { property: "og:description", content: "Premium Punjabi fine dining in Burari. Order online — free delivery up to 3 KM." },
      { property: "og:type", content: "restaurant" },
      { property: "og:image", content: heroPlatter },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroPlatter },
      { name: "theme-color", content: "#0a0807" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(restaurantSchema) }],
  }),
  component: Index,
});

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

/* ---------- Cinematic multi-layer environment ---------- */
function Environment({
  image,
  overlay = "default",
  parallax = 0.18,
  tint = "amber",
}: {
  image: string;
  overlay?: "default" | "soft" | "dark" | "side";
  parallax?: number;
  tint?: "amber" | "gold" | "dual";
}) {
  const overlayClass =
    overlay === "soft"
      ? "bg-gradient-to-b from-charcoal-deep/30 via-charcoal-deep/55 to-charcoal-deep/95"
      : overlay === "dark"
      ? "bg-gradient-to-b from-charcoal-deep/75 via-charcoal-deep/80 to-charcoal-deep"
      : overlay === "side"
      ? "bg-gradient-to-r from-charcoal-deep via-charcoal-deep/70 to-charcoal-deep/20"
      : "bg-gradient-to-b from-charcoal-deep/50 via-charcoal-deep/70 to-charcoal-deep";
  return (
    <div className="bg-environment" aria-hidden>
      <div data-parallax={parallax} className="absolute inset-0 will-change-transform">
        <div className="bg-layer-back" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="bg-vignette-deep" />
      {(tint === "amber" || tint === "dual") && (
        <div className="bg-light-orb bg-light-amber" style={{ width: "55vw", height: "55vw", top: "-10%", right: "-15%" }} />
      )}
      {(tint === "gold" || tint === "dual") && (
        <div className="bg-light-orb bg-light-gold" style={{ width: "45vw", height: "45vw", bottom: "-15%", left: "-10%" }} />
      )}
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
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        for (const el of els) {
          const rect = el.getBoundingClientRect();
          const speed = parseFloat(el.dataset.parallax || "0.2");
          const offset = (rect.top + rect.height / 2 - vh / 2) * speed * -1;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/* ---------- Cart ---------- */
type CartLine = { key: string; itemId: string; name: string; variant: string; price: number; qty: number };

function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("wahh:cart");
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {/* noop */}
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem("wahh:cart", JSON.stringify(lines)); } catch {/* noop */}
  }, [lines, hydrated]);

  const add = (item: MenuItem, vIndex = 0) => {
    const v = item.variants[vIndex];
    const key = `${item.id}::${v.label}`;
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.key === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { key, itemId: item.id, name: item.name, variant: v.label, price: v.price, qty: 1 }];
    });
  };
  const setQty = (key: string, qty: number) =>
    setLines((prev) => prev.flatMap((l) => (l.key === key ? (qty <= 0 ? [] : [{ ...l, qty }]) : [l])));
  const remove = (key: string) => setQty(key, 0);
  const clear = () => setLines([]);
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0);
  return { lines, add, setQty, remove, clear, count, total };
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
      {/* Warm golden glow emerges from center */}
      <div className="absolute inset-0 splash-glow" />
      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)" }} />

      <div className="relative splash-logo-wrap">
        <div className="absolute -inset-16 rounded-full bg-gold/15 blur-3xl animate-ember-pulse" />
        <img
          src={LOGO}
          alt="Wahh Punjab"
          width={200}
          height={200}
          className="relative size-36 sm:size-48 rounded-full object-cover ring-1 ring-gold/50"
          style={{ boxShadow: "0 0 60px -10px color-mix(in oklab, var(--gold) 60%, transparent), 0 0 120px -20px color-mix(in oklab, var(--amber) 40%, transparent)" }}
        />
        {/* Gold sweep across logo */}
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
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useCart();

  useReveal();
  useParallax();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <LoadingSplash />

      {/* ===== Nav ===== */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-charcoal-deep/85 backdrop-blur-xl border-b border-gold/15 py-2.5" : "bg-transparent py-4"}`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3 group">
            <img src={LOGO} alt="Wahh Punjab" width={44} height={44} className={`rounded-full object-cover ring-1 ring-gold/40 shadow-ember transition-all duration-500 ${scrolled ? "size-9" : "size-11"}`} />
            <span className="flex flex-col leading-tight min-w-0">
              <span className="font-display text-gold text-sm sm:text-base font-bold tracking-[0.32em] truncate">WAHH · PUNJAB</span>
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
            <button
              onClick={() => setCartOpen(true)}
              className="relative inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] border border-gold/40 px-3 py-2 text-gold hover:bg-gold hover:text-charcoal-deep transition-colors"
            >
              Cart
              {cart.count > 0 && (
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-amber text-charcoal-deep text-[10px] font-bold">{cart.count}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden">
        <Environment image={bgHeroHall} overlay="soft" parallax={0.18} tint="dual" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/30 to-transparent" />
        <EmberField />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-16 md:pt-44 md:pb-24 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center min-h-screen">
          <div className="animate-fade-up">
            <Eyebrow>Sant Nagar · Burari · Delhi 110084 · Pure Veg & Non-Veg</Eyebrow>
            <h1 className="mt-8 font-display text-[3rem] sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-extrabold leading-[0.88] tracking-[-0.035em] text-balance text-ivory">
              Where Punjab
              <br />
              <span className="italic text-gold-shimmer">becomes an</span>
              <br />
              <span className="italic text-glow-amber">experience.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-ivory/70 leading-relaxed quote-serif">
              A pure-veg <span className="text-gold">&</span> non-veg fine-dining house in Burari — slow-fire tandoor, butter-rich gravies, hand-rolled momos, biryani straight from the clay oven and thick shakes. The entire menu, orderable in a few taps. Free home delivery within 3 KM.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#menu" className="group inline-flex items-center gap-3 bg-gold text-charcoal-deep px-8 py-4 text-[11px] uppercase tracking-[0.35em] font-medium shadow-ember hover:bg-gold-light transition-all duration-500 hover:-translate-y-0.5">
                Order Now <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-[11px] uppercase tracking-[0.35em] text-gold hover:bg-gold/10 transition-colors">
                Call To Reserve
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 border border-amber/30 bg-amber/5 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-amber animate-ticker" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-glow">Free Home Delivery · Up to 3 KM · Live on Swiggy & Zomato</span>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
              <div className="border-l border-gold/25 pl-4">
                <div className="editorial text-2xl text-gold-light">{menu.length}+</div>
                <div className="mt-1 text-xs text-ivory/60">Dishes On Menu</div>
              </div>
              <div className="border-l border-gold/25 pl-4">
                <div className="editorial text-2xl text-gold-light">3 KM</div>
                <div className="mt-1 text-xs text-ivory/60">Free Delivery Radius</div>
              </div>
              <div className="border-l border-gold/25 pl-4">
                <div className="editorial text-2xl text-gold-light">₹15+</div>
                <div className="mt-1 text-xs text-ivory/60">From the Tandoor</div>
              </div>
            </div>
          </div>

          {/* Hero plate visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-12 rounded-full bg-amber/20 blur-3xl animate-ember-pulse" aria-hidden />
            <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-gold/40 shadow-luxe">
              <img src={heroPlatter} alt="Royal Punjabi platter" className="h-full w-full object-cover animate-slow-zoom" />
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
      <section id="story" className="relative py-32 lg:py-44 px-6 overflow-hidden">
        <Environment image={bgStoryHaveli} overlay="dark" parallax={0.12} tint="gold" />
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
                <div className="editorial text-3xl text-gold text-glow-gold">3 KM</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ivory/45">Free Delivery</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative" data-reveal>
            <div className="absolute -inset-4 border border-gold/15 -z-10" />
            <div className="absolute -bottom-6 -right-6 size-40 bg-amber/20 blur-3xl -z-10 animate-ember-pulse" />
            <img src={legacyImg} alt="Tandoor at Wahh Punjab" loading="lazy" width={1280} height={1280} className="w-full h-auto shadow-luxe" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-charcoal-deep/85 backdrop-blur-md border border-gold/25 px-4 py-3 max-w-xs">
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold mb-1">From the Tandoor</div>
              <div className="text-xs text-ivory/70 quote-serif italic">Slow-cured charcoal, hand-stretched naan, every plate hits the table hot.</div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ===== FIRE PARALLAX ===== */}
      <section className="relative overflow-hidden">
        <Environment image={fireImg} overlay="dark" parallax={0.25} tint="amber" />
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
      <section id="signature" className="relative py-32 lg:py-44 px-6 border-y border-gold/10 overflow-hidden">
        <Environment image={bgSignatureTable} overlay="dark" parallax={0.1} tint="amber" />
        <div className="mx-auto max-w-7xl relative">
          <div className="text-center mb-20" data-reveal>
            <Eyebrow>House Signatures</Eyebrow>
            <h2 className="mt-6 editorial text-5xl sm:text-6xl lg:text-7xl text-balance leading-tight text-gold-shimmer">The plates we are known for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { name: "Wahh Punjab Special Chicken", price: "₹280 / ₹430 / ₹680", img: dishDal, tag: "House Royal", desc: "Our signature gravy — slow-cooked chicken in a buttery, aromatic masala. Order it as Quarter, Half or Full." },
              { name: "Butter Chicken", price: "₹240 / ₹400 / ₹680", img: dishKulcha, tag: "Most Loved", desc: "Tandoor-charred chicken in a velvety, tomato-cream gravy. The Delhi classic done right." },
              { name: "Wahh Punjab Special Thali", price: "₹299", img: dishBiryani, tag: "Best Value", desc: "A grand single-platter feast of our specials — perfect for the full Punjabi experience." },
            ].map((d, i) => (
              <article key={d.name} className="dish-card group relative bg-charcoal/50 border border-gold/15 hover:border-gold/45 transition-all duration-700 hover:shadow-luxe hover:-translate-y-1" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="dish-img absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-gold text-charcoal-deep text-[9px] uppercase tracking-[0.3em] px-2.5 py-1">{d.tag}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="editorial text-2xl text-ivory">{d.name}</h3>
                  </div>
                  <div className="mt-1 text-glow-amber editorial text-lg">{d.price}</div>
                  <p className="mt-3 text-sm text-ivory/55 leading-relaxed quote-serif italic">{d.desc}</p>
                  <a href="#menu" className="mt-5 inline-block text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors">Order from menu →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL MENU ===== */}
      <MenuSection onAdd={cart.add} />

      {/* ===== OWNER — RAJAT SALUJA ===== */}
      <section className="relative py-32 lg:py-44 px-6 overflow-hidden">
        <Environment image={bgChefKitchen} overlay="dark" parallax={0.14} tint="amber" />
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
          <div className="lg:col-span-5 relative" data-reveal>
            <div className="absolute -inset-4 border border-gold/15 -z-10" />
            <div className="absolute -top-6 -left-6 size-40 bg-gold/20 blur-3xl -z-10" />
            <img src={chefImg} alt="Rajat Saluja, owner of Wahh Punjab" loading="lazy" className="w-full h-auto shadow-luxe grayscale-[0.15] hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute bottom-4 left-4 bg-charcoal-deep/85 backdrop-blur border border-gold/30 px-4 py-3">
              <div className="text-[9px] uppercase tracking-[0.35em] text-gold">Founded By</div>
              <div className="font-display text-lg font-bold tracking-[0.1em] text-ivory">RAJAT SALUJA</div>
            </div>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <Eyebrow>The Man Behind The House</Eyebrow>
            <h2 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-[-0.02em] text-ivory text-balance">
              Every plate at Wahh Punjab carries
              <span className="text-gold-shimmer"> his standard.</span>
            </h2>
            <p className="mt-8 quote-serif italic text-lg text-ivory/75 leading-relaxed max-w-xl">
              Wahh Punjab is the vision of <span className="not-italic font-semibold text-gold">Rajat Saluja</span> — owner, host, and quiet perfectionist. He insists on fresh charcoal, freshly ground masala, and dishes cooked only after you order. His full story is coming soon to this page.
            </p>
            <ul className="mt-10 space-y-3 text-sm text-ivory/75 quote-serif italic">
              {[
                "100% fresh ingredients — no pre-cooked gravies",
                "Pure desi ghee & cultured butter in every signature dish",
                "Separate veg & non-veg sections — full pure-veg menu available",
                "Hygienic packaging on every delivery order",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-6 bg-gold shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* ===== PRIVATE / FAMILY DINING ===== */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div data-parallax="0.2" className="absolute inset-0 will-change-transform">
            <img src={privateDining} alt="" loading="lazy" className="h-[125%] w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/85 to-charcoal-deep/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-44 grid lg:grid-cols-2 gap-12 items-center" data-reveal>
          <div>
            <Eyebrow>Family Gatherings & Parties</Eyebrow>
            <h2 className="mt-8 editorial text-4xl sm:text-5xl lg:text-6xl leading-tight text-ivory text-balance">
              Hosting at home?
              <br />
              <span className="italic text-gold-shimmer">We'll cater the whole table.</span>
            </h2>
            <p className="mt-8 quote-serif italic text-lg text-ivory/70 leading-relaxed max-w-lg">
              Birthdays, kitty parties, family functions in Sant Nagar, Burari, Kamla Nagar and nearby — call us for bulk orders, custom thali platters and family packs.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-3 bg-gold text-charcoal-deep px-8 py-4 text-[11px] uppercase tracking-[0.35em] hover:bg-gold-light transition-colors shadow-ember">Call {PHONE}</a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-gold/50 px-8 py-4 text-[11px] uppercase tracking-[0.35em] text-gold hover:bg-gold/10 transition-colors">WhatsApp Us</a>
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
              { src: gal1, span: "col-span-2 row-span-2" },
              { src: dishBiryani, span: "" },
              { src: gal3, span: "row-span-2" },
              { src: gal2, span: "" },
              { src: dishKulcha, span: "" },
              { src: gal4, span: "col-span-2" },
            ].map((g, i) => (
              <div key={i} className={`relative overflow-hidden group border border-gold/10 ${g.span}`} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-charcoal-deep/0 group-hover:bg-charcoal-deep/40 transition-colors duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISIT / FINAL ===== */}
      <section id="visit" className="relative py-32 lg:py-44 px-6 overflow-hidden">
        <Environment image={bgVisitLounge} overlay="dark" parallax={0.14} tint="dual" />
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
                <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="hover:text-gold transition-colors">{PHONE}</a><br />
                Free delivery up to 3 KM<br />
                Live on Swiggy & Zomato<br />
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
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#menu" className="inline-flex items-center gap-3 bg-gold text-charcoal-deep px-10 py-5 text-[11px] uppercase tracking-[0.4em] font-medium hover:bg-gold-light transition-all duration-500 shadow-ember hover:-translate-y-0.5">Order Now →</a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-gold/50 px-10 py-5 text-[11px] uppercase tracking-[0.4em] text-gold hover:bg-gold/10 transition-colors">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gold/15 bg-charcoal-deep pt-20 pb-10 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4">
                <img src={LOGO} alt="Wahh Punjab" width={72} height={72} loading="lazy" className="size-16 rounded-full object-cover ring-1 ring-gold/40 shadow-ember" />
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
                <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="hover:text-gold transition-colors">{PHONE}</a><br />
                Swiggy · Zomato
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[9px] uppercase tracking-[0.4em] text-ivory/30">© Wahh Punjab Restaurant · All Rights Reserved</p>
            <p className="text-[9px] uppercase tracking-[0.4em] text-ivory/30">GST Extra</p>
          </div>
        </div>
      </footer>

      {/* ===== Sticky Cart FAB (mobile) ===== */}
      {cart.count > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 bg-gold text-charcoal-deep px-5 py-3.5 text-[11px] uppercase tracking-[0.3em] shadow-ember hover:bg-gold-light transition-all"
        >
          <span className="font-bold">{cart.count}</span>
          <span>View Cart · ₹{cart.total}</span>
        </button>
      )}

      {/* ===== Cart Drawer ===== */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} />
    </div>
  );
}

/* ---------- Menu Section ---------- */
function MenuSection({ onAdd }: { onAdd: (item: MenuItem, vIndex?: number) => void }) {
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
    const map = new Map<string, MenuItem[]>();
    for (const m of filtered) {
      if (!map.has(m.category)) map.set(m.category, []);
      map.get(m.category)!.push(m);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <section id="menu" className="relative py-24 lg:py-32 px-6 border-y border-gold/10 overflow-hidden">
      <Environment image={bgMenuTable} overlay="dark" parallax={0.08} tint="amber" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-12" data-reveal>
          <Eyebrow>The Full Menu · Order Online</Eyebrow>
          <h2 className="mt-6 editorial text-5xl sm:text-6xl lg:text-7xl text-balance leading-tight text-gold-shimmer">
            Every dish. Tap to order.
          </h2>
          <p className="mt-4 text-ivory/60 quote-serif italic">{menu.length} dishes · {categories.length} sections · Free delivery within 3 KM</p>
        </div>

        {/* Controls */}
        <div className="sticky top-16 z-30 -mx-6 px-6 py-4 bg-charcoal-deep/90 backdrop-blur-xl border-y border-gold/15">
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
              <label className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ivory/70 cursor-pointer select-none">
                <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} className="accent-green-500" />
                Veg only
              </label>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:thin]">
              {(["All", ...categories] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`shrink-0 px-3.5 py-2 text-[10px] uppercase tracking-[0.28em] border transition-colors ${
                    active === c
                      ? "bg-gold text-charcoal-deep border-gold"
                      : "border-gold/25 text-ivory/70 hover:border-gold/60 hover:text-gold"
                  }`}
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
                    className="group bg-charcoal/60 border border-gold/15 hover:border-gold/45 p-4 sm:p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-ember"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 inline-block size-3 border ${m.veg ? "border-green-500" : "border-red-500"} p-0.5`}
                        aria-label={m.veg ? "Vegetarian" : "Non-vegetarian"}
                      >
                        <span className={`block size-full rounded-full ${m.veg ? "bg-green-500" : "bg-red-500"}`} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="editorial text-lg text-ivory leading-tight">{m.name}</h4>
                        </div>
                        {m.desc && (
                          <p className="mt-1 text-xs text-ivory/55 quote-serif italic">{m.desc}</p>
                        )}
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {m.variants.map((v, idx) => (
                            <button
                              key={v.label}
                              onClick={() => onAdd(m, idx)}
                              className="inline-flex items-center gap-2 border border-gold/30 px-3 py-1.5 text-xs text-ivory hover:bg-gold hover:text-charcoal-deep transition-colors"
                              aria-label={`Add ${m.name} ${v.label} ₹${v.price}`}
                            >
                              {m.variants.length > 1 && (
                                <span className="text-[9px] uppercase tracking-[0.25em] text-gold/80 group-hover:text-charcoal-deep">{v.label}</span>
                              )}
                              <span className="text-glow-amber font-medium">₹{v.price}</span>
                              <span className="text-gold">+</span>
                            </button>
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

/* ---------- Cart Drawer ---------- */
function CartDrawer({
  open,
  onClose,
  cart,
}: {
  open: boolean;
  onClose: () => void;
  cart: ReturnType<typeof useCart>;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const sendOrder = () => {
    if (cart.lines.length === 0) return;
    const lines = cart.lines
      .map((l) => `• ${l.name}${l.variant !== "Regular" ? ` (${l.variant})` : ""} × ${l.qty} — ₹${l.price * l.qty}`)
      .join("%0A");
    const total = `Total: ₹${cart.total}`;
    const customer = `Name: ${name || "—"}%0APhone: ${phone || "—"}%0AAddress: ${address || "—"}`;
    const msg = `*New Order — Wahh Punjab*%0A%0A${lines}%0A%0A${total}%0A%0A${customer}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-charcoal-deep/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={`fixed top-0 right-0 z-[90] h-full w-full sm:w-[440px] bg-charcoal border-l border-gold/25 shadow-luxe transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"} flex flex-col`}
        aria-label="Cart"
      >
        <header className="flex items-center justify-between p-5 border-b border-gold/15">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Your Order</div>
            <div className="editorial text-xl text-ivory">{cart.count} {cart.count === 1 ? "item" : "items"}</div>
          </div>
          <button onClick={onClose} className="text-ivory/60 hover:text-gold text-2xl leading-none" aria-label="Close cart">×</button>
        </header>

        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {cart.lines.length === 0 && (
            <p className="text-center text-ivory/50 quote-serif italic py-16">Your cart is empty. Pick something from the menu.</p>
          )}
          {cart.lines.map((l) => (
            <div key={l.key} className="flex items-start gap-3 border border-gold/15 p-3">
              <div className="flex-1 min-w-0">
                <div className="text-sm text-ivory">{l.name}</div>
                {l.variant !== "Regular" && (
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold/70 mt-0.5">{l.variant}</div>
                )}
                <div className="text-xs text-ivory/60 mt-1">₹{l.price} each</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => cart.setQty(l.key, l.qty - 1)} className="size-7 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal-deep transition-colors">−</button>
                <span className="w-6 text-center text-sm text-ivory">{l.qty}</span>
                <button onClick={() => cart.setQty(l.key, l.qty + 1)} className="size-7 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal-deep transition-colors">+</button>
              </div>
              <div className="w-16 text-right text-sm text-glow-amber">₹{l.price * l.qty}</div>
            </div>
          ))}
        </div>

        {cart.lines.length > 0 && (
          <div className="border-t border-gold/15 p-5 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="bg-charcoal-deep/60 border border-gold/20 px-3 py-2 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" inputMode="tel" className="bg-charcoal-deep/60 border border-gold/20 px-3 py-2 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none" />
            </div>
            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address (or 'Takeaway')" className="w-full bg-charcoal-deep/60 border border-gold/20 px-3 py-2 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none" />
            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Total</span>
              <span className="editorial text-2xl text-gold-shimmer">₹{cart.total}</span>
            </div>
            <button
              onClick={sendOrder}
              className="w-full bg-gold text-charcoal-deep py-3.5 text-[11px] uppercase tracking-[0.4em] font-medium hover:bg-gold-light transition-colors shadow-ember"
            >
              Send Order via WhatsApp →
            </button>
            <button onClick={cart.clear} className="w-full text-[10px] uppercase tracking-[0.35em] text-ivory/50 hover:text-gold py-1">Clear cart</button>
            <p className="text-center text-[9px] uppercase tracking-[0.3em] text-ivory/35">Or call {PHONE} · GST extra</p>
          </div>
        )}
      </aside>
    </>
  );
}
