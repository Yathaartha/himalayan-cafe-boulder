import { useState } from "react";
import { Link } from "react-router";

import { MobileNavigation } from "./components/MobileNavigation";
import { categories, menuItems, type Category } from "./data/menu";

function Arrow() {
  return (
    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("Specials");
  const visibleItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#16324a]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 text-white">
        <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <Link to="/" aria-label="Himalayan Cafe home">
            <img
              src="/images/himalayan-cafe-logo.png"
              alt="Himalayan Cafe"
              className="h-[72px] w-auto brightness-0 invert drop-shadow-sm md:h-[82px]"
            />
          </Link>
          <nav className="hidden items-center gap-8 text-[0.7rem] font-semibold tracking-[0.18em] uppercase md:flex">
            <a className="nav-link" href="#story">
              Our story
            </a>
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
            <a className="nav-link" href="#visit">
              Visit
            </a>
          </nav>
          <a
            href="https://himalayancafeboulder.cloveronline.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/60 px-5 py-2.5 text-[0.68rem] font-bold tracking-[0.16em] uppercase transition hover:border-[#ffe06a] hover:bg-[#ffe06a] hover:text-[#164867] md:inline-flex"
          >
            Order online
          </a>
          <MobileNavigation />
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-[760px] items-end bg-[#164867] md:min-h-[820px]"
        >
          <img
            src="/images/himalayan-cafe-hero.jpg"
            alt="Masala chai, a berry crepe, and Himalayan peaks at sunrise"
            width={1536}
            height={1024}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute right-6 top-28 hidden items-center gap-3 text-white/70 md:flex lg:right-14">
            <span className="h-px w-14 bg-current" />
            <span className="text-[0.62rem] font-semibold tracking-[0.22em] uppercase">
              At 6,500 ft
            </span>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 text-white md:px-10 md:pb-24 lg:px-16">
            <div className="max-w-[700px]">
              <p className="mb-6 flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.24em] text-[#ffe06a] uppercase">
                <span className="h-px w-8 bg-current" />
                A gathering place, inspired by the peaks
              </p>
              <h1 className="font-display text-[clamp(4.5rem,9.5vw,9rem)] leading-[0.78] tracking-[-0.055em]">
                Warmth at
                <span className="block italic text-[#dff4ff]">every altitude.</span>
              </h1>
              <div className="mt-9 flex max-w-xl flex-col gap-7 border-t border-white/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-sm leading-6 text-white/78">
                  Nepalese soul, mountain-grown coffee, and food made slowly — served from first
                  light.
                </p>
                <Link
                  to="/menu"
                  className="group flex shrink-0 items-center gap-4 text-xs font-bold tracking-[0.18em] uppercase"
                >
                  Explore the menu
                  <span className="grid size-10 place-items-center rounded-full bg-[#ffd84d] text-lg text-[#164867]">
                    <Arrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pattern-band relative z-20 border-y-4 border-[#58add6] bg-[#ffd84d] py-3 text-[#164867]">
          <div className="pattern-track flex min-w-max items-center gap-8 text-[0.65rem] font-bold tracking-[0.25em] uppercase">
            {[0, 1].flatMap((copy) =>
              [
                "Coffee from the foothills",
                "Masala chai",
                "Made in small batches",
                "Open daily",
              ].map((text) => (
                <span
                  key={`${copy}-${text}`}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex items-center gap-8"
                >
                  {text}
                  <span className="text-lg">◆</span>
                </span>
              )),
            )}
          </div>
        </section>

        <section id="story" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Born in the mountains</p>
              <h2 className="font-display mt-5 max-w-md text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Hospitality is our highest tradition.
              </h2>
            </div>
            <div className="grid gap-8 border-l border-[#b9dff2] pl-7 md:grid-cols-2 md:pl-12">
              <p className="text-[1.05rem] leading-8 text-[#31546c]">
                In Nepal, a cup of chiya is more than a drink. It is a welcome, a pause, and a
                promise that there is always room at the table.
              </p>
              <div>
                <p className="text-[0.92rem] leading-7 text-[#58768a]">
                  We pair that generous spirit with thoughtfully sourced beans, local produce, and
                  recipes carried across generations.
                </p>
                <a
                  href="#visit"
                  className="group mt-6 inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#1475a5] uppercase"
                >
                  Find our café <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-[#e9f7ff] px-5 py-24 md:px-10 md:py-28 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">From our kitchen</p>
                <h2 className="font-display mt-4 text-5xl tracking-tight md:text-7xl">
                  A taste of home.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#58768a]">
                Explore our complete all-day menu of Nepalese bites, brunch favorites, coffee, chai
                and chilled drinks.
              </p>
            </div>

            <div className="no-scrollbar mt-12 flex gap-2 overflow-x-auto border-b border-[#b9dff2] pb-5">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-[0.68rem] font-bold tracking-[0.14em] uppercase transition ${
                    activeCategory === category
                      ? "bg-[#197ead] text-white"
                      : "border border-[#9bcde4] bg-white/60 text-[#31546c] hover:border-[#197ead] hover:text-[#197ead]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-[0.65rem] font-bold tracking-[0.16em] text-[#58768a] uppercase">
              <span>{activeCategory === "All" ? "Complete menu" : activeCategory}</span>
              <span>
                {visibleItems.length} {visibleItems.length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <article
                  key={item.name}
                  className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-sm border border-[#c8e5f3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8fcbe7] hover:shadow-[0_18px_40px_rgba(23,107,151,0.1)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#ffd84d] transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[0.58rem] font-bold tracking-[0.18em] text-[#197ead] uppercase">
                      {item.category}
                    </p>
                    <span className="font-display shrink-0 text-xl italic text-[#176b97]">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-2xl leading-tight">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#58768a]">{item.description}</p>
                  {item.note && (
                    <p className="mt-auto pt-5 text-[0.65rem] font-semibold leading-5 tracking-[0.08em] text-[#176b97] uppercase">
                      <span className="mr-2 inline-block size-1.5 rounded-full bg-[#ffd84d]" />
                      {item.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
            {activeCategory === "Coffee" && (
              <aside className="mt-8 grid overflow-hidden rounded-sm border border-[#8fcbe7] bg-white md:grid-cols-[0.7fr_1fr_1fr]">
                <div className="flex items-center bg-[#176b97] p-6 text-white">
                  <div>
                    <p className="text-[0.58rem] font-bold tracking-[0.18em] text-[#ffe06a] uppercase">
                      Make it yours
                    </p>
                    <h3 className="font-display mt-2 text-2xl">Coffee modifiers</h3>
                  </div>
                </div>
                <div className="border-b border-[#c8e5f3] p-6 md:border-b-0 md:border-r">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-xl">Custom Syrup</h4>
                    <span className="font-display italic text-[#176b97]">+$0.75</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#58768a]">
                    Brown sugar, vanilla, lavender, ube, peppermint or caramel.
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-xl">Alternative Milk</h4>
                    <span className="font-display italic text-[#176b97]">+$0.75</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#58768a]">
                    Oat, almond, soy or 2% milk. Large size +$0.75.
                  </p>
                </div>
              </aside>
            )}
            <p className="mt-10 border-t border-[#b9dff2] pt-6 text-center text-xs font-semibold tracking-[0.12em] text-[#31546c] uppercase">
              Please let our team know if you have any food allergies.
            </p>
          </div>
        </section>

        <section
          id="visit"
          className="relative bg-[#176b97] px-5 py-24 text-white md:px-10 md:py-28 lg:px-16"
        >
          <div className="mandala absolute -right-32 -top-32 size-[500px] rounded-full opacity-20" />
          <div className="relative mx-auto grid max-w-[1312px] gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.23em] text-[#ffe06a] uppercase">
                Come sit awhile
              </p>
              <h2 className="font-display mt-5 max-w-2xl text-6xl leading-[0.9] tracking-tight md:text-8xl">
                Your table in the clouds.
              </h2>
            </div>
            <div className="grid gap-8 border-t border-white/25 pt-7 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div>
                <p className="footer-label">Find us</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  5290 Arapahoe Ave, Suite C
                  <br />
                  Boulder, CO 80303
                </p>
              </div>
              <div>
                <p className="footer-label">Hours</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Monday–Friday: 6:00 am–7:00 pm
                  <br />
                  Saturday–Sunday: 8:00 am–8:00 pm
                </p>
              </div>
              <div>
                <p className="footer-label">Say hello</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  hello@himalayancafe.co
                  <br />
                  (720) 710-6001
                </p>
              </div>
              <a
                href="#home"
                className="group flex items-end gap-3 text-xs font-bold tracking-[0.15em] uppercase"
              >
                Back to the peak <Arrow />
              </a>
            </div>
          </div>
          <div className="relative mx-auto mt-20 flex max-w-[1312px] items-center justify-between border-t border-white/15 pt-6 text-[0.6rem] tracking-[0.16em] text-white/45 uppercase">
            <span>Himalayan Café</span>
            <span>Made with warmth</span>
          </div>
        </section>
      </main>
    </div>
  );
}
