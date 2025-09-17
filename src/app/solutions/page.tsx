import Image from "next/image";

type Item = {
  img?: string; // 画像は任意（技術モジュールは画像なし）
  jpTitle: string;
  enTitle: string;
  jpDesc: string;
  enDesc: string;
  exampleJp: string;
  exampleEn: string;
  accent: "indigo" | "purple" | "cyan" | "rose";
};

const items: Item[] = [
  // ====== 既存セクション ======
  {
    img: "/solutions/research-infra.jpg",
    jpTitle: "研究基盤 / Research Infrastructure",
    enTitle: "Internally validated research & data infrastructure",
    jpDesc:
      "データガバナンス、特徴量パイプライン、再現可能な実験設計、バックテスト基盤、可観測性（Observability）を備えた研究環境を提示します。方法論・参照実装の共有に特化し、個別システムの受託開発は行いません。",
    enDesc:
      "Data governance, feature pipelines, reproducible experimentation, backtesting frameworks, and production-grade observability. We share methodology and reference setups—not outsourced implementation.",
    exampleJp:
      "例：市場データの標準化処理／ファクター抽出パイプラインの自動化／検証可能なバックテスト環境。",
    exampleEn:
      "Example: Standardized market data processing, automated factor extraction, reproducible backtest environments.",
    accent: "indigo",
  },
  {
    img: "/solutions/model-lab.jpg",
    jpTitle: "モデル・アルゴリズム研究室 / Model & Algorithm Lab",
    enTitle: "Systematic model exploration and robustness evaluation",
    jpDesc:
      "統計・ML・RL を用いた因子検証、戦略プロトタイプ、リスク制約、ロバスト性評価を体系化。「失敗事例」やストレスシナリオを含むレッドチーム的アーカイブを提供します（投資助言・勧誘は行いません）。",
    enDesc:
      "Factors, strategy prototypes, risk constraints, and robustness testing using statistics, ML, and RL, plus a red-team style archive of failure cases and stress scenarios. No investment advice or solicitation.",
    exampleJp:
      "例：株式ミクロ構造への ML 適用／オプション IV 予測モデルのロバスト性検証／制約付き RL 戦略シミュレーション。",
    exampleEn:
      "Example: ML on equity microstructure, robustness tests for option IV models, RL simulations under risk constraints.",
    accent: "purple",
  },
  {
    img: "/solutions/execution-risk.jpg",
    jpTitle: "執行・リスクツール群 / Execution & Risk Tooling",
    enTitle: "Modular toolkits for execution quality & risk",
    jpDesc:
      "スリッページ／インパクト分析、約定品質アトリビューション、Pre/Post Trade チェック、ストレステスト、リミット設計など、執行品質とリスク管理を可視化するモジュール群。",
    enDesc:
      "Slippage/impact analysis, fill attribution, pre/post-trade checks, stress testing, and limit design—making execution quality and risk measurable and observable.",
    exampleJp:
      "例：大口注文のマーケットインパクト分解／先物・オプションのプレトレード限度設定／ストレス環境下の VaR シミュレーション。",
    exampleEn:
      "Example: Decomposing block-order impact, pre-trade limits for futures/options, VaR under stress scenarios.",
    accent: "cyan",
  },
  {
    img: "/solutions/knowledge-programs.jpg",
    jpTitle: "知識プログラム / Knowledge Programs",
    enTitle: "Training, code reviews, and methodological evaluations",
    jpDesc:
      "短期集中トレーニング、コードレビュー、研究報告の方法論評価、ベンチマーク挑戦型サンドボックス。教育・レビュー・能力構築を統合し、実務に耐える判断基準を育てます（受託開発は行いません）。",
    enDesc:
      "Intensive training, code reviews, methodological evaluations of research reports, and benchmark challenge sandboxes. Education and capability building—not commissioned development.",
    exampleJp:
      "例：ファクターモデル実装演習／レビューによるアルゴリズム改良／バックテスト報告評価／サンドボックス競技。",
    exampleEn:
      "Example: Factor-model workshops, algorithm improvement via reviews, backtest report evaluations, sandbox competitions.",
    accent: "rose",
  },

  // ====== 新規：技術スタック・モジュール（画像なし） ======
  {
    jpTitle: "プログラミング環境 / Programming Environment",
    enTitle: "Research-to-production programming stack",
    jpDesc:
      "Python（Pandas, NumPy, SciPy, scikit-learn, PyTorch）を中核に、R・Julia の統計解析、C++・Rust の低レイテンシ実装までカバー。研究と実装の双方で活用できる環境設計を支援します。",
    enDesc:
      "Python (Pandas, NumPy, SciPy, scikit-learn, PyTorch) at the core, with R/Julia for statistics and C++/Rust for low-latency work. We help design environments usable for both research and production.",
    exampleJp:
      "例：Python+Pandas による市場データ標準化パイプライン／Julia での数理最適化プロトタイプ／C++ による実行エンジンのレイテンシ削減。",
    exampleEn:
      "Example: Standardized market-data pipelines in Python, math-optimization prototypes in Julia, and latency tuning of execution engines in C++.",
    accent: "indigo",
  },
  {
    jpTitle: "データ基盤 / Data Infrastructure",
    enTitle: "Time-series data platforms & streaming",
    jpDesc:
      "kdb+/q、ClickHouse、DuckDB による時系列データ基盤設計。Kafka・Redis を組み合わせ、研究から運用まで一貫性のあるイベント駆動パイプラインを提示します。",
    enDesc:
      "Time-series platforms (kdb+/q, ClickHouse, DuckDB) combined with Kafka/Redis streaming pipelines for consistent research-to-production flows.",
    exampleJp:
      "例：kdb+/q での高頻度ティック解析基盤／ClickHouse によるバックテスト結果の集計最適化／Kafka ストリームによる市場イベント配信アーキテクチャ。",
    exampleEn:
      "Example: HF tick-analysis on kdb+/q, aggregated backtest reporting on ClickHouse, and event streaming architectures via Kafka.",
    accent: "purple",
  },
  {
    jpTitle: "モデル実装 / Modeling & Algorithms",
    enTitle: "Statistics, ML/DL, and validation",
    jpDesc:
      "ARCH/GARCH・状態空間モデルなどの統計手法、XGBoost・LightGBM 等の機械学習、PyTorch・TensorFlow による深層学習を統合。検証フレームワークやロバスト性評価のベストプラクティスを共有します。",
    enDesc:
      "From ARCH/GARCH and state-space models to ML (XGBoost/LightGBM) and DL (PyTorch/TensorFlow), with validation frameworks and robustness testing best practices.",
    exampleJp:
      "例：GARCH-X による条件付ボラ推定の導入支援／PyTorch でのオプションIV予測モデル検証ワークショップ／XGBoost を用いたファクター選択の再現実装。",
    exampleEn:
      "Example: Conditional-volatility estimation via GARCH-X, PyTorch-based option IV validation workshops, and reproducible factor selection with XGBoost.",
    accent: "cyan",
  },
  {
    jpTitle: "シミュレーション・リスク評価 / Simulation & Risk",
    enTitle: "Monte Carlo, stress testing, CVaR/ES",
    jpDesc:
      "Monte Carlo、Stress Testing、CVaR/Expected Shortfall を用いたリスク評価を体系化。シナリオ設計や回復力検証に関する教育・参照実装を提供します。",
    enDesc:
      "Systematized risk evaluation with Monte Carlo, stress testing, and CVaR/Expected Shortfall—offering training and reference implementations for scenario design and resilience testing.",
    exampleJp:
      "例：ポートフォリオ損益分布のモンテカルロ推定／VaR/ES に基づくストレス環境シナリオ設計／レジームシフト検知による動的リスク制御。",
    exampleEn:
      "Example: Monte Carlo P&L distributions, VaR/ES-driven stress scenarios, and regime-shift detection for dynamic risk controls.",
    accent: "rose",
  },
  {
    jpTitle: "執行・インターフェース / Execution & Interface",
    enTitle: "Routing, pre/post-trade checks, impact",
    jpDesc:
      "FIX Protocol、IBKR API、QuickFIX を用いた注文ルーティングと執行フレームワーク。Pre/Post Trade チェックやインパクト分析の設計支援を行います。",
    enDesc:
      "Order routing with FIX Protocol, IBKR API, and QuickFIX. We assist in designing pre/post-trade checks and market-impact analyses.",
    exampleJp:
      "例：IBKR API を活用した条件付注文テンプレート／Pre-Trade チェックリストとリミット設計／大口注文のスリッページ分析モジュール。",
    exampleEn:
      "Example: Conditional order templates via IBKR API, pre-trade checklists with limit design, and block-order slippage analysis modules.",
    accent: "indigo",
  },
  {
    jpTitle: "可観測性・運用 / Observability & Ops",
    enTitle: "Metrics, logs, and experiment tracking",
    jpDesc:
      "Grafana・Prometheus・Elastic Stack によるメトリクス/ログ監視を標準化。MLflow / Weights & Biases による実験管理とモデル追跡の方法論を提示します。",
    enDesc:
      "Standardized metrics/log monitoring with Grafana, Prometheus, and Elastic Stack. Experiment tracking with MLflow / Weights & Biases.",
    exampleJp:
      "例：バックテストの可視化ダッシュボード／MLflow によるモデルバージョニング／Prometheus アラートでの異常検知フロー設計。",
    exampleEn:
      "Example: Backtest visualization dashboards, model versioning in MLflow, and anomaly alerts via Prometheus.",
    accent: "purple",
  },
  {
    jpTitle: "DevOps & スケーリング / DevOps & Scaling",
    enTitle: "Cloud-native research stacks",
    jpDesc:
      "Docker・Kubernetes による研究基盤のクラウドネイティブ化。Terraform・Ansible を使った環境コード化のベストプラクティスを教育・コンサルティングとして提供します。",
    enDesc:
      "Cloud-native research environments with Docker/Kubernetes, plus infrastructure-as-code best practices using Terraform/Ansible.",
    exampleJp:
      "例：Docker による再現可能な研究環境の構築支援／Kubernetes クラスタでの分散バックテスト設計／Terraform によるクラウド環境自動構築テンプレート。",
    exampleEn:
      "Example: Reproducible research environments with Docker, distributed backtests on Kubernetes, and Terraform templates for cloud automation.",
    accent: "cyan",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white relative overflow-hidden">
      {/* 背景グラデ（控えめ） */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[380px] w-[380px] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-pink-500/20" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-500/30 via-sky-500/25 to-indigo-600/20" />

      {/* ヘッダー */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">ソリューション / Solutions</h1>
        <p className="mt-4 text-white/75 text-base md:text-lg">
          研究の実装を支援するためのコンサルティングと教育。設計・検証・運用基準に焦点を当て、受託開発は行いません。
        </p>
        <p className="mt-1 text-white/60 text-sm md:text-base">
          Consulting and education to help operationalize research—focused on design, validation, and operating standards.
        </p>
      </section>

      {/* カードグリッド */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden hover:bg-white/[0.06] transition"
            >
              {/* アクセントバー */}
              <div
                className={
                  "h-1 w-full " +
                  (it.accent === "indigo"
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : it.accent === "purple"
                    ? "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500"
                    : it.accent === "cyan"
                    ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500"
                    : "bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500")
                }
              />

              {/* 画像（任意） */}
              {it.img ? (
                <div className="p-7 pb-0">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={it.img}
                      alt={it.jpTitle}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 480px, 100vw"
                      priority={idx < 2}
                    />
                  </div>
                </div>
              ) : null}

              {/* テキスト */}
              <div className="px-7 pt-6 pb-7">
                <h3 className="text-xl md:text-[1.35rem] font-semibold leading-tight">{it.jpTitle}</h3>
                <p className="mt-1 text-white/70 text-sm md:text-[0.95rem]">{it.enTitle}</p>

                <p className="mt-4 text-[0.98rem] leading-relaxed tracking-[0.01em]">{it.jpDesc}</p>
                <p className="mt-2 text-white/85 text-[0.98rem] leading-relaxed tracking-[0.01em]">{it.enDesc}</p>

                {/* 例示ブロック */}
                <div className="mt-5 rounded-lg bg-white/[0.03] border border-white/10 p-4 md:p-5">
                  <p className="text-sm md:text-[0.95rem] text-white/85">{it.exampleJp}</p>
                  <p className="mt-1 text-sm md:text-[0.95rem] text-white/70">{it.exampleEn}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA + コンプライアンス注記 */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-white text-black px-5 py-2.5 font-semibold hover:bg-white/90"
          >
            お問い合わせ / Contact
          </a>
          <p className="mt-5 text-xs md:text-[0.8rem] text-white/60">
            本ページは学術・技術情報の提供を目的としており、投資助言や勧誘、運用受託を行うものではありません。
            This page does not constitute investment advice, solicitation, or commissioned development.
          </p>
        </div>
      </section>
    </main>
  );
}
