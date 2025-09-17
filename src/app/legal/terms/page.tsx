// src/app/legal/terms/page.tsx
"use client";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight font-serif">
          利用規約 / Terms of Use
        </h1>
        <p className="mt-3 text-white/70 text-sm">
          施行日 / Effective date: [2025-09-16]
        </p>
        <p className="mt-4 text-white/80 leading-relaxed">
          本規約は、Swordbay合同会社（以下「当社」）が提供するウェブサイト、レポート、コードスニペット、資料、その他一切のコンテンツ（以下「本コンテンツ」）の利用条件を定めるものです。
          本コンテンツの閲覧・ダウンロード・利用により、利用者は本規約に同意したものとみなされます。
        </p>
        <p className="mt-2 text-white/65 leading-relaxed">
          These Terms govern your use of Swordbay G.K.’s website, reports, code snippets, and other materials (“Content”).
          By accessing or using the Content, you agree to be bound by these Terms.
        </p>
      </section>

      <hr className="mx-auto max-w-5xl border-white/15" />

      {/* 1. Scope */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">1. 適用範囲 / Scope</h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          本規約は、当社が提供する全てのオンライン/オフラインの本コンテンツに適用されます。個別契約（エンタープライズ契約等）において本規約と抵触する特約がある場合は、当該特約が優先します。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          These Terms apply to all Content provided by us, whether online or offline. If a separate written agreement
          (e.g., enterprise contract) conflicts with these Terms, the separate agreement shall prevail.
        </p>
      </section>

      {/* 2. Acceptance */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">2. 規約への同意 / Acceptance</h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          利用者は、本コンテンツの利用開始時点で本規約に同意したものとみなされます。未成年者は、親権者等の同意を得たうえで利用してください。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          You agree to these Terms upon first use of the Content. If you are a minor, you must obtain consent from a legal guardian.
        </p>
      </section>

      {/* 3. License & Research-only */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          3. 許諾と研究目的限定 / License & Research-Only Use
        </h2>
        <ul className="mt-3 space-y-2 text-[0.97rem] leading-relaxed">
          <li>・当社は、利用者に対し、<span className="font-semibold">非独占的・譲渡不可・再許諾不可</span>の範囲で、本コンテンツを<span className="font-semibold">研究・教育目的</span>に限り内部利用する権利を付与します。</li>
          <li>・商用利用（顧客向けの有償/無償の提供、投資運用・助言・勧誘等を含む）には、当社の<span className="font-semibold">事前書面による許可</span>が必要です。</li>
        </ul>
        <ul className="mt-2 space-y-2 text-white/70 text-[0.95rem] leading-relaxed">
          <li>- We grant you a <span className="font-semibold">non-exclusive, non-transferable, non-sublicensable</span> license to use the Content strictly for <span className="font-semibold">research and educational</span> purposes within your organization.</li>
          <li>- Any commercial use (including client-facing delivery, investment management/advisory/solicitation) requires our <span className="font-semibold">prior written consent</span>.</li>
        </ul>
      </section>

      {/* 4. Prohibited Conduct */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">4. 禁止事項 / Prohibited Conduct</h2>
        <ul className="mt-3 space-y-2 text-[0.97rem] leading-relaxed">
          <li>・本コンテンツの転載・再配布・再販売・貸与・リース・フレーミング・公開等</li>
          <li>・スクレイピング、クローリング、自動取得による大量ダウンロード</li>
          <li>・リバースエンジニアリング、改変、二次著作物の外部公開</li>
          <li>・不正アクセス、セキュリティ回避、アカウント共有</li>
          <li>・法令、公序良俗、第三者権利（知財・プライバシー・データ契約）に反する行為</li>
          <li>・金融商品取引法等に抵触し得る利用（投資助言・運用受託等）</li>
        </ul>
        <ul className="mt-2 space-y-2 text-white/70 text-[0.95rem] leading-relaxed">
          <li>- Reproduction, redistribution, resale, lending, leasing, framing, or public display of the Content</li>
          <li>- Scraping/crawling or automated mass download</li>
          <li>- Reverse engineering, modification, or publishing derivative works externally</li>
          <li>- Unauthorized access, security circumvention, or account sharing</li>
          <li>- Any violation of laws, public order, or third-party rights (IP, privacy, data contracts)</li>
          <li>- Uses that may constitute investment advice/management under applicable laws</li>
        </ul>
      </section>

      {/* 5. IP */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">5. 知的財産権 / Intellectual Property</h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          本コンテンツの著作権・商標権・ノウハウ等一切の知的財産権は当社または正当な権利者に帰属します。明示的な許諾がない限り、権利は一切移転しません。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          All IP rights in the Content are owned by us or our licensors. No rights are transferred unless expressly granted in writing.
        </p>
      </section>

      {/* 6. Third-Party Data */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          6. 第三者データ・資料 / Third-Party Data & Materials
        </h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          本コンテンツには、取引所・データプロバイダ・学術資料等の第三者著作物が含まれる場合があります。当該データは各提供者の利用条件に従い、利用者はそれらを遵守するものとします。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          The Content may incorporate third-party materials (e.g., exchange feeds, data vendors, academic works). Your use must comply with the applicable third-party terms.
        </p>
      </section>

      {/* 7. No Investment Advice */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          7. 非勧誘・非助言 / No Investment Advice or Solicitation
        </h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          本コンテンツは研究・教育目的の情報提供であり、特定銘柄等の売買を勧誘・推奨するものではなく、投資助言・運用受託にも該当しません。投資判断・取引は自己責任で行ってください。
          免責事項は <a href="/disclosures" className="underline">/disclosures</a> を参照してください。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          The Content is for research/educational purposes only. It does not constitute investment advice or solicitation.
          Your decisions and trades are solely at your own risk. See our disclosures at <a href="/disclosures" className="underline">/disclosures</a>.
        </p>
      </section>

      {/* 8. Hypothetical Performance */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          8. 仮想・過去実績の表示 / Hypothetical & Past Performance
        </h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          バックテスト等の結果は仮想的なものであり、実運用実績を示すものではありません。過去のパフォーマンスは将来の成果を保証しません。
          実取引コスト、スリッページ、流動性制約等は結果に重大な影響を与え得ます。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          Backtests and simulations are hypothetical and do not represent actual trading results. Past performance is not indicative of future results. Transaction costs, slippage, and liquidity constraints materially affect outcomes.
        </p>
      </section>

      {/* 9. Disclaimer & Limitation */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          9. 免責・保証否認・責任制限 / Disclaimer & Limitation of Liability
        </h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          本コンテンツは「現状有姿」で提供され、明示黙示を問わず一切の保証（正確性、完全性、有用性、特定目的適合性等）を行いません。法令上許容される最大限の範囲で、当社は本コンテンツの利用に起因または関連して生じるいかなる損害についても責任を負いません。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          The Content is provided “as is,” without warranties of any kind. To the fullest extent permitted by law, we shall not be liable for any damages arising from or relating to your use of the Content.
        </p>
      </section>

      {/* 10. Confidentiality */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">10. 機密保持 / Confidentiality</h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          非公開資料、エンタープライズ向け資料、パスワード保護領域の情報は機密情報とみなされ、第三者への開示・共有・外部公開を禁止します。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          Non-public materials, enterprise deliverables, and password-protected resources are confidential and may not be disclosed or shared with third parties.
        </p>
      </section>

      {/* 11. Compliance */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">11. 準拠法・輸出管理 / Compliance</h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          利用者は、適用法令、制裁、輸出管理規制（日本・米国等）を遵守するものとします。金融商品取引法その他の規制に抵触する利用は禁止されます。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          You must comply with applicable laws, sanctions, and export controls (Japan, U.S., etc.). Any use that may violate financial regulations is prohibited.
        </p>
      </section>

      {/* 12. Governing Law */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          12. 準拠法・管轄 / Governing Law & Jurisdiction
        </h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          本規約は日本法に準拠し、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          These Terms are governed by the laws of Japan. The Tokyo District Court shall have exclusive jurisdiction.
        </p>
      </section>

      {/* 13. Changes & Termination */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">
          13. 変更・終了 / Changes & Termination
        </h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          当社は、合理的な必要性に基づき本規約および本コンテンツを変更・中止・終了することができます。重要な変更は本サイト上で告知します。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          We may modify or discontinue the Content or these Terms as reasonably necessary, with material changes announced on this site.
        </p>
      </section>

      {/* 14. Contact */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold font-serif tracking-tight">14. 問い合わせ先 / Contact</h2>
        <p className="mt-3 text-[0.97rem] leading-relaxed">
          本規約に関するお問い合わせは、<a href="/contact" className="underline">/contact</a> または
          <span> [info@swordbay.com]</span> までご連絡ください。
        </p>
        <p className="mt-2 text-white/70 text-[0.95rem] leading-relaxed">
          For inquiries regarding these Terms, please contact us at <a href="/contact" className="underline">/contact</a> or <span>[info@swordbay.com]</span>.
        </p>
      </section>

      {/* Footer note */}
      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <p className="text-xs text-white/60">
          本規約は情報提供のみを目的としており、法的助言を構成するものではありません。必要に応じて専門家にご相談ください。 /
          These Terms are for informational purposes only and do not constitute legal advice.
        </p>
      </section>
    </main>
  );
}
