export default function CookiesPage() {
  const updated = "2025-09-14";

  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* Header */}
      <section className="px-6 pt-20 pb-10 border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            クッキー / Cookies
          </h1>
          <p className="mt-2 text-sm text-white/70">最終更新日 / Last Updated: {updated}</p>
          <p className="mt-3 text-white/85">
            本ページは、Swordbay合同会社（以下「当社」）のウェブサイトにおけるクッキー等の利用について説明するものです。
          </p>
          <p className="text-white/80">
            This page explains how cookies and similar technologies are used on the Swordbay G.K. website.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl space-y-10">

          {/* 1. 概要 / What are cookies */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">1. 概要 / What Are Cookies</h2>
            <p className="text-white/90">
              クッキーは、サイトの利用体験を維持・向上するために、ブラウザに保存される小さなテキストファイルです。
              当社は、サイトの基本機能・安全性の確保、選好の保持、品質改善のためにクッキー（または同等技術）を使用する場合があります。
            </p>
            <p className="text-white/80">
              Cookies are small text files stored in your browser. We may use cookies (or similar
              technologies) to ensure core site functionality and security, remember preferences, and
              improve quality.
            </p>
          </article>

          {/* 2. 種類 / Types */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">2. 使用するクッキーの種類 / Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-white/90">
                必須クッキー（Strictly Necessary）：セッション維持、フォーム送信、負荷分散、セキュリティ等の基本機能に不可欠。
              </li>
              <li className="text-white/90">
                選好クッキー（Preferences）：言語や表示設定など、ユーザー選好を保存。
              </li>
              <li className="text-white/90">
                分析クッキー（Analytics）：匿名化されたトラフィック測定・品質改善のための集計。※ 現時点では広告目的のトラッキングは行いません。
              </li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Strictly necessary: session continuity, form submission, load balancing, security.</li>
              <li>Preferences: store language and display choices.</li>
              <li>
                Analytics: aggregated measurement for quality improvements. <em>We currently do not use
                advertising or cross-site tracking cookies.</em>
              </li>
            </ul>
          </article>

          {/* 3. 現在の利用状況 / Current Usage */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">3. 現在の利用状況 / Current Usage</h2>
            <p className="text-white/90">
              当サイトは主として必須クッキーを用いて基本機能とセキュリティを維持します。分析クッキーは導入時に本ページを更新し、同意管理を実装します。
            </p>
            <p className="text-white/80">
              We primarily rely on strictly necessary cookies. If analytics are enabled in the future,
              we will update this page and implement consent management.
            </p>

            {/* 表：自サイト由来の想定クッキー（プレースホルダ） */}
            <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/[0.06] text-white/80">
                  <tr>
                    <th className="px-4 py-2 text-left">クッキー名 / Name</th>
                    <th className="px-4 py-2 text-left">目的 / Purpose</th>
                    <th className="px-4 py-2 text-left">保持期間 / Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-4 py-2 text-white/90">sb-session</td>
                    <td className="px-4 py-2 text-white/80">セッション維持 / Session continuity</td>
                    <td className="px-4 py-2 text-white/70">ブラウザ終了まで / Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-white/90">sb-consent</td>
                    <td className="px-4 py-2 text-white/80">同意状態の保存 / Consent state</td>
                    <td className="px-4 py-2 text-white/70">最大 12 ヶ月 / up to 12 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-white/90">sb-prefs</td>
                    <td className="px-4 py-2 text-white/80">言語・表示設定 / Language & display preferences</td>
                    <td className="px-4 py-2 text-white/70">最大 12 ヶ月 / up to 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-white/60">
              ※ 上記は代表例です。構成変更時には名称・保持期間が変わる場合があります。
            </p>
          </article>

          {/* 4. 同意管理 / Consent */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">4. 同意管理 / Consent Management</h2>
            <p className="text-white/90">
              分析等の任意クッキーを導入する場合、バナーや設定パネルを通じて同意・撤回を管理できる仕組みを提供します。必須クッキーは同意の対象外です。
            </p>
            <p className="text-white/80">
              If optional analytics are introduced, we will provide a banner or settings panel to manage consent and withdrawal.
              Strictly necessary cookies are not subject to consent.
            </p>
          </article>

          {/* 5. ブラウザ設定 / Browser Controls */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">5. ブラウザ設定 / Browser Controls</h2>
            <p className="text-white/90">
              ブラウザ設定によりクッキーの拒否・削除が可能です。ただし、必須クッキーを無効化するとサイトの一部機能が正常に動作しない場合があります。
            </p>
            <p className="text-white/80">
              You can block or delete cookies via your browser settings. Disabling strictly necessary cookies
              may impair core functionality of the Site.
            </p>
          </article>

          {/* 6. 第三者クッキー / Third-Party Cookies */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">6. 第三者クッキー / Third-Party Cookies</h2>
            <p className="text-white/90">
              現時点で、当社は広告目的の第三者トラッキングクッキーを利用していません。解析ツール等を導入する場合は、本ページにて提供者名・目的・オプトアウト手段を明示します。
            </p>
            <p className="text-white/80">
              We do not currently use third-party advertising trackers. If analytics providers are added,
              we will disclose the provider, purpose, and opt-out options here.
            </p>
          </article>

          {/* 7. 保管・セキュリティ / Retention & Security */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">7. 保管・セキュリティ / Retention & Security</h2>
            <p className="text-white/90">
              クッキー由来のデータは、利用目的達成に必要な期間のみ保持し、プライバシーポリシーに記載の安全管理措置に従って取り扱います。
            </p>
            <p className="text-white/80">
              Cookie-derived data is retained only as long as necessary and safeguarded per our Privacy Policy.
            </p>
          </article>

          {/* 8. 変更 / Changes */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">8. 変更 / Changes</h2>
            <p className="text-white/90">
              クッキーの利用方針を更新する場合があります。重要な変更は本ページで告知します。
            </p>
            <p className="text-white/80">
              We may update this Cookie Notice. Material changes will be announced on this page.
            </p>
          </article>

          {/* 9. 問い合わせ / Contact */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">9. 問い合わせ / Contact</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-white/90">
                事業者情報や所在地は「会社情報 / Company Info」をご参照ください。クッキーの取扱いに関するご質問は同ページ記載の連絡先まで。
              </p>
              <p className="text-white/80">
                For entity information and address, see “Company Info”. Questions about cookies can be directed to the contact listed there.
              </p>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
