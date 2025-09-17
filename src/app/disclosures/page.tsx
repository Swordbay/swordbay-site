// src/app/disclosures/page.tsx
export default function DisclosuresPage() {
  const updated = "2025-09-14";

  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* Header */}
      <section className="px-6 pt-20 pb-10 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            免責事項 / Disclosures
          </h1>
          <p className="mt-2 text-sm text-white/70">最終更新日 / Last Updated: {updated}</p>
          <p className="mt-3 text-white/85">
            本ページは、Swordbay合同会社（以下「当社」）の活動範囲・法的位置付け・責任制限について明確化するためのものです。
          </p>
          <p className="text-white/80">
            This page clarifies Swordbay G.K.’s scope of activity, legal position, and limitations of liability.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl space-y-10">

          {/* 1. 業務範囲 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">1. 業務範囲 / Scope of Business</h2>
            <p className="text-white/90">
              当社は自己勘定による研究および運用のみを行い、第三者からの資金運用や投資一任契約、投資助言・代理業務は一切行っておりません。
              提示するコンテンツ・資料は教育・研究目的の一般的情報であり、特定の金融商品・取引への勧誘や推奨を意図するものではありません。
            </p>
            <p className="text-white/80">
              We operate exclusively with proprietary capital. We do not manage third-party assets,
              enter into discretionary investment contracts, or provide investment advice/agency services.
              All content and materials provided are for research and educational purposes only, not solicitation or recommendation of any financial products or transactions.
            </p>
          </article>

          {/* 2. 法的立場 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">2. 法的立場 / Regulatory Position</h2>
            <p className="text-white/90">
              当社は「投資助言・代理業」または「投資運用業」の登録業者ではありません。従って、本サイトや資料は
              金融商品取引法上の投資助言・勧誘に該当するものではなく、専ら自己勘定取引と研究活動の範囲に限定されます。
            </p>
            <p className="text-white/80">
              Swordbay G.K. is not registered as an investment advisory/agency or investment management business under the Financial Instruments and Exchange Act of Japan. 
              Accordingly, nothing herein constitutes investment advice or solicitation, and our activities are strictly limited to proprietary trading and research.
            </p>
          </article>

          {/* 3. 情報の正確性 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">3. 情報の正確性 / Accuracy of Information</h2>
            <p className="text-white/90">
              本サイトに掲載される内容は、正確性・完全性・最新性を保証するものではありません。当社は提供情報の誤りや遅延、
              または利用に伴う損害について一切の責任を負いません。
            </p>
            <p className="text-white/80">
              Information provided on this Site is not guaranteed to be accurate, complete, or up-to-date.
              We accept no liability for errors, delays, or damages arising from the use of such information.
            </p>
          </article>

          {/* 4. 投資リスク */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">4. 投資リスク / Investment Risks</h2>
            <p className="text-white/90">
              金融商品取引には元本欠損を含むリスクが伴います。ボラティリティ、流動性、金利、信用、為替等の要因により、
              想定外の損失が発生する可能性があります。当社は第三者の投資判断・結果に対して責任を負いません。
            </p>
            <p className="text-white/80">
              Trading financial instruments involves risks, including potential loss of principal.
              Volatility, liquidity, interest rates, credit, and foreign exchange factors may result in unexpected losses.
              We assume no responsibility for investment decisions or outcomes made by third parties.
            </p>
          </article>

          {/* 5. 米国・国際基準 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">5. 米国・国際基準 / U.S. & International Standards</h2>
            <p className="text-white/90">
              本サイトの表現は、米国や国際的な規制環境を前提とした専門用語を含む場合がありますが、
              いずれも情報提供のみに限定されます。米国証券取引委員会（SEC）、商品先物取引委員会（CFTC）、
              またはその他外国当局への登録を前提としたサービスではありません。
            </p>
            <p className="text-white/80">
              Certain expressions on this Site may reflect U.S. or international regulatory contexts,
              but are strictly informational. Nothing constitutes services requiring registration with the
              SEC, CFTC, or any other foreign regulator.
            </p>
          </article>

          {/* 6. 責任制限 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">6. 責任制限 / Limitation of Liability</h2>
            <p className="text-white/90">
              当社は本サイト利用に関連して生じたいかなる直接的・間接的損害に対しても責任を負いません。
              ユーザーは自己責任において本サイトを利用するものとします。
            </p>
            <p className="text-white/80">
              We disclaim all liability for any direct or indirect damages arising from use of this Site.
              Users access and use the Site at their own responsibility.
            </p>
          </article>

          {/* 7. 事業者情報 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">7. 事業者情報 / Entity Information</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-white/90">
                事業者情報および所在地については「会社情報 / Company Info」ページをご参照ください。
              </p>
              <p className="text-white/80">
                For details of our entity information and address, please refer to the “Company Info” page.
              </p>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
