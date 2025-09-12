import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-[#E9ECEF]">
      {/* ===== DEBUG 标题：一定要能看到 ===== */}
      <section className="py-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">DEBUG: PAGE.TSX IS LIVE</h1>
        <p className="text-white/70">If you can read this, page.tsx is the one being rendered.</p>
      </section>

      {/* Hero（视频区） */}
      <Hero />

      {/* Solutions 卡片区 */}
      <Solutions />
    </main>
  );
}
