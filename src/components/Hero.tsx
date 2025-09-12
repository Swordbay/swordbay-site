// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0B0C0E]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">Swordbay — Quant Systems & Research</h2>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-white/80">
            Proprietary, research-driven engineering: execution, data, ML, and risk.
          </p>
        </div>
      </div>
    </section>
  );
}
