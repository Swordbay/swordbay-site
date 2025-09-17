"use client";

import Link from "next/link";

export default function LegalHub() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-white">
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold font-serif"> 法務情報 / Legal Hub</h1>
        <p className="mt-4 text-white/70">
          当社の法務関連情報をご覧いただけます。  
          You can access Swordbay’s legal information below.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 space-y-6 pb-20">
        <Link
          href="/legal/company"
          className="block rounded-lg border border-white/15 p-6 hover:bg-white/[0.03]"
        >
          <h2 className="text-xl font-semibold">会社情報 / Company Info</h2>
          <p className="text-white/70 text-sm mt-2">
            法人概要と基本情報 / Corporate profile and company details
          </p>
        </Link>

        <Link
          href="/legal/tokusho"
          className="block rounded-lg border border-white/15 p-6 hover:bg-white/[0.03]"
        >
          <h2 className="text-xl font-semibold">特定商取引法に基づく表示 / Legal Disclosure</h2>
          <p className="text-white/70 text-sm mt-2">
            サブスクリプションや有料サービスに関する法定表示 / Required disclosures for subscriptions
          </p>
        </Link>

        <Link
          href="/legal/terms"
          className="block rounded-lg border border-white/15 p-6 hover:bg-white/[0.03]"
        >
          <h2 className="text-xl font-semibold">利用規約 / Terms of Use</h2>
          <p className="text-white/70 text-sm mt-2">
            ご利用上のルールと条件 / Rules and conditions for use
          </p>
        </Link>
      </section>
    </main>
  );
}
