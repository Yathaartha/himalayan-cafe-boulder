import { useId, useState } from "react";
import { Link } from "react-router";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-11 items-center gap-3 rounded-full border border-white/60 px-4 text-[0.68rem] font-bold tracking-[0.14em] text-white uppercase transition hover:border-[#ffe06a] hover:text-[#ffe06a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe06a]"
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
        <span aria-hidden="true" className="relative block h-3.5 w-4">
          <span
            className={`absolute left-0 top-1 block h-px w-4 bg-current transition ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute bottom-0.5 left-0 block h-px w-4 bg-current transition ${
              isOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <nav
        id={menuId}
        aria-label="Mobile navigation"
        className={`absolute inset-x-0 top-full border-t border-white/15 bg-[#176b97] px-5 shadow-xl transition-[opacity,transform,visibility] duration-200 ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col py-4">
          {[
            ["Home", "/"],
            ["Menu", "/menu"],
            ["Gallery", "/gallery"],
            ["Visit", "/#visit"],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className="border-b border-white/12 py-4 text-sm font-semibold tracking-[0.12em] text-white/85 uppercase transition hover:pl-2 hover:text-[#ffe06a] focus-visible:text-[#ffe06a] focus-visible:outline-none"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://himalayancafeboulder.cloveronline.com/"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-4 rounded-full bg-[#ffd84d] px-6 py-3.5 text-center text-xs font-bold tracking-[0.14em] text-[#164867] uppercase transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Order online
          </a>
        </div>
      </nav>
    </div>
  );
}
