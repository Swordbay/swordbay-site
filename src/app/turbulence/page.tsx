// src/app/turbulence/page.tsx
"use client";

import Image from "next/image";

export default function TurbulencePage() {
  const Pillar = ({
    jp,
    en,
    descJp,
    descEn,
  }: {
    jp: string;
    en: string;
    descJp: string;
    descEn: string;
  }) => (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 md:p-6 hover:bg-white/[0.06] transition">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold">{jp}</h3>
      <p className="text-white/70 text-xs sm:text-sm">{en}</p>
      <p className="mt-3 text-[14px] sm:text-[15px] md:text-base leading-relaxed">{descJp}</p>
      <p className="mt-2 text-white/85 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
        {descEn}
      </p>
    </article>
  );

  return (
    <main className="min-h-screen bg-[#0B0C0E] text白 relative overflow-hidden overflow-x-clip">
      {/* 背景柔和色块（不会造成横向滚动） */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-pink-500/20" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-500/30 via-sky-500/25 to-indigo-600/20" />

      {/* 极淡点阵网格 */}
      <div className="pointer-events-none absolute inset-0 opacity-[.06] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.8)_1px,transparent_1.5px)] [background-size:24px_24px]" />

      {/* 头部：标题 + 展示图片 */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-8 md:pb-10">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[11px] sm:text-xs md:text-sm">
          Coming soon
        </span>

        <h1 className="mt-3 font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl">
          自研モデル「Turbulence」
        </h1>

        <p className="mt-2 text-white/80 text-[15px] sm:text-base md:text-[17px] leading-relaxed">
          金融市場の複雑性に対して、計測可能・可観測・保守容易であることを要件化した
          自律学習型の閉ループ・リサーチシステム。
        </p>
        <p className="text-white/65 text-xs sm:text-sm md:text-base leading-relaxed">
          “Turbulence” is a self-learning, closed-loop research system engineered for
          measurability, observability, and maintainability under market complexity.
        </p>

        {/* 封面图：渐变描边 + 玻璃底，改为 next/image */}
        <div className="mt-6">
          <div className="rounded-3xl p-[1.5px] bg-gradient-to-r from-indigo-500/60 via-fuchsia-500/50 to-sky-500/60">
            <div className="rounded-[22px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <div className="relative w-full aspect-video">
                <Image
                  src="/turbulence/cover.jpg"
                  alt="Turbulence cover"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 1000px, 100vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 彩色分隔细线 */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </section>

      {/* 概要 / Overview */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* 文本块：去掉 nowrap，防止撑宽 */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5 md:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">概要 / Overview</h2>
            <p className="mt-3 text-[15px] sm:text-[15.5px] md:text-base leading-relaxed">
              Turbulence は、縦型 AI モデルと数量的ルールを統合した
              <span className="sm:whitespace-nowrap md:whitespace-nowrap">
                「データ → 仮説 → 評価 → 改良 → 配置 → 監視」
              </span>
              の閉ループを中核に据え、観測可能性（Observability）とガバナンスを前提に設計されています。
              外部資金の運用や投資助言は行わず、自己勘定・研究用途に限ります。
            </p>
            <p className="mt-2 text白/85 text-[14px] sm:text-[15px] md:text-[15.5px] leading-relaxed">
              Turbulence organizes a vertical AI stack and quantitative rules around a closed loop:
              <span className="sm:whitespace-nowrap md:whitespace-nowrap">
                {" "}
                Data → Hypothesis → Evaluation → Improvement → Deployment → Monitoring.
              </span>
              {" "}The system is built with observability and governance in mind and is used
              exclusively for proprietary research.
            </p>
          </div>

          {/* 架构图：使用 Image + contain，保证整图可见不被裁 */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="/turbulence/arch.jpg"
                alt="System schematic (components, signal flow, observability points)"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
            <div className="p-3 sm:p-4 text-center text-white/70 text-xs sm:text-sm border-t border-white/10">
              システム概略図（構成要素・信号流・観測ポイント）
              <span className="mx-2 text-white/40">/</span>
              System schematic (components, signal flow, observability points)
            </div>
          </div>
        </div>
      </section>

      {/* 六大支柱 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">コア・ピラー / Core Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <Pillar
            jp="データ基盤・品質統制"
            en="Data platform & quality controls"
            descJp="スキーマ/頻度/レイテンシ整合、欠損・外れ値ハンドリング、ドリフト監視、リネージ（来歴）管理。特徴量の検証可能性を保証。"
            descEn="Schema/frequency/latency alignment, missing/outlier handling, drift monitoring, and lineage. Ensures verifiable features."
          />
          <Pillar
            jp="モデル層（統計/ML/RL）"
            en="Model layer (Stats/ML/RL)"
            descJp="事前分布と事後更新、反実仮想、オフポリシー評価、制約付き最適化。ブラックボックス化を避ける検証フレーム。"
            descEn="Priors/posteriors, counterfactuals, off-policy evaluation, constrained optimization; validation frameworks to avoid opaque black boxes."
          />
          <Pillar
            jp="ポリシー/意思決定"
            en="Policy & decisioning"
            descJp="信号の強度・信頼区間・相関構造を考慮したアロケーション。探索/活用バランス、ガードレール設定。"
            descEn="Allocation with signal strength, confidence, and correlations; exploration–exploitation balance with guardrails."
          />
          <Pillar
            jp="執行・市場インターフェース"
            en="Execution & market interface"
            descJp="スリッページ/インパクト分解、約定品質メトリクス、プレ/ポストトレードチェック、低レイテンシ I/O。"
            descEn="Slippage/impact decomposition, fill-quality metrics, pre/post-trade checks, and low-latency I/O."
          />
          <Pillar
            jp="リスク管理・制約"
            en="Risk management & constraints"
            descJp="エクスポージャー/相関/リミットの動的管理、ストレス・シナリオ、フォールバック・モード。"
            descEn="Dynamic exposure/correlation/limit management, stress scenarios, and fallback modes."
          />
          <Pillar
            jp="オブザーバビリティ・ガバナンス"
            en="Observability & governance"
            descJp="メトリクス/ログ/トレースの三位一体、モデルガバナンス、変更履歴、ロールバック、監査可能性。"
            descEn="Metrics/logs/traces unified, model governance, change history, rollback, and auditability."
          />
        </div>
      </section>

      {/* 闭环生命周期 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 md:pb-14">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">ライフサイクル / Closed-Loop Lifecycle</h2>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:p-6">
          <ol className="list-decimal pl-5 space-y-2 text-[15px] md:text-base leading-relaxed">
            <li>
              <span className="font-semibold">データ → 仮説：</span>
              データ品質チェックと探索から仮説を定義。<span className="text-white/70">Data → Hypothesis.</span>
            </li>
            <li>
              <span className="font-semibold">実験 → 評価：</span>
              反事実・アブレーション・オフポリシーで検証。<span className="text-white/70">Experiment → Evaluation.</span>
            </li>
            <li>
              <span className="font-semibold">改良 → 配置：</span>
              制約下最適化と安全弁を設定して段階的リリース。<span className="text-white/70">Improve → Deploy.</span>
            </li>
            <li>
              <span className="font-semibold">監視 → 学習：</span>
              ドリフト/アラート/フォールバック、必要に応じて再学習。<span className="text-white/70">Monitor → Learn.</span>
            </li>
          </ol>
          <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed">
            ※ 本モジュールは研究・検証目的であり、投資助言・勧誘や外部資金の運用を意図するものではありません。
            Research-oriented; not investment advice, solicitation, or management of external capital.
          </p>
        </div>
      </section>
    </main>
  );
}
