import { createFileRoute } from "@tanstack/react-router";
import heroPlatter from "@/assets/hero-platter.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishKulcha from "@/assets/dish-kulcha.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import heritageImg from "@/assets/heritage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wahh Punjab — Heritage Punjabi Fine Dining" },
      {
        name: "description",
        content:
          "Wahh Punjab — a regal tribute to the five rivers. Heritage Punjabi cuisine, tandoor-charred over hand-cured coals, served in matte black and gold.",
      },
      { property: "og:title", content: "Wahh Punjab — Heritage Punjabi Fine Dining" },
      {
        property: "og:description",
        content: "Heritage Punjabi cuisine reimagined as fine dining. Reserve your table.",
      },
      { property: "og:image", content: heroPlatter },
      { name: "twitter:image", content: heroPlatter },
    ],
  }),
  component: Index,
});

const dishes = [
  {
    name: "Dal Sultan-e-Khaas",
    tag: "Signature",
    desc: "Slow-cooked for 48 hours over hand-cured charcoal embers. Finished with cultured cream and a single leaf of 24-karat gold.",
    price: "₹1,250",
    img: dishDal,
  },
  {
    name: "Truffle Ghee Kulcha",
    tag: "Hearth",
    desc: "Hand-stretched dough kissed by the tandoor, brushed with cultured ghee and shaved Italian black winter truffle.",
    price: "₹850",
    img: dishKulcha,
  },
  {
    name: "Zaffrani Parda Biryani",
    tag: "Royal",
    desc: "Aged basmati layered with Kashmiri saffron and slow-braised goat shoulder. Sealed under a dough crown, broken tableside.",
    price: "₹2,400",
    img: dishBiryani,
  },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground antialiased">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-gold/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-gold text-lg font-bold tracking-[0.3em]">W·P</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Est. MCMLXXXII
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.3em] text-foreground/70">
            <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
            <a href="#heritage" className="hover:text-gold transition-colors">Heritage</a>
            <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
            <a href="#visit" className="hover:text-gold transition-colors">Visit</a>
          </div>
          <a
            href="#reserve"
            className="text-[10px] uppercase tracking-[0.3em] border border-gold/40 px-4 py-2 text-gold hover:bg-gold hover:text-background transition-colors"
          >
            Reserve
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow -z-10" aria-hidden />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-ember/15 blur-[120px] animate-ember -z-10"
          aria-hidden
        />

        <div className="mx-auto max-w-5xl flex flex-col items-center text-center animate-fade-up">
          <span className="text-[10px] uppercase tracking-[0.6em] text-gold/80 mb-6">
            ✦ A Royal Punjabi Repast ✦
          </span>

          <h1 className="font-display font-black leading-[0.95] tracking-tight mb-6 text-balance">
            <span className="block text-6xl md:text-8xl text-gold-shimmer text-glow-gold">WAHH</span>
            <span className="block text-5xl md:text-7xl italic font-serif text-glow-ember mt-2">
              Punjab
            </span>
          </h1>

          <p className="max-w-md md:max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed font-serif italic text-pretty mb-10">
            A sensory pilgrimage through the five rivers — where ancestral fire,
            hand-pounded spice and modern restraint meet on a single plate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#reserve"
              className="group inline-flex items-center gap-3 bg-gold text-background px-8 py-4 text-[11px] uppercase tracking-[0.35em] font-medium shadow-gold-soft hover:bg-gold-light transition-colors"
            >
              Reserve a Table
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-[11px] uppercase tracking-[0.35em] text-gold hover:bg-gold/10 transition-colors"
            >
              View The Menu
            </a>
          </div>

          {/* Hero hero plate */}
          <div className="relative mt-16 w-full max-w-2xl">
            <div className="absolute inset-0 rounded-full bg-ember/40 blur-3xl animate-ember -z-10" aria-hidden />
            <img
              src={heroPlatter}
              alt="Signature Wahh Punjab tasting platter with gold leaf, glowing ember backlight"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-full shadow-ember"
            />
          </div>

          <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-foreground/40">
            <span className="h-px w-12 bg-gold/40" />
            Michelin Recommended · 2024
            <span className="h-px w-12 bg-gold/40" />
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section id="heritage" className="relative py-32 px-6 border-t border-gold/10">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={heritageImg}
              alt="A glowing tandoor in a black-and-gold fine dining kitchen"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-auto shadow-ember"
            />
            <div className="absolute -inset-4 border border-gold/20 -z-10" aria-hidden />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 block">
              Our Heritage
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-gold-shimmer leading-tight mb-8 text-balance">
              Forty Years of Fire & Spice
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6 text-lg font-serif">
              From a single charcoal pit in Amritsar, we have carried the soul of the
              five rivers across four decades and three continents — preserving the
              recipes our grandmothers whispered, while polishing every plate to the
              standard of the world's finest dining rooms.
            </p>
            <p className="text-foreground/60 leading-relaxed italic font-serif">
              "We do not cook for the hunger of the body, but for the memory of the land."
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-gold/70">
              — Chef Amrit Singh, Custodian
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gold/15 pt-8">
              {[
                { n: "48h", l: "Marinade" },
                { n: "27", l: "Spices Daily" },
                { n: "3°", l: "Continents" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold text-glow-gold mb-1">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU / JEWELS */}
      <section id="menu" className="relative py-32 px-6 bg-card/40 border-y border-gold/10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 hairline-gold opacity-40" />
            <h2 className="font-display text-xs uppercase tracking-[0.5em] text-gold whitespace-nowrap">
              The Jewels of the Menu
            </h2>
            <div className="h-px flex-1 hairline-gold opacity-40" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {dishes.map((d, i) => (
              <article
                key={d.name}
                className="group relative bg-background/60 border border-gold/15 backdrop-blur-sm transition-all duration-700 hover:border-gold/40 hover:-translate-y-1 hover:shadow-ember"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.3em] text-background bg-gold px-2 py-1">
                    {d.tag}
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-3 gap-4">
                    <h3 className="font-display text-xl text-gold-light">{d.name}</h3>
                    <span className="text-glow-ember font-display text-lg whitespace-nowrap">
                      {d.price}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed font-serif italic">
                    {d.desc}
                  </p>
                  <div className="mt-6 text-[9px] uppercase tracking-[0.4em] text-foreground/30">
                    No. {String(i + 1).padStart(2, "0")} / III
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#reserve"
              className="inline-block text-[11px] uppercase tracking-[0.35em] text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors"
            >
              Request the Full Tasting Menu →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative py-32 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 block">
            The Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-gold-shimmer mb-16 text-balance">
            Three Courses of Ceremony
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                t: "Welcome",
                d: "A copper bowl of rose-petal water. A glass of saffron sparkling wine. The hush of velvet curtains drawing shut.",
              },
              {
                t: "Theatre",
                d: "Seven plates from the tandoor brought tableside in glowing brass — each unveiled with a story and a spice.",
              },
              {
                t: "Farewell",
                d: "Hand-pulled paan, a sip of 25-year aged whisky and a parting tin of cardamom mithai to carry home.",
              },
            ].map((s, i) => (
              <div key={s.t} className="relative p-8 border border-gold/15 group hover:border-gold/40 transition-colors">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-3 font-display text-gold text-xs tracking-[0.4em]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl text-gold-light mb-4 mt-2 text-glow-gold">{s.t}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed font-serif italic">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section id="reserve" className="relative py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative border border-gold/30 p-10 md:p-16 text-center bg-card/50 backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-6 font-display text-gold tracking-[0.5em] text-[10px]">
              ✦ RESERVATIONS ✦
            </div>
            <div className="absolute inset-0 bg-ember/5 blur-3xl -z-10" />

            <h2 className="font-display text-4xl md:text-5xl text-gold-shimmer mb-6 text-glow-gold text-balance">
              An Evening of Splendor
            </h2>
            <p className="text-foreground/70 font-serif italic text-lg mb-10 max-w-xl mx-auto">
              Seatings are limited to thirty-six guests an evening. We invite you to
              join us for a feast that has been four decades in the making.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8"
            >
              <input
                type="text"
                placeholder="Full name"
                className="bg-background/60 border border-gold/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Contact number"
                className="bg-background/60 border border-gold/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none transition-colors"
              />
              <input
                type="date"
                className="bg-background/60 border border-gold/20 px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors"
              />
              <select className="bg-background/60 border border-gold/20 px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors">
                <option>Party of 2</option>
                <option>Party of 4</option>
                <option>Party of 6</option>
                <option>Private Dining (8+)</option>
              </select>
              <button
                type="submit"
                className="sm:col-span-2 bg-gold text-background py-4 font-display tracking-[0.4em] text-xs uppercase shadow-gold-soft hover:bg-gold-light transition-colors"
              >
                Confirm Reservation
              </button>
            </form>

            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              Or call us directly · +91 98100 00000
            </p>
          </div>
        </div>
      </section>

      {/* VISIT / FOOTER */}
      <footer id="visit" className="border-t border-gold/10 bg-background pt-20 pb-10 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="md:col-span-2">
              <div className="font-display text-3xl text-gold-shimmer mb-2">WAHH PUNJAB</div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 mb-6">
                Est. 1982 — The Legacy Lives On
              </p>
              <p className="font-serif italic text-foreground/60 max-w-sm leading-relaxed">
                A custodian of Punjab's culinary memory — one plate, one ember, one
                guest at a time.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Locate Us</h4>
              <address className="not-italic text-sm text-foreground/60 leading-relaxed font-serif">
                The Royal Pavilion<br />
                Lutyens' Quarter<br />
                New Delhi 110001
              </address>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Hours</h4>
              <p className="text-sm text-foreground/60 leading-relaxed font-serif">
                Tue — Sun<br />
                19:00 — 23:30<br />
                <span className="text-foreground/40">Closed Mondays</span>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] text-foreground/50">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">Journal</a>
              <a href="#" className="hover:text-gold transition-colors">Press</a>
            </div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-foreground/30">
              © MMXXIV · Wahh Punjab · All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
