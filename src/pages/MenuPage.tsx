import { useState } from "react";

import { CoffeeModifiers } from "../components/CoffeeModifiers";
import { PageHeader } from "../components/PageHeader";
import { SiteFooter } from "../components/SiteFooter";
import { categories, menuItems, type Category } from "../data/menu";

const cloverItemImages: Record<string, string> = {
  "Nepalese Egg Mash": "/images/clover/nepalese-egg-mash.jpg",
  "Nepalese Chicken Crepe": "/images/clover/nepalese-chicken-crepe.jpg",
  "Classic Ham and Cheese Sandwich": "/images/clover/classic-ham-cheese-sub.jpg",
  "Bagel with Cream Cheese": "/images/clover/classic-bagel.jpg",
  "Bagel Sandwich": "/images/clover/bagel-sandwich.jpg",
  "Premium Pistachio Crepe": "/images/clover/pistacchio-fruit-crepe.jpg",
  "Chocolate Waffle": "/images/clover/chocolate-waffle.jpg",
  "Tropical Waffle": "/images/clover/tropical-waffle.jpg",
  "Premium Pistachio Waffle": "/images/clover/premium-pistachio-waffle.jpg",
  Parfait: "/images/clover/parfait.jpg",
  Espresso: "/images/clover/espresso.jpg",
  Americano: "/images/clover/americano.jpg",
  "Cafe Macchiato": "/images/clover/traditional-cafe-macchiato.jpg",
  Cortado: "/images/clover/cortado.jpg",
  Cappuccino: "/images/clover/cappuccino.jpg",
  "Flat White": "/images/clover/flat-white.jpg",
  Latte: "/images/clover/latte.jpg",
  "Hot Chocolate": "/images/clover/hot-chocolate.jpg",
  "Cold Brew": "/images/clover/cold-brew.jpg",
  "Cafe au Lait": "/images/clover/cafe-au-lait.jpg",
  "Coffee of the Day": "/images/clover/coffee-of-the-day.jpg",
  "Black Tea": "/images/clover/darjeling-tea.jpg",
  "Herbal Tea": "/images/clover/herbal-chamomile-tea.jpg",
  "Dirty Himalayan Chai": "/images/clover/dirty-himalayan-chai.jpg",
  "Dirty Matcha Latte": "/images/clover/dirty-matcha-latte.jpg",
  "Salted Caramel Latte": "/images/clover/salted-caramel-latte.jpg",
  "Iced Matcha": "/images/clover/iced-fruit-matcha.jpg",
};

const categoryImages: Record<Exclude<Category, "All">, string[]> = {
  "Himalayan Bites": [
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85",
  ],
  "Brunch & Sweets": [
    "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
  ],
  Coffee: [
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=900&q=85",
  ],
  Teas: [
    "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",
  ],
  Specials: [
    "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",
  ],
  "Cold Drinks": [
    "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Specials");
  const visibleItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#e9f7ff] text-[#16324a]">
      <PageHeader />
      <main>
        <section className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-24 lg:px-16">
          <div className="absolute -right-28 -top-44 size-[480px] rounded-full bg-[#ffd84d]/35 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1312px] gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="eyebrow">All day menu</p>
              <h1 className="font-display mt-5 text-6xl leading-[0.88] tracking-tight md:text-8xl">
                Made for your
                <span className="block italic text-[#197ead]">mountain moment.</span>
              </h1>
            </div>
            <p className="max-w-md text-base leading-8 text-[#58768a]">
              Nepalese comfort food, thoughtful coffee, vibrant matcha and sweet cravings — all
              prepared fresh in our Boulder café.
            </p>
          </div>
        </section>

        <section className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-[#b9dff2] pb-5">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-[0.68rem] font-bold tracking-[0.14em] uppercase transition ${
                    activeCategory === category
                      ? "bg-[#197ead] text-white"
                      : "border border-[#9bcde4] bg-white text-[#31546c] hover:border-[#197ead]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between text-[0.65rem] font-bold tracking-[0.16em] text-[#58768a] uppercase">
              <span>{activeCategory === "All" ? "Complete menu" : activeCategory}</span>
              <span>{visibleItems.length} items</span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item, index) => {
                const images = categoryImages[item.category];
                const image = cloverItemImages[item.name] ?? images[index % images.length];
                return (
                  <article
                    key={item.name}
                    className="group overflow-hidden rounded-sm border border-[#c8e5f3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,107,151,0.13)]"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-[#c9eafa]">
                      <img
                        src={image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[0.58rem] font-bold tracking-[0.18em] text-[#197ead] uppercase">
                            {item.category}
                          </p>
                          <h2 className="font-display mt-2 text-2xl leading-tight">{item.name}</h2>
                        </div>
                        <span className="font-display shrink-0 text-xl italic text-[#176b97]">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[#58768a]">{item.description}</p>
                      {item.note && (
                        <p className="mt-5 border-t border-[#d8ecf5] pt-4 text-[0.62rem] font-semibold tracking-[0.08em] text-[#176b97] uppercase">
                          {item.note}
                        </p>
                      )}
                      {item.category === "Coffee" && (
                        <p className="mt-5 flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.1em] text-[#176b97] uppercase">
                          <span className="size-2 rounded-full bg-[#ffd84d]" />
                          Syrup & milk modifiers available
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {activeCategory === "Coffee" && (
              <div className="mt-10">
                <CoffeeModifiers />
              </div>
            )}

            <p className="mt-12 border-t border-[#b9dff2] pt-6 text-center text-xs font-semibold tracking-[0.12em] text-[#31546c] uppercase">
              Please let our team know if you have any food allergies.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
