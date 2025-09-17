"use client";

export default function TokushoPage() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight font-serif text-center">
          特定商取引法に基づく表記
        </h1>

        {/* 日本語版 */}
        <div className="mt-10 space-y-6 text-[0.95rem] leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg">事業者の氏名（会社名）</h2>
            <p>Swordbay合同会社</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">事業者の住所</h2>
            <p>秋田県秋田市御所野元町７丁目１番４号</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">事業者の代表者</h2>
            <p>代表社員 GAO TIEYUAN</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">連絡先</h2>
            <p>電話番号：070-9096-7504</p>
            <p>メールアドレス：info@swordbay.com</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">販売価格・対価</h2>
            <p>各プランに記載（税込）。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Basic：月額9,800円（税込）／単品12,000円（税込）</li>
              <li>Pro：月額29,800円（税込）／単品15,000円（税込）</li>
              <li>Enterprise：個別見積／カスタム提供</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">代金の支払時期・方法</h2>
            <p>クレジットカード、銀行振込（現在準備中）。</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">役務の提供時期</h2>
            <p>入金確認後、順次提供。定期レポートは毎月または毎週配信。</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">返品・キャンセル</h2>
            <p>
              デジタル商品の性質上、返品・キャンセルはできません。
              誤課金や二重請求の場合のみ返金に応じます。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">動作環境</h2>
            <p>PDF閲覧可能な環境およびインターネット接続環境が必要です。</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">その他特記事項</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>投資助言・勧誘は行いません。</li>
              <li>教育・研究目的のみを対象とします。</li>
              <li>表示価格はすべて消費税込（10%）。</li>
            </ul>
          </div>
        </div>

        {/* 英語版 */}
        <div className="mt-20 space-y-6 text-[0.95rem] leading-relaxed">
          <h2 className="text-2xl font-serif font-semibold mb-6">
            Legal Disclosure under the Act on Specified Commercial Transactions
          </h2>

          <div>
            <h3 className="font-semibold text-lg">Business Operator</h3>
            <p>Swordbay LLC</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p>7-1-4 Goshono-Motomachi, Akita City, Akita, Japan</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Representative</h3>
            <p>GAO TIEYUAN (Managing Member)</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <p>Phone: +81-70-9096-7504</p>
            <p>Email: info@swordbay.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Sales Price</h3>
            <p>As indicated in each plan (tax included).</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Basic: JPY 9,800 per month / JPY 12,000 per single report</li>
              <li>Pro: JPY 29,800 per month / JPY 15,000 per single report</li>
              <li>Enterprise: Pricing upon request / Custom deliverables</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Payment Timing & Method</h3>
            <p>Credit card or bank transfer (currently under preparation).</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Service Provision</h3>
            <p>
              Provided sequentially after payment confirmation. Regular reports are
              delivered monthly or weekly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Cancellations & Refunds</h3>
            <p>
              Due to the nature of digital products, cancellations and returns are
              not accepted. Refunds will be made only in case of erroneous or
              duplicate charges.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">System Requirements</h3>
            <p>A PDF viewer and internet connection are required.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Additional Notes</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>No investment advice or solicitation is provided.</li>
              <li>For research and educational purposes only.</li>
              <li>All prices include 10% consumption tax.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
