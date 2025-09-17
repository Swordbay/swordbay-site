import Link from "next/link";
import { home } from "@/content/home";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0B0C0E]/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between text-white">
        <Link href="/" className="font-semibold tracking-wide">Swordbay</Link>
        <div className="flex items-center gap-5">
          {home.nav.map((n) => (
            <Link key={n.path} href={n.path} className="hover:opacity-80">
              <span>{n.en}</span>
              <span className="ml-1 text-xs opacity-70">{n.jp}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
