export function CoffeeModifiers() {
  return (
    <aside className="grid overflow-hidden rounded-sm border border-[#8fcbe7] bg-white md:grid-cols-[0.7fr_1fr_1fr]">
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
  );
}
