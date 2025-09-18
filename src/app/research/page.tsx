// src/app/research/page.tsx
"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ResearchPage() {
  type Item = {
    key: string;
    img: string;          // 1:1 图片路径
    titleJp: string;
    titleEn: string;
    blurbJp: string;
    blurbEn: string;
    kpisJp?: string[];
    kpisEn?: string[];
    pitfallsJp?: string[];
    pitfallsEn?: string[];
    useCasesJp?: string[];
    useCasesEn?: string[];
  };

  const items: Item[] = [
    {
      key: "garch",
      img: "/research/garch.jpg",
      titleJp: "GARCH Models（ボラティリティ・クラスタリング）",
      titleEn: "GARCH Models (Volatility Clustering)",
      blurbJp:
        "市場の変動はノイズではなく構造的な記憶を持つ。GARCH 系列はその残響を定式化し、リスクと価格形成の背後に潜む集約的ダイナミクスを可視化する。残余ボラティリティからシグナルを抽出し、ストレス環境下での頑健性を評価する。",
      blurbEn:
        "Market fluctuations are structured memory, not mere noise. GARCH families formalize the resonance and reveal aggregate dynamics behind risk and price formation. We extract signals from residual volatility and stress-test robustness.",
      kpisJp: [
        "ボラティリティ予測誤差（MAE/RMSE）",
        "VaR/ES の被覆率（backtesting）",
        "レジーム間の遷移安定性（ドリフト検知）",
        "（追記予定）"
      ],
      kpisEn: [
        "Volatility forecast error (MAE/RMSE)",
        "VaR/ES coverage (backtesting)",
        "Regime transition stability (drift detection)",
        "(More to add)"
      ],
      pitfallsJp: [
        "パラメータ不安定（サンプル外で崩れる）",
        "構造変化・レジームシフトへの脆弱性",
        "ショック後の過度平滑化",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Parameter instability (out-of-sample breakdown)",
        "Vulnerability to structural breaks / regime shifts",
        "Excessive smoothing after shocks",
        "(More to add)"
      ],
      useCasesJp: [
        "オプション面ボラ微分（DVega、Vanna）と条件付きボラ予測の一体最適化",
        "VaR/ES スタックへの GARCH-X 連携（マクロ変数・流動性指標を外生項に注入）",
        "イベント後のレジーム遷移検知とヘッジ・レバレッジの動的調整",
      ],
      useCasesEn: [
        "Joint optimization of surface vol greeks (DVega, Vanna) with conditional vol forecasts",
        "GARCH-X into VaR/ES stack (inject macro/liquidity factors as exogenous terms)",
        "Post-event regime shift detection with dynamic hedge/leveraging controls",
      ]
    },
    {
      key: "fourier",
      img: "/research/fourier.jpg",
      titleJp: "フーリエ変換（周波数領域解析）",
      titleEn: "Fourier Transforms (Frequency-Domain Analysis)",
      blurbJp:
        "時間領域だけでは見えない周期性・共鳴パターンを周波数空間に投影して抽出する。分解にとどまらず、取引フローの潜在構造を解読する暗号解析のように機能する。",
      blurbEn:
        "Projecting into frequency space reveals periodicities and resonances invisible in time series. Beyond decomposition, Fourier analysis acts as cryptanalysis of latent structures in trading flows.",
      kpisJp: [
        "ドミナント周波数の安定性（ロールウィンドウ）",
        "帯域別パワー変動と収益の相関",
        "リーク/ペルセバル誤差の管理",
        "（追記予定）"
      ],
      kpisEn: [
        "Dominant frequency stability (rolling windows)",
        "Band power–return correlation",
        "Leakage/Parseval error control",
        "(More to add)"
      ],
      pitfallsJp: [
        "窓関数の選択依存（リーク増幅）",
        "非定常系列への過信（擬似周期）",
        "実時間適用での位相遅延",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Window-function dependence (leakage)",
        "Over-trust under nonstationarity (pseudo-cycles)",
        "Phase lag in real-time application",
        "(More to add)"
      ],
      useCasesJp: [
        "ミクロ構造ノイズ除去後のバンドパワーとオーダーフローの共起解析",
        "季節性・イベント周期のスペクトル分解と執行ウィンドウ最適化",
        "周波数帯別シグナルの合成でロバストな低次元表現を構築",
      ],
      useCasesEn: [
        "Co-occurrence of band power with order-flow after microstructure noise removal",
        "Spectral decomposition of seasonality/event cycles to optimize execution windows",
        "Synthesis of band-limited signals for robust low-dimensional factors",
      ]
    },
    {
      key: "fractal",
      img: "/research/fractal.jpg",
      titleJp: "フラクタル幾何（自己相似性）",
      titleEn: "Fractals (Self-Similarity)",
      blurbJp:
        "スケールを変えても消えない複雑さは、市場の“無限に折り畳まれた不規則性”を示唆する。フラクタル次元を市場の呼吸として扱い、短期の揺らぎと長期のドリフトを同一座標系で統合する。",
      blurbEn:
        "Scale-invariant complexity suggests infinitely folded irregularities in markets. We treat fractal dimension as the market’s breathing rhythm, aligning short-term turbulence with long-term drift.",
      kpisJp: [
        "フラクタル次元/ヘルスト指数の安定推定",
        "スケール間一貫性（マルチスケール共分散）",
        "自己相似性の破れ検出（臨界点）",
        "（追記予定）"
      ],
      kpisEn: [
        "Stable estimation of fractal dimension/Hurst exponent",
        "Cross-scale consistency (multiscale covariance)",
        "Breakdown of self-similarity (criticality signals)",
        "(More to add)"
      ],
      pitfallsJp: [
        "短尺データでの推定バイアス",
        "外れ値・ギャップによる擬似フラクタル",
        "スケール混在での解釈誤り",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Estimation bias with short samples",
        "Pseudo-fractals from outliers/gaps",
        "Misinterpretation under mixed scales",
        "(More to add)"
      ],
      useCasesJp: [
        "マルチフラクタ拡張でラフボラティリティの兆候を検知",
        "時間スケール毎のトレンド/ノイズ分離によりポジション期間を自動調整",
        "スケール崩壊を早期検知してリスク限度をフェーズド制御",
      ],
      useCasesEn: [
        "Detect rough-volatility signatures via multifractal extensions",
        "Auto-tune holding periods by trend/noise separation across scales",
        "Early detect scale break and phase risk limits accordingly",
      ]
    },
    {
      key: "statarb",
      img: "/research/statarb.jpg",
      titleJp: "統計的アービトラージ（関係性の持続）",
      titleEn: "Statistical Arbitrage (Persistent Relations)",
      blurbJp:
        "真のアルファは一瞬の裁定差ではなく、統計的に偏った関係性の持続に宿る。相関の崩壊と再生をリアルタイムで追跡し、見かけの効率性の裏に潜む歪みを抽出する。",
      blurbEn:
        "Alpha resides in persistent statistical biases, not fleeting mispricings. Tracking correlation collapse and regeneration in real time exposes distortions behind apparent efficiency.",
      kpisJp: [
        "収益の半減期/メーンリバージョン速度",
        "取引コスト後のIR/Sharpeの持続性",
        "残差の定常性と破れ検知",
        "（追記予定）"
      ],
      kpisEn: [
        "Half-life / mean-reversion speed",
        "Post-cost IR/Sharpe persistence",
        "Residual stationarity & break detection",
        "(More to add)"
      ],
      pitfallsJp: [
        "データスヌーピング（ルックアヘッド含む）",
        "相関の砂上楼閣（体制変化で崩落）",
        "コスト・流動性制約の過小評価",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Data snooping (incl. look-ahead)",
        "Correlation castles (collapse under regime change)",
        "Underestimating costs/liquidity constraints",
        "(More to add)"
      ],
      useCasesJp: [
        "階層クラスタ＋コインテグレーションでペア/バスケットを動的再構成",
        "微視的流動性ショック検知に連動したスプレッド縮小/拡大型戦略",
        "実取引コストのオンライン推定で『紙上アルファ』の剥離を抑制",
      ],
      useCasesEn: [
        "Dynamic pair/basket reconstitution via hierarchical clustering + cointegration",
        "Spread tightening/expansion regimes linked to micro-liquidity shocks",
        "Online estimation of realized costs to curb ‘paper alpha’ slippage",
      ]
    },
    {
      key: "nash",
      img: "/research/nash.jpg",
      titleJp: "ナッシュ均衡（戦略的相互依存）",
      titleEn: "Nash Equilibrium (Strategic Interdependence)",
      blurbJp:
        "参加者は孤立ではなく相互依存に拘束される。均衡は緊張を一時的に安定化させるが、均衡点を巡る揺らぎがシステムの脆弱性を映す。『不安定な安定』を指標化し、内在リスクを測定する。",
      blurbEn:
        "Participants are bound by strategic interdependence. Equilibria temporarily stabilize tension, yet oscillations around them reveal fragility. We quantify this ‘unstable stability’ to gauge embedded risks.",
      kpisJp: [
        "均衡周辺のボラティリティ帯域",
        "反応関数の勾配（戦略感応度）",
        "市場厚み・深さの時間変動",
        "（追記予定）"
      ],
      kpisEn: [
        "Volatility bandwidth around equilibria",
        "Slope of reaction functions (strategic sensitivity)",
        "Temporal variation in market depth/liquidity",
        "(More to add)"
      ],
      pitfallsJp: [
        "完全情報を仮定した過度単純化",
        "局所均衡に囚われた誤推論",
        "内生的ルール変更の見落とし",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Over-simplification via full-information assumptions",
        "Local-equilibrium myopia",
        "Missing endogenous rule changes",
        "(More to add)"
      ],
      useCasesJp: [
        "MM/機関/裁定系の反応関数を推定し、均衡帯域での最適執行を選択",
        "競争的オークション下の入札戦略シミュレーション（影の流動性推定）",
        "政策・ルール変更シナリオのゲーム化とポジショニングの再最適化",
      ],
      useCasesEn: [
        "Estimate reaction functions (MMs/institutions/arbs) to choose optimal execution near equilibrium bands",
        "Bidding strategy sims under competitive auctions (shadow liquidity inference)",
        "Game out policy/rule-change scenarios and re-optimize positioning",
      ]
    },
    {
      key: "kalman",
      img: "/research/kalman.jpg",
      titleJp: "カルマンフィルタ（状態推定）",
      titleEn: "Kalman Filters (State Estimation)",
      blurbJp:
        "観測は常にノイズに汚染される。予測と観測の誤差は市場の呼吸そのもの。真の状態を推定するダイナミックな鏡として機能し、そのズレをモデルの学習信号に転化する。",
      blurbEn:
        "Observation is noisy by nature. The gap between prediction and observation is the market’s respiration. Kalman filters mirror the hidden state dynamically; we turn that gap into a learning signal.",
      kpisJp: [
        "フィルタ/スムーザ残差の白色度",
        "イノベーション分散の安定性",
        "状態推定の遅延と追従度",
        "（追記予定）"
      ],
      kpisEn: [
        "Whiteness of filter/smoother residuals",
        "Innovation variance stability",
        "Lag and tracking performance of state estimates",
        "(More to add)"
      ],
      pitfallsJp: [
        "雑音共分散（Q/R）の過学習",
        "非線形性を線形近似で過小評価",
        "観測抜け・外れ値の未補正",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Overfitting process/measurement noise (Q/R)",
        "Under-accounting nonlinearity with linear approximations",
        "Uncorrected gaps/outliers in observations",
        "(More to add)"
      ],
      useCasesJp: [
        "スプレッドの隠れ状態推定に基づくペアトレードの動的レバレッジ調整",
        "イールドカーブの状態空間モデル化（レジーム別の平行/傾き/曲率分解）",
        "執行スリッページの潜在ドライバ（流動性/圧力）を逐次推定",
      ],
      useCasesEn: [
        "Dynamic leverage for pairs using hidden-state spread estimation",
        "State-space yield-curve modeling (level/slope/curvature by regime)",
        "Sequential inference of latent drivers of slippage (liquidity/pressure)",
      ]
    },
    {
      key: "bayes",
      img: "/research/bayes.jpg",
      titleJp: "ベイズ推論（信念の流動性）",
      titleEn: "Bayesian Inference (Fluid Beliefs)",
      blurbJp:
        "不確実性は更新の燃料である。新しい観測を信念体系に織り込み、確率分布を可塑的に変形させる。信念の流動性をモデル適応性の源泉と捉える。",
      blurbEn:
        "Uncertainty fuels updates. New observations are woven into the belief system, plastically reshaping distributions. The fluidity of belief underpins model adaptability.",
      kpisJp: [
        "事後分布の収束性（エントロピー低下）",
        "予測的対数尤度（PLL）",
        "意思決定の価値関数改善",
        "（追記予定）"
      ],
      kpisEn: [
        "Posterior convergence (entropy decay)",
        "Predictive log-likelihood (PLL)",
        "Value-function improvement in decisions",
        "(More to add)"
      ],
      pitfallsJp: [
        "事前分布の恣意性（感度高すぎ）",
        "近似推論（VI/MCMC）でのバイアス",
        "共役形に依存したモデル貧困",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Arbitrary priors (excess sensitivity)",
        "Approximate inference bias (VI/MCMC)",
        "Overreliance on conjugacy / poor expressivity",
        "(More to add)"
      ],
      useCasesJp: [
        "ベイズ線形/非線形更新でファクターの信念ウェイトを逐次最適化",
        "バンディット設定での探索/活用バランス（情報価値に基づくトレードオフ）",
        "事後分布を直接用いたリスク許容度の適応制御",
      ],
      useCasesEn: [
        "Sequentially optimize factor belief weights via Bayesian linear/nonlinear updates",
        "Exploration–exploitation in bandits (value-of-information trade-offs)",
        "Use posterior directly to adapt risk tolerance",
      ]
    },
    {
      key: "markov",
      img: "/research/markov.jpg",
      titleJp: "マルコフ連鎖（遷移構造）",
      titleEn: "Markov Chains (Transition Structure)",
      blurbJp:
        "市場は過去全体を記憶しないが、直前の状態というミニマルな履歴に拘束される。遷移構造を定式化し、見えざる状態空間と相続の法則を推定する。",
      blurbEn:
        "Markets forget most of the past yet remain constrained by the immediate state. Markov structures formalize transitions and infer hidden state spaces—the laws of inheritance in randomness.",
      kpisJp: [
        "遷移行列の安定性（時間分割検証）",
        "滞在時間分布と再訪率",
        "隠れ状態の識別精度（HMM/HSMM）",
        "（追記予定）"
      ],
      kpisEn: [
        "Transition-matrix stability (time-slice validation)",
        "Dwell-time distribution & revisit rate",
        "Hidden-state identification accuracy (HMM/HSMM)",
        "(More to add)"
      ],
      pitfallsJp: [
        "マルコフ性の仮定過強（高次依存を無視）",
        "状態数の過少/過多（過学習/未表現）",
        "遷移確率のドリフト未検知",
        "（追記予定）"
      ],
      pitfallsEn: [
        "Over-strong Markovian assumption (ignoring higher-order dependence)",
        "Under/over-specified state counts (under/overfitting)",
        "Unmonitored drift in transition probabilities",
        "(More to add)"
      ],
      useCasesJp: [
        "ボラ/流動性レジームの HMM 推定にもとづく守勢/攻勢モード切替え",
        "マーケットメイク在庫の遷移モデル化とヘッジ頻度の制御",
        "クレジット/スプレッド状態の段階推移を前提にした限度枠配分",
      ],
      useCasesEn: [
        "Switch defense/offense modes via HMM regimes in vol/liquidity",
        "Model MM inventory transitions to govern hedge frequency",
        "Allocate limits under staged transitions in credit/spread states",
      ]
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0C0E] text-white overflow-x-clip overflow-y-visible">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-indigo-600/40 via-fuchsia-500/30 to-sky-500/25" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-15 bg-gradient-to-tr from-cyan-500/25 via-purple-500/25 to-pink-500/25" />
      <div className="pointer-events-none absolute inset-0 opacity-[.05] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.9)_1px,transparent_1.6px)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* 页头 */}
      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">研究テーマ / Research</h1>
        <p className="mt-3 text-white/75 max-w-3xl">
          数理・信号処理・確率過程・博弈論を横断し、市場の複雑性を「観測可能な仮説」として再構成する。
          We recast market complexity as observable hypotheses across mathematics, signal processing, stochastic dynamics and game theory.
        </p>
      </section>

      {/* 卡片列表（手机单列，桌面维持视觉层级） */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6">
          {items.map((it) => (
            <details
              key={it.key}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden open:bg-white/[0.06] transition"
            >
              <summary className="list-none cursor-pointer">
                {/* 手机竖排 / 桌面横排 */}
                <div className="p-5 flex flex-col md:flex-row md:items-center gap-5">
                  {/* 图片（改用 next/image） */}
                  <div className="relative mx-auto md:mx-0 shrink-0 w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
                    <Image
                      src={it.img}
                      alt={it.titleEn}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 240px"
                      priority={false}
                    />
                  </div>

                  {/* 标题区 */}
                  <div className="min-w-0 leading-snug text-center md:text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{it.titleJp}</h3>
                    <p className="text-white/70 text-sm sm:text-base md:text-lg mt-1">{it.titleEn}</p>
                  </div>

                  {/* 下拉图标（lucide-react） */}
                  <ChevronDown
                    className="mx-auto md:ml-auto mt-2 md:mt-0 size-5 text-white/70 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </div>
              </summary>

              {/* 折叠内容 */}
              <div className="px-5 pb-5">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-4">
                  <div>
                    <p className="text-white/90">{it.blurbJp}</p>
                    <p className="mt-2 text-white/80">{it.blurbEn}</p>
                  </div>

                  {(it.kpisJp?.length || it.kpisEn?.length) && (
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide text-white/60">KPIs（指標）</div>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                          {it.kpisJp?.map((k, i) => <li key={`kpi-jp-${it.key}-${i}`}>{k}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide text-white/60">KPIs (Indicators)</div>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                          {it.kpisEn?.map((k, i) => <li key={`kpi-en-${it.key}-${i}`}>{k}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}

                  {(it.pitfallsJp?.length || it.pitfallsEn?.length) && (
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide text-white/60">Pitfalls（留意点）</div>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                          {it.pitfallsJp?.map((p, i) => <li key={`pit-jp-${it.key}-${i}`}>{p}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-lg bg白/[0.03] border border-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide text-white/60">Pitfalls</div>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                          {it.pitfallsEn?.map((p, i) => <li key={`pit-en-${it.key}-${i}`}>{p}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}

                  {(it.useCasesJp?.length || it.useCasesEn?.length) && (
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide text-white/60">実装例</div>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                          {it.useCasesJp?.map((u, i) => <li key={`uc-jp-${it.key}-${i}`}>{u}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                        <div className="text-xs uppercase tracking-wide text-white/60">Use Cases</div>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                          {it.useCasesEn?.map((u, i) => <li key={`uc-en-${it.key}-${i}`}>{u}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>
    </main>
  );
}
