import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#e9f7ff] px-5 text-center text-[#16324a]">
      <div>
        <p className="text-xs font-bold tracking-[0.2em] text-[#197ead] uppercase">
          404 · Off trail
        </p>
        <h1 className="font-display mt-5 text-6xl">This peak can’t be found.</h1>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#176b97] px-7 py-3.5 text-xs font-bold tracking-[0.14em] text-white uppercase"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
