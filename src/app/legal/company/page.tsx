"use client";

export default function CompanyInfoPage() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight font-serif text-center">
          会社情報 / Company Info
        </h1>

        {/* 日本語版 */}
        <div className="mt-10 space-y-6 text-[0.95rem] leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg">会社名</h2>
            <p>Swordbay合同会社</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">本店所在地</h2>
            <p>秋田県秋田市御所野元町７丁目１番４号</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">代表者名</h2>
            <p>GAO TIEYUAN（代表社員）</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">設立年月日</h2>
            <p>2025年9月</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">資本金</h2>
            <p>500万円</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">事業内容の概要</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>コンピュータプログラム及びソフトウェアの企画、設計、開発、販売並びに保守に関する業務</li>
              <li>情報処理、データ分析、クラウドサービスの企画、開発及び提供に関する業務</li>
              <li>金融工学、数量的モデル、AI及び機械学習アルゴリズムの研究開発並びにその成果を活用したシステム設計及び受託業務</li>
              <li>情報処理システム及びデータ基盤に関する技術的コンサルティング業務</li>
              <li>
                自己資金による有価証券の取得、保有、運用及び管理並びにこれらに関する調査・研究
                （第三者の資産の運用、投資一任、投資助言・代理等を除く。）
              </li>
              <li>不動産の取得、保有、運用、投資及び賃貸に関する業務</li>
              <li>学術研究、教育、出版、研修及びセミナーの企画、運営に関する業務</li>
              <li>前各号に附帯又は関連する一切の業務</li>
              <li>法令に基づく許認可・登録等を要する場合は、当該許認可・登録等を取得した上で行う</li>
            </ul>
          </div>
        </div>

        {/* 英語版 */}
        <div className="mt-16 space-y-6 text-[0.95rem] leading-relaxed">
          <h2 className="text-2xl font-serif font-semibold mb-4">Company Information (English)</h2>

          <div>
            <h3 className="font-semibold text-lg">Company Name</h3>
            <p>Swordbay LLC</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Head Office</h3>
            <p>7-1-4 Goshono-Motomachi, Akita City, Akita, Japan</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Representative</h3>
            <p>GAO TIEYUAN (Managing Member)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Established</h3>
            <p>September 2025</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Capital</h3>
            <p>JPY 5,000,000</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Business Description</h3>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Planning, design, development, sales, and maintenance of computer programs and software</li>
              <li>Planning, development, and provision of information processing, data analysis, and cloud services</li>
              <li>
                Research and development of financial engineering, quantitative models, AI and machine learning
                algorithms, and commissioned projects utilizing such results
              </li>
              <li>Technical consulting on information systems and data infrastructure</li>
              <li>
                Acquisition, holding, management, and operation of securities with proprietary capital, as well as
                related research and analysis (excluding management of third-party assets, discretionary investment, or
                investment advisory/agency services)
              </li>
              <li>Acquisition, holding, operation, investment, and leasing of real estate</li>
              <li>Academic research, education, publishing, training, and seminar planning and operation</li>
              <li>Any and all businesses incidental or related to the above items</li>
              <li>
                When required by applicable laws and regulations, the relevant permits and registrations will be obtained
                before conducting such business
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
