import { home } from "@/content/home";

export default function HighlightBar() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500/70 [--tw-gradient-to:theme(colors.pink.500/.35)] py-6">
      <div className="mx-auto max-w-6xl px-6 text-center text-white">
        {/* JP */}
        <div className="mt-3 space-y-1 text-sm md:text-base">
          {home.highlightBar.jp.map((line, i) => (
            <p key={`jp-${i}`} className="opacity-90">{line}</p>
          ))}
        </div>
        {/* EN */}
        <div className="space-y-1 text-sm md:text-base">
          {home.highlightBar.en.map((line, i) => (
            <p key={`en-${i}`} className="opacity-95">{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
