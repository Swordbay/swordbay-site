// src/content/home.ts
export const home = {
  hero: {
    title: {
      jp: "金融市場における科学の実装可能な応用を探究する。",
      en: "Exploring the practical applications of science in financial markets.",
    },
    subtitle: {
      jp: "Swordbayは、構造的・規律を重んじる、研究主導の独立系クオンツ研究機関です。",
      en: "Swordbay is an independent, structured, disciplined, and research-driven quantitative research firm.",
    },
    logoSrc: "/logo.svg",
  },

  highlightBar: {
    jp: [
      "当社は自己勘定に基づき、市場データおよびアルゴリズムの研究・検証を行い、取引執行（Execution）、データ基盤、機械学習／強化学習（ML/RL）、リスク管理に注力しています。",
      "研究成果を、計測可能・可観測・保守容易なプロダクションシステムへ落とし込みます。",
      "事業領域：",
      "・研究成果を応用したアルゴリズム設計支援",
      "・AIモデル・データ基盤に関する技術コンサルティング（顧問契約）",
      "・クオンツ志望者・研究者向けの教育プログラム提供",
      "・市場データ分析レポートの作成支援（教育・研究目的）",
      "・モジュール設計・テストに関するアドバイザリー",
    ],
    en: [
      "We conduct proprietary research and validation on market data and algorithms, focusing on execution, data infrastructure, machine learning / reinforcement learning (ML/RL), and risk management.",
      "We translate research into production systems that are measurable, observable, and maintainable.",
      "Scope of activities:",
      "・Advisory on algorithm design based on applied research",
      "・Technical consulting on AI models and data infrastructure (advisory engagements)",
      "・Educational programs for aspiring quants and researchers",
      "・Preparation of market data analysis reports (for research/educational use only, not investment advice)",
      "・Advisory on module design and testing",
    ],
  },

  footer: {
    disclaimer: {
      jp: "本サイトは情報提供のみを目的としており、投資勧誘や営業行為を構成しません。当社は自己勘定でのみ運用します。",
      en: "Information only. We operate solely with proprietary capital.",
    },
    links: [
      { labelJp: "免責事項", labelEn: "Disclosures", path: "/disclosures" },
      { labelJp: "プライバシー", labelEn: "Privacy", path: "/privacy" },
      { labelJp: "クッキー", labelEn: "Cookies", path: "/cookies" },
      { labelJp: "会社情報", labelEn: "Company Info", path: "/legal" },
    ],
    copyrightJP: "© 2025 Swordbay合同会社. All rights reserved.",
  },

  nav: [
    { path: "/", jp: "ホーム", en: "Home" },
    { path: "/solutions", jp: "ソリューション", en: "Solutions" },
    { path: "/turbulence", jp: "自研モデル", en: "Turbulence" },
    { path: "/research", jp: "研究ノート", en: "Research" },
    { path: "/reports", jp: "レポート", en: "Reports" }, // ← 新增，位于 Contact 之前
    { path: "/contact", jp: "お問い合わせ", en: "Contact" },
    { path: "/latest", jp: "最新情報", en: "Latest" },
  ],
};
