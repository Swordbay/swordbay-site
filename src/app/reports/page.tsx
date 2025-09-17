"use client";

import { useMemo } from "react";

export default function ReportsPage() {
  const currency = "¥";

  // ---- Pricing (tax included) ----
const plans = useMemo(
  () => [
    {
      tier: "Basic",
      monthly: `月額 ${currency}9,800（税込）`,
      single: `単品 ${currency}12,000（税込）`,
      enMonthly: `${currency}9,800 per month (tax incl.) / 月額9,800円（税込）`,
      enSingle: `${currency}12,000 per single report (tax incl.) / 単品12,000円（税込）`,
      jp: [
        "月次ファクターリサーチ（米国・日本）",
        "基本的オプションIV動態レポート",
        "教育用コードスニペット（Python/R）",
      ],
      en: [
        "Monthly factor research (U.S. & Japan)",
        "Core option IV dynamics",
        "Educational code snippets (Python/R)",
      ],
    },
    {
      tier: "Pro",
      monthly: `月額 ${currency}29,800（税込）`,
      single: `単品 ${currency}15,000（税込）`,
      enMonthly: `${currency}29,800 per month (tax incl.) / 月額29,800円（税込）`,
      enSingle: `${currency}15,000 per single report (tax incl.) / 単品15,000円（税込）`,
      jp: [
        "週次アップデート（因子・IV・流動性指標）",
        "Market Microstructure 詳報（板情報・ティック）",
        "VaR/ES 等のリスク・シナリオレポート",
        "ワークショップ／Q&A 招待",
      ],
      en: [
        "Weekly updates (factors, IV, liquidity)",
        "Microstructure deep-dives (order book, tick)",
        "Risk scenarios (VaR/ES, stress tests)",
        "Workshops & Q&A access",
      ],
    },
    {
      tier: "Enterprise",
      monthly: `価格は個別見積`,
      single: `カスタム提供`,
      enMonthly: `Pricing upon request / 価格は個別見積`,
      enSingle: `Custom deliverables / カスタム提供`,
      jp: [
        "法人向けカスタムレポート（銘柄バスケット指定可）",
        "戦略シミュレーション結果共有（Pairs/Stat-Arb/Vol Carry 等）",
        "データ基盤・実験環境に関するアドバイザリー",
        "年間専用アクセス（共同研究・ライセンスオプション）",
      ],
      en: [
        "Tailored institutional reports (custom baskets)",
        "Strategy simulation results (pairs/stat-arb/vol-carry)",
        "Advisory on data infra & experiments",
        "Annual dedicated access (co-research/licensing)",
      ],
    },
  ],
  []
);


  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight font-serif">
          レポート / Reports
        </h1>
        <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
          当社は自己勘定運用に加え、数量的研究に基づく定期レポート・サブスクリプションを提供します。
          対象は米国株式・オプション、日本市場、ならびにモデル検証領域です。
          （教育・研究目的／投資助言は行いません）
        </p>
        <p className="mt-2 text-white/65 text-sm md:text-base leading-relaxed">
          We provide subscription-based quantitative research reports across U.S.
          equities & options, the Japanese market, and systematic model validation.
          Educational use only—no investment advice or solicitation.
        </p>
      </section>

      <hr className="mx-auto max-w-5xl border-white/15" />

      {/* Quant Content Scope */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          コンテンツ範囲 / Quantitative Content Scope
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              titleJp: "ファクターリサーチ / Factor Research",
              descJp:
                "米国：Value・Momentum・Volatility・Quality 等の因子リターン分析／日本：TOPIX・日経225 構成銘柄のクロスセクション分析／低流動性銘柄の因子効果検証。",
              descEn:
                "Factor returns in U.S. & Japan cross-sections (Value, Momentum, Volatility, Quality), including robustness on low-liquidity universes.",
            },
            {
              titleJp: "オプション・ボラティリティ / Options & Volatility",
              descJp:
                "米国株オプションの IV Surface 推定（Smile/Skew）／日本（Nikkei 225, TOPIX）のボラティリティ・リスクプレミアム／intraday implied/realized spread 計測。",
              descEn:
                "IV surface modeling for U.S. options, volatility risk premia in Nikkei/TOPIX options, and intraday implied–realized spread measurement.",
            },
            {
              titleJp: "市場ミクロ構造 / Market Microstructure",
              descJp:
                "ティックデータによるスプレッド・流動性推定／板情報の不均衡指標と短期リターン相関／約定速度と価格インパクトの統計モデル化。",
              descEn:
                "Tick-data analysis of spreads/liquidity, order-book imbalance indicators, and statistical price impact models.",
            },
            {
              titleJp: "リスク・シナリオ / Risk & Stress Scenarios",
              descJp:
                "Monte Carlo によるポートフォリオ分布推定／CVaR・Expected Shortfall／急激な円高・米金利ショック等のストレステスト。",
              descEn:
                "Monte Carlo portfolio distributions, CVaR/ES tail risk, and stress tests (JPY appreciation, U.S. rate shocks).",
            },
            {
              titleJp: "アルゴリズム検証 / Algorithmic Strategy Notes",
              descJp:
                "強化学習 (RL) によるポリシー最適化／Stat-Arb・Pairs・Volatility Carry のロバスト性評価／ストップロス・サイジングの定量検証。",
              descEn:
                "RL policy experiments; robustness of stat-arb, pairs, and vol-carry; systematic tests on stop-loss and sizing.",
            },
          ].map((b, i) => (
            <article
              key={i}
              className="rounded-xl border border-white/15 p-5 md:p-6 bg-transparent"
            >
              <h3 className="text-lg md:text-xl font-semibold">{b.titleJp}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed">{b.descJp}</p>
              <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
                {b.descEn}
              </p>
            </article>
          ))}
        </div>
      </section>

      <hr className="mx-auto max-w-5xl border-white/15" />

      {/* Subscription Plans */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight text-center">
          サブスクリプション形式 / Subscription Plans
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <article
              key={i}
              className="rounded-xl border border-white/15 p-6 bg-transparent"
            >
              <h3 className="text-lg md:text-xl font-semibold">{p.tier}</h3>
              <div className="mt-3 text-sm">
                <p className="text-white/90">{p.monthly}</p>
                <p className="text-white/70">{p.single}</p>
                <p className="text-white/80 mt-1 text-xs">
                  {p.enMonthly} / {p.enSingle}
                </p>
              </div>

              <ul className="mt-4 space-y-1 text-[0.95rem] text-white/90">
                {p.jp.map((li, idx) => (
                  <li key={idx}>・{li}</li>
                ))}
              </ul>
              <ul className="mt-3 space-y-1 text-[0.85rem] text-white/65">
                {p.en.map((li, idx) => (
                  <li key={idx}>- {li}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* One CTA only */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block rounded-lg bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-white/90 transition"
          >
            Please inquiry
          </a>
        </div>
      </section>

      <hr className="mx-auto max-w-5xl border-white/15" />

      {/* Public Sample */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          公開サンプル / Public Sample
        </h2>
        <p className="mt-2 text-white/70 text-sm">
          デモ版をご覧いただけます。完全版レポートはお問い合わせください。
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="block rounded-xl border border-white/15 bg-white/[0.02] px-10 py-8 hover:bg-white/[0.05] transition"
          >
            <p className="font-medium">Inquiry for Demo</p>
            <p className="text-xs text-white/60 mt-1">完全版はお問い合わせください</p>
          </a>
        </div>
      </section>

      {/* Compliance */}
      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <p className="text-xs md:text-[0.8rem] text-white/60 leading-relaxed">
          本サービスは教育・研究目的の情報提供であり、特定銘柄の売買推奨や投資助言を行うものではありません。
          <br />
          This service is for research and educational use only, not investment
          advice or solicitation.
          <br />
          *表示価格は税込（消費税10%）。
        </p>
      </section>
    </main>
  );
}
