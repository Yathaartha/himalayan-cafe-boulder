import { Link } from "react-router";

import { PageHeader } from "../components/PageHeader";
import { SiteFooter } from "../components/SiteFooter";

const galleryItems = [
  {
    src: "/images/cafe-interior.jpg",
    alt: "Sunlit Himalayan Cafe interior with mountain artwork",
    label: "Our Boulder home",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/clover/storefront-hero.jpg",
    alt: "Himalayan chai and a fruit crepe against a mountain landscape",
    label: "Himalayan flavors",
    className: "",
  },
  {
    src: "/images/clover/nepalese-chicken-crepe.jpg",
    alt: "Nepalese chicken crepe with sauces and pickles",
    label: "Nepalese chicken crepe",
    className: "",
  },
  {
    src: "/images/clover/premium-pistachio-waffle.jpg",
    alt: "Premium pistachio waffle with fruit and ice cream",
    label: "Premium pistachio waffle",
    className: "md:col-span-2",
  },
  {
    src: "/images/clover/dirty-himalayan-chai.jpg",
    alt: "Dirty Himalayan chai with cream and spice",
    label: "Dirty Himalayan chai",
    className: "",
  },
  {
    src: "/images/clover/nepalese-egg-mash.jpg",
    alt: "Nepalese egg mash breakfast sandwich",
    label: "Nepalese egg mash",
    className: "",
  },
  {
    src: "/images/clover/iced-fruit-matcha.jpg",
    alt: "Colorful iced fruit matcha",
    label: "Iced fruit matcha",
    className: "md:col-span-2",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-[#16324a]">
      <PageHeader />
      <main>
        <section className="px-5 pb-14 pt-20 md:px-10 md:pb-20 md:pt-24 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <p className="eyebrow">Life at Himalayan</p>
            <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <h1 className="font-display text-6xl leading-[0.88] tracking-tight md:text-8xl">
                Come for the chai.
                <span className="block italic text-[#197ead]">Stay for the feeling.</span>
              </h1>
              <p className="max-w-md text-base leading-8 text-[#58768a]">
                A glimpse inside our café, our kitchen, and the everyday moments that make this a
                gathering place.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f7ff] px-5 py-8 md:px-10 md:py-12 lg:px-16">
          <div className="mx-auto grid max-w-[1312px] auto-rows-[260px] gap-4 md:grid-cols-4">
            {galleryItems.map((item) => (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-sm bg-[#c9eafa] ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b3954]/85 to-transparent px-5 pb-5 pt-16">
                  <figcaption className="text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase">
                    {item.label}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className="px-5 py-24 text-center md:px-10 lg:px-16">
          <p className="eyebrow justify-center before:hidden">Good food · Higher vibes</p>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Your next favorite table is waiting.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="rounded-full bg-[#176b97] px-7 py-3.5 text-xs font-bold tracking-[0.14em] text-white uppercase transition hover:bg-[#164867]"
            >
              Explore the menu
            </Link>
            <a
              href="https://himalayancafeboulder.cloveronline.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#ffd84d] px-7 py-3.5 text-xs font-bold tracking-[0.14em] text-[#164867] uppercase transition hover:bg-[#ffe675]"
            >
              Order online
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
