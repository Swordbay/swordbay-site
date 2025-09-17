import Hero from "@/components/Hero";
import HighlightBar from "@/components/HighlightBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      <div className="pt-16">
        <Hero />
        <HighlightBar />
      </div>
    </main>
  );
}
