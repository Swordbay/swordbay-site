// src/components/Solutions.tsx
import { CircuitBoard, Cloud, BrainCircuit, ShieldCheck, Infinity } from "lucide-react";

const solutions = [
  {
    title: "Quant System Design",
    jp: "取引所/証券会社UIを超える機能拡張。発注・管理・検証を一体化。",
    en: "Beyond broker UIs—integrated execution, portfolio control, and model validation.",
    icon: CircuitBoard,
  },
  {
    title: "Data & Cloud Analytics",
    jp: "時系列処理・特徴量抽出・ETL・可観測性。",
    en: "Time-series pipelines, feature engineering, ETL, and observability.",
    icon: Cloud,
  },
  {
    title: "AI & ML R&D",
    jp: "金融工学、ベイズ、Monte Carlo、強化学習。",
    en: "Financial engineering, Bayes, Monte Carlo, reinforcement learning.",
    icon: BrainCircuit,
  },
  {
    title: "Systems Consulting",
    jp: "低遅延・安定性・リスク制御のための基盤設計。",
    en: "Foundations for low latency, stability, and risk control.",
    icon: ShieldCheck,
  },
  {
    title: "Proprietary Ops",
    jp: "自己勘定によるモデル検証（外部資金は受け付けません）。",
    en: "Model validation using 100% proprietary capital (no external fundraising).",
    icon: Infinity,
  },
];

export default function Solutions() {
  return (
    <section className="py-16 bg-[#0B0C0E] text-[#E9ECEF]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-10">Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map(({ title, jp, en, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 p-6 hover:border-white/30 transition"
            >
              <Icon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm opacity-90">{jp}</p>
              <p className="text-sm opacity-70">{en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
