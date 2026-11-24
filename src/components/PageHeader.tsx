import { Link, NavLink } from "react-router";

import { MobileNavigation } from "./MobileNavigation";

export function PageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-[#176b97] text-white shadow-sm">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
        <Link to="/" aria-label="Himalayan Cafe home">
          <img
            src="/images/himalayan-cafe-logo.png"
            alt="Himalayan Cafe"
            className="h-[72px] w-auto brightness-0 invert md:h-[82px]"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-[0.68rem] font-bold tracking-[0.16em] uppercase md:flex">
          {[
            ["Home", "/"],
            ["Menu", "/menu"],
            ["Gallery", "/gallery"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `border-b py-2 transition ${
                  isActive
                    ? "border-[#ffe06a] text-[#ffe06a]"
                    : "border-transparent text-white/75 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link className="text-white/75 transition hover:text-white" to="/#visit">
            Visit
          </Link>
        </nav>
        <a
          href="https://himalayancafeboulder.cloveronline.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#ffd84d] px-5 py-2.5 text-[0.68rem] font-bold tracking-[0.16em] text-[#164867] uppercase transition hover:bg-white md:inline-flex"
        >
          Order online
        </a>
        <MobileNavigation />
      </div>
    </header>
  );
}
