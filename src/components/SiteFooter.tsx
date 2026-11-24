import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#176b97] px-5 py-16 text-white md:px-10 lg:px-16">
      <div className="mandala absolute -right-40 -top-48 size-[500px] rounded-full opacity-15" />
      <div className="relative mx-auto grid max-w-[1312px] gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <img
            src="/images/himalayan-cafe-logo.png"
            alt="Himalayan Cafe"
            loading="lazy"
            className="h-28 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Nepalese flavors, global comfort, and a warm table in Boulder.
          </p>
        </div>
        <div className="grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-3 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <div>
            <p className="footer-label">Find us</p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              5290 Arapahoe Ave, Suite C
              <br />
              Boulder, CO 80303
            </p>
          </div>
          <div>
            <p className="footer-label">Hours</p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Mon–Fri: 6am–7pm
              <br />
              Sat–Sun: 8am–8pm
            </p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              <Link className="hover:text-white" to="/menu">
                Menu
              </Link>
              <Link className="hover:text-white" to="/gallery">
                Gallery
              </Link>
              <a className="hover:text-white" href="tel:+17207106001">
                (720) 710-6001
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
