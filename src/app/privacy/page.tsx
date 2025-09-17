// src/app/privacy/page.tsx
export default function PrivacyPage() {
  const updated = "2025-09-14";

  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      {/* 顶部标题 */}
      <section className="px-6 pt-20 pb-10 border-b border-white/10 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E] to-[#0B0C0E]/90">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            プライバシーポリシー / Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-white/70">最終更新日 / Last Updated: {updated}</p>
          <p className="mt-3 text-white/85">
            当社（Swordbay合同会社）は自己勘定のみで運用し、投資勧誘・投資助言は行いません。本ポリシーは
            本サイト（swordbay.com）における個人データの取扱いに適用されます。
          </p>
          <p className="text-white/80">
            We operate solely with proprietary capital and do not provide investment solicitation or advice.
            This policy governs how personal data is handled on swordbay.com.
          </p>
        </div>
      </section>

      {/* 正文 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl space-y-10">

          {/* 1 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">1. 適用範囲 / Scope</h2>
            <p className="text-white/90">
              本ポリシーは、当社が本サイトを通じて取得・利用する個人データ（日本法上の「個人情報」および関連情報）
              に適用されます。EEA/UK 居住者のデータ処理には、適用ある限り GDPR / UK GDPR の要件も考慮します。
            </p>
            <p className="text-white/80">
              This Policy applies to personal data collected and used through the Site. Where applicable,
              processing for EEA/UK residents considers requirements under the GDPR/UK GDPR.
            </p>
          </article>

          {/* 2 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">2. 取得する情報 / Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>お問い合わせ情報（氏名、メール、所属、電話番号、自由記載 等）</li>
              <li>技術情報（IP、ブラウザ/OS、リファラ、閲覧/操作ログ、エラー・パフォーマンス計測）</li>
              <li>クッキー/ローカルストレージ（選好設定、同意状態、セッション識別子 等）</li>
              <li>メール送受信メタデータ（送信時刻、配信可否 等）</li>
              <li>任意提供資料（職務経歴 等）※提供目的の範囲でのみ利用</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Contact data (name, email, organization, phone, free-text message)</li>
              <li>Technical data (IP, browser/OS, referrer, usage logs, error/performance metrics)</li>
              <li>Cookies/localStorage (preferences, consent state, session identifiers)</li>
              <li>Email metadata (timestamps, deliverability)</li>
              <li>Any materials you voluntarily submit (used only for the stated purposes)</li>
            </ul>
            <p className="text-white/75 text-sm">
              注 / Note: クッキー単体は個人情報に当たらない場合がありますが、他情報と結合されると個人データとなり得ます。
            </p>
          </article>

          {/* 3 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">3. 取得方法 / How We Collect</h2>
            <p className="text-white/90">
              フォーム送信・メール送付等による直接取得、ならびにサイト利用時の自動取得（ログ/クッキー等）により情報を取得します。
            </p>
            <p className="text-white/80">
              We collect data you provide directly (forms, emails) and automatically through your use
              of the Site (logs, cookies, similar technologies).
            </p>
          </article>

          {/* 4 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">4. 利用目的（公表事項） / Purposes of Use</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>お問い合わせ対応・連絡・記録管理</li>
              <li>サイト運営・保守・セキュリティ確保（不正対策、障害解析）</li>
              <li>利用状況の把握・品質向上・コンテンツ最適化（集計・分析）</li>
              <li>法令遵守、当局要請・紛争対応、権利保護</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Responding to inquiries and managing communications/records</li>
              <li>Operating, maintaining, and securing the Site (fraud prevention, incident analysis)</li>
              <li>Usage analytics for quality improvement and content optimization</li>
              <li>Compliance with laws, regulatory requests, dispute response, and protection of rights</li>
            </ul>
          </article>

          {/* 5 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">5. 法的根拠（EEA/UK）/ Legal Bases (EEA/UK)</h2>
            <p className="text-white/90">
              正当利益（サイト運営/セキュリティ/改善）、同意（分析クッキー等）、および法的義務を根拠として処理します。
            </p>
            <p className="text-white/80">
              We rely on legitimate interests (operation/security/improvement), your consent
              (e.g., analytics cookies), and legal obligations as applicable.
            </p>
          </article>

          {/* 6 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">6. クッキー / Cookies</h2>
            <p className="text-white/90">
              必須・選好・分析等のクッキーを使用する場合があります。ブラウザ設定で拒否/削除が可能です。
              詳細は「クッキー / Cookies」ページをご参照ください。
            </p>
            <p className="text-white/80">
              We may use essential, preference, and analytics cookies. You can refuse or delete cookies
              via your browser settings. See the Cookies page for details.
            </p>
          </article>

          {/* 7 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">
              7. 第三者提供・委託・共同利用 / Sharing, Processors & Joint Use
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>〔委託〕ホスティング、メール配信、解析等への取扱い委託（契約・必要最小限）</li>
              <li>〔第三者提供〕法令に基づく開示、権利保護のための提供</li>
              <li>〔共同利用〕現時点で実施していません（実施時は本ページで公表）</li>
              <li>〔販売の不実施〕いわゆる「個人データの販売」は行いません</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Processors: hosting, email delivery, analytics (under contracts; minimal necessary)</li>
              <li>Disclosures as required by law or to protect rights</li>
              <li>No current joint use; if adopted, details will be published here</li>
              <li>We do not “sell” personal data</li>
            </ul>
          </article>

          {/* 8 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">8. 国外移転 / International Transfers</h2>
            <p className="text-white/90">
              委託先が国外所在となる場合、適用法に基づく適切な保護措置（契約条項等）を講じます。
              EEA/UK の場合、必要に応じて標準契約条項（SCC）等を採用します。
            </p>
            <p className="text-white/80">
              Where providers are located outside Japan, we implement appropriate safeguards (e.g., contractual
              clauses). For EEA/UK residents, Standard Contractual Clauses (SCCs) may be used where required.
            </p>
          </article>

          {/* 9 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">9. 保管期間 / Retention</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>問い合わせ記録：原則 2 年（必要に応じ短縮/延長）</li>
              <li>サーバ/アクセスログ：原則 12 か月以内</li>
              <li>法令・紛争対応等に必要な場合はこの限りではありません</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Inquiry records: typically 2 years (subject to shorter/longer as needed)</li>
              <li>Server/access logs: typically retained up to 12 months</li>
              <li>Retention may differ where required by law or for disputes</li>
            </ul>
          </article>

          {/* 10 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">10. 安全管理措置 / Security Measures</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>組織的：最小権限、職務分掌、記録・監査</li>
              <li>技術的：暗号化、脆弱性管理、WAF/IDS、ログ監視</li>
              <li>人的/委託先：守秘義務、教育、ベンダーデューデリジェンス</li>
              <li>事故対応：インシデント手順、必要に応じ監督官庁/本人通知</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Organizational: least privilege, segregation of duties, records/audits</li>
              <li>Technical: encryption, vulnerability management, WAF/IDS, log monitoring</li>
              <li>People/Vendors: confidentiality, training, vendor due diligence</li>
              <li>Incidents: response playbooks; regulator/subject notifications as required</li>
            </ul>
          </article>

          {/* 11 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">11. 自動化された意思決定 / Automated Decisions</h2>
            <p className="text-white/90">
              本サイト上で、法的効果等をもたらす純粋な自動意思決定は行いません。
            </p>
            <p className="text-white/80">
              We do not engage in solely automated decision-making producing legal or similarly significant effects.
            </p>
          </article>

          {/* 12 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">12. 権利 / Your Rights</h2>
            <p className="text-white/90">
              当社保有個人データの開示・訂正・追加・削除・利用停止等を請求できます。EEA/UK 居住者は
              データポータビリティ、処理の制限、異議申立て等の権利も有します。手続詳細は「会社情報 / Company Info」
              記載の連絡先までお問い合わせください。
            </p>
            <p className="text-white/80">
              You may request access, correction, deletion, or restriction of your personal data.
              EEA/UK residents may also have portability and objection rights. Please contact us via the
              details on the Company Info page.
            </p>
          </article>

          {/* 13 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">13. 児童の個人情報 / Children’s Privacy</h2>
            <p className="text-white/90">
              本サイトは未成年者を主要対象としておらず、16 歳未満の情報を意図的に取得しません。不適切な取得が判明した場合は削除等を行います。
            </p>
            <p className="text-white/80">
              The Site is not directed to minors, and we do not knowingly collect data from children under 16.
              If collected without appropriate consent, we will delete it.
            </p>
          </article>

          {/* 14 */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">14. 改定 / Changes</h2>
            <p className="text-white/90">
              法令・運用の変更等に応じて本ポリシーを改定することがあります。重要な変更は本サイト上で告知します。
            </p>
            <p className="text-white/80">
              We may update this Policy to reflect legal or operational changes. Material updates will be announced on the Site.
            </p>
          </article>

          {/* 15（地址信息统一收口至 Company Info） */}
          <article className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">15. 事業者情報・問い合わせ先 / Controller & Contact</h2>
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
